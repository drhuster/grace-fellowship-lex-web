importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13704a5.js",
    "revision": "3eee607251b49273c3b53620f0c21c7a"
  },
  {
    "url": "/_nuxt/27143a5.js",
    "revision": "69a401be14a334761c88fe24de8fd65b"
  },
  {
    "url": "/_nuxt/369a793.js",
    "revision": "25a1460fe2a73a57f855e32b6c88efb4"
  },
  {
    "url": "/_nuxt/3c55ced.js",
    "revision": "0b79c1fc181cba737844450ca4dafa3c"
  },
  {
    "url": "/_nuxt/553f7a9.js",
    "revision": "a534b489920571003c764397c4f009b7"
  },
  {
    "url": "/_nuxt/6f799b5.js",
    "revision": "fea17af26b189adba4c209dfe8350e0c"
  },
  {
    "url": "/_nuxt/7b5be29.js",
    "revision": "f6f5873b848aacee1aa935652da8ecb5"
  },
  {
    "url": "/_nuxt/7eb5e63.js",
    "revision": "2d01ad2754801769de6df21ff51b700f"
  },
  {
    "url": "/_nuxt/82414f7.js",
    "revision": "2f1061525a611df219d584cdec36fa02"
  },
  {
    "url": "/_nuxt/85751d1.js",
    "revision": "ad8f30e832858f73b516a802775aef94"
  },
  {
    "url": "/_nuxt/8f33e6f.js",
    "revision": "23664061bffc3e59607f7b65f9a3d929"
  },
  {
    "url": "/_nuxt/a771aae.js",
    "revision": "ad8ebf662fbf48ef51773ba1a43946ac"
  },
  {
    "url": "/_nuxt/bdbb268.js",
    "revision": "94351f2ba25fb4651ebe0f00c0552475"
  },
  {
    "url": "/_nuxt/bf72765.js",
    "revision": "f87d2479bb33c530e0999773d0f9304b"
  },
  {
    "url": "/_nuxt/d6dbb15.js",
    "revision": "3d426fb13b5b924834e099a50593d58f"
  },
  {
    "url": "/_nuxt/d9a6e3d.js",
    "revision": "8f7126eb1e70efe3945273046dba98d6"
  },
  {
    "url": "/_nuxt/db054cb.js",
    "revision": "d86a81507b640ad99066cc0b80fe8b54"
  },
  {
    "url": "/_nuxt/e257ded.js",
    "revision": "d3ecf828a0ada5a17c3049c3a0d14010"
  },
  {
    "url": "/_nuxt/e953cb2.js",
    "revision": "93f77a90dca7840cda55d6a369d8c7d1"
  }
], {
  "cacheId": "grace-fellowship-lex",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
