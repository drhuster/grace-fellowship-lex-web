importScripts('/%3Crepository-name%3E/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/%3Crepository-name%3E/_nuxt/06846e7.js",
    "revision": "f53fcb4da8bb010f16266f5b1cc04438"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/0c6bb71.js",
    "revision": "3cf554e1394dba7316e026399e93cb89"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/0f52e5c.js",
    "revision": "5e93313b340f1123f1b62b149c39bd9a"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/10ac87b.js",
    "revision": "a93c5196885b32072bdd2fbaac9f1a59"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/1fd36ae.js",
    "revision": "d0846572280c2d96ef7d2f01f2840eb9"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/2ed7c17.js",
    "revision": "d97c1843827bcfcfa6e6ad1fed2e9711"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/35b8721.js",
    "revision": "869178c44105bab613562615710776bc"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/3ccabf8.js",
    "revision": "0a0fb027fea9fed7da3e42307b4e4164"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/491a055.js",
    "revision": "2369764da0cf2a4dc617c7553a566a41"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/5ae511f.js",
    "revision": "21563b32081c628e1a0a581da614fc46"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/6d562d2.js",
    "revision": "02f8836751a4ae5370155376e5815567"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/81383e0.js",
    "revision": "05c184790135fc6afee0a9b3c6d7eade"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/8be36bc.js",
    "revision": "5f25cdd45217a5e8d5c6e7bdb1426423"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/962e4c3.js",
    "revision": "863f2d23d870a8145cef4451a653b403"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/a0dbc65.js",
    "revision": "880cc913f84008749cbcbb704b15fab2"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/b556d80.js",
    "revision": "4489834a8afc30ffa48302a1aa1743d1"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/db37be0.js",
    "revision": "18519e5bcecaf9f21fc51b19624d7a13"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/df34612.js",
    "revision": "c624ef58becf73d011c1708d3b45f61c"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/fcb3021.js",
    "revision": "03eb2a1c0cb57c814715e65ddd24dcb5"
  }
], {
  "cacheId": "grace-fellowship-lex",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/%3Crepository-name%3E/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/%3Crepository-name%3E/.*'), workbox.strategies.networkFirst({}), 'GET')
