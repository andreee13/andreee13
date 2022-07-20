'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "9bfd37b8868ab192f1977371a9f7b974",
"index.html": "cc382083be8cc53a5cc2f0be16250e41",
"/": "cc382083be8cc53a5cc2f0be16250e41",
"main.dart.js": "1dce36f0dd2e6a76015810077ed49cb2",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"canvas/scene.splinecode": "d303c64082fadeec2de40c436f43d898",
"canvas/runtime.js": "dc67568a4464584be1d7fa6d72e65f54",
"icons/Icon-192.png": "20f1190649a4803e2daa0c63fc6776c2",
"icons/Icon-maskable-192.png": "20f1190649a4803e2daa0c63fc6776c2",
"icons/Icon-maskable-512.png": "c7ae3ffe47872f863d49e87577ef956d",
"icons/Icon-512.png": "c7ae3ffe47872f863d49e87577ef956d",
"style.css": "976adcb940287109dba5d959f8df744b",
"manifest.json": "a27eb6bfc117bf5565492fd25706eb22",
"assets/AssetManifest.json": "efcce54aca07684dd3e0cf9800f6a86a",
"assets/NOTICES": "7d1c768448871140eed2a7c580f4825d",
"assets/FontManifest.json": "3ca64090b9da4a7c0a3988ea3cda93fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/markmemo/icon.png": "84a2ea8cd7e52fb2c39001a0baad3bef",
"assets/assets/images/markmemo/mockup.png": "4032b9055baeefc6fba1ffe35c212b09",
"assets/assets/images/markmemo/4.png": "8cef7d5bf341c2a1471dbb07ea4fabed",
"assets/assets/images/markmemo/5.png": "99f294e94b6d53bfd338340f89d2fd24",
"assets/assets/images/markmemo/2.png": "e94758a5f5d7ac9ac6c46bf828a22032",
"assets/assets/images/markmemo/3.png": "f3827629f96b5058a833dddc0c8ce4ab",
"assets/assets/images/markmemo/1.png": "09a05d60a987efedcb122421adf2f8ef",
"assets/assets/images/metamask.png": "a3c91b3d45fd2ddfa9c015e12126bc63",
"assets/assets/images/en.png": "e5ccb531b54405907ff8535848f668ba",
"assets/assets/images/ethereum.png": "2214386a20472bc5fba9309f1a90645f",
"assets/assets/images/polygon.png": "f84cc483cab9c1a320bdbc3bcda2ee97",
"assets/assets/images/paperopoli_terminal/icon.png": "842dcb77e7870ce9c26c22ec3fb55f26",
"assets/assets/images/paperopoli_terminal/mockup.png": "1872e83839f58a499a80cd43f8d6045b",
"assets/assets/images/paperopoli_terminal/1.jpeg": "5c3abcbd839831153213279ea2a65a8f",
"assets/assets/images/paperopoli_terminal/6.jpeg": "68735f8ec6296df543eaa74ea66b8137",
"assets/assets/images/paperopoli_terminal/4.jpeg": "4f156caaf238c73199daa3bf673d0b2c",
"assets/assets/images/paperopoli_terminal/5.jpeg": "05b48d034bacf55df34cac3b4245a3e8",
"assets/assets/images/paperopoli_terminal/2.jpeg": "c08d287920d29a7ea6d8eda2c2f5bfc7",
"assets/assets/images/paperopoli_terminal/3.jpeg": "7d083b82e0ef0cb14dc5136b82d1f733",
"assets/assets/images/chatty/icon.png": "add15b0ee67fe4bca9d64cecef163a52",
"assets/assets/images/chatty/mockup.png": "6024e09196d35c102b080d0a060e4cd5",
"assets/assets/images/chatty/4.png": "cbeda7144beca93fa1bbb69e395a7c75",
"assets/assets/images/chatty/5.png": "bee52267d603b93473f98e87b9e058b5",
"assets/assets/images/chatty/6.png": "ed19775990522c35fc6c5bfedd0cdd9e",
"assets/assets/images/chatty/2.png": "010320fe8307da44358c06594b836c0e",
"assets/assets/images/chatty/3.png": "676f5f95fe4c49cf02afa570974a18e6",
"assets/assets/images/chatty/1.png": "2638ee8a41e687483a14b1c62c79bb21",
"assets/assets/images/walletconnect.png": "5b5a360613910665bb3a5390652bc332",
"assets/assets/images/it.png": "afe3ca8f7656c9d1fb16c06ca80dcab4",
"assets/assets/images/tidety/icon.png": "0db6285175c6228b2d89ea5eab2a4a71",
"assets/assets/images/tidety/mockup.png": "a076d66380ebb37000e8b2800df2030d",
"assets/assets/images/tidety/4.png": "177e5594c3723b57df68ec6a37dc6565",
"assets/assets/images/tidety/5.png": "4f66c25292089fa4b5a1941f07d0709b",
"assets/assets/images/tidety/6.png": "9b34fbd7355e78feef9e8b7cd5c688d2",
"assets/assets/images/tidety/2.png": "18533eac96800053257456121eb1cd91",
"assets/assets/images/tidety/3.png": "ba080764056689917cc52387a2159c42",
"assets/assets/images/tidety/1.png": "5cb34b4517e58df972a6d7e101aeeb29",
"assets/assets/animations/contact.json": "46633ffffef52f1895a761bebc316a9b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
