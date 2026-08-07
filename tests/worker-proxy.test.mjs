import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import test from 'node:test';

async function loadWorker() {
  const source = await readFile(new URL('../src/index.js', import.meta.url), 'utf8');
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
  return (await import(moduleUrl)).default;
}

test('proxies allowed image URLs through the Worker with readable CORS headers', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url) => {
    assert.equal(url, 'https://bmp-prm.vevor.com/product/ABC/example.jpg');
    return new Response('image-bytes', {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Length': '11',
      },
    });
  };

  try {
    const worker = await loadWorker();
    const response = await worker.fetch(
      new Request('https://downloader.example/proxy?url=https%3A%2F%2Fbmp-prm.vevor.com%2Fproduct%2FABC%2Fexample.jpg')
    );

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('Access-Control-Allow-Origin'), '*');
    assert.equal(response.headers.get('Content-Type'), 'image/jpeg');
    assert.equal(await response.text(), 'image-bytes');
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects non-http proxy targets', async () => {
  const worker = await loadWorker();
  const response = await worker.fetch(
    new Request('https://downloader.example/proxy?url=file%3A%2F%2F%2FC%3A%2Fsecret.txt')
  );

  assert.equal(response.status, 400);
});
