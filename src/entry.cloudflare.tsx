import { render } from './entry.ssr';

export const onRequestGet = async ({ request, next, waitUntil }: any) => {
  try {
    const url = new URL(request.url);


    // Handle static assets
    if (/\.\w+$/.test(url.pathname)) {
      return next(request);
    }

    // do not using caching during development
    const useCache = url.hostname !== 'localhost';

    // Early return from cache
    const cache = await caches.open('custom:qwikcommunity');
    if (useCache) {
      const cachedResponse = await cache.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
    }

    // Generate Qwik SSR response
    const result = await render({
      url: request.url,
      prefetchStrategy: {
        implementation: 'link-prefetch',
      },
    });

    const response = new Response(result.html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': useCache
          ? `max-age=60, s-maxage=10, stale-while-revalidate=604800, stale-if-error=604800`
          : `no-cache, max-age=0`,
      },
    });

    if (useCache) {
      waitUntil(cache.put(request, response.clone()));
    }

    // Return Qwik SSR response
    return response;
  } catch (e: any) {
    // 500 Error
    return new Response(String(e.stack || e), { status: 500 });
  }
};
