const staticCacheName = 's-app-v1';

const assetUrls = [
    'index.html',
    ''
];

self.addEventListener('install', async (e) => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)
});

self.addEventListener('activate', (e) => {
    console.log('[SW]: activate')
});

self.addEventListener('fetch', (e) => {
    console.log('FETCH', e.request.url)
});
