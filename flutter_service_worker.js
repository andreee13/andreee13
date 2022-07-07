'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "9bfd37b8868ab192f1977371a9f7b974",
"index.html": "6671cdbbd6e3da4a3cf01384bd635d96",
"/": "6671cdbbd6e3da4a3cf01384bd635d96",
"main.dart.js": "01ea61aefd0de9bf2363ab2d8b5a8e37",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"canvas/scene.splinecode": "3bf15fb9d74b9d7a9106041d3fedad3d",
"canvas/runtime.js": "53930cc0e5ade24881272af0f0247638",
"canvas/object.splinecode": "90ea8a0dd447607ed5f84869ac069798",
"icons/Icon-192.png": "20f1190649a4803e2daa0c63fc6776c2",
"icons/Icon-maskable-192.png": "20f1190649a4803e2daa0c63fc6776c2",
"icons/Icon-maskable-512.png": "c7ae3ffe47872f863d49e87577ef956d",
"icons/Icon-512.png": "c7ae3ffe47872f863d49e87577ef956d",
"style.css": "c0f6807fe9513910bcb67a6da2e162fe",
"manifest.json": "015bd48e2ca297c407f8ed1a48c1448b",
"assets/AssetManifest.json": "2a91517f3e67f3910b16f5fe06fa00b0",
"assets/NOTICES": "a2fc54257930bc0cef854d64ef554654",
"assets/FontManifest.json": "3ca64090b9da4a7c0a3988ea3cda93fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/appstore-full.png": "cff0fb23c8daf9b0961e3b6e8ddac32f",
"assets/assets/images/planet.png": "3658af0112e044d574d458796daaf078",
"assets/assets/images/metamask.png": "081585c3898ba6afb98bfe6b39776586",
"assets/assets/images/Instagram_icon.png": "be33c23138581c6232562e9d67624a11",
"assets/assets/images/cccircular.svg": "8fa5ba18fc60623ea3890bbc83ec133d",
"assets/assets/images/ethereum.png": "2214386a20472bc5fba9309f1a90645f",
"assets/assets/images/polygon.png": "f84cc483cab9c1a320bdbc3bcda2ee97",
"assets/assets/images/noise.jpeg": "b460858e87ea91b52b973ac6d1afca76",
"assets/assets/images/walletconnect.png": "5b5a360613910665bb3a5390652bc332",
"assets/assets/images/abstract_1.svg": "81f6f2f39d6f52df06b0f88fd14b603a",
"assets/assets/images/memoji.png": "aaf7ff7bb0eba0ef92ee7c058f8bd782",
"assets/assets/images/abstract_2.png": "08007c48543483e69adf01cf3c6742ea",
"assets/assets/images/abstract_1.png": "85e26132cc97172f2e2b2a5f09d53859",
"assets/assets/images/shape.gif": "27aab0c59be4bde448ac03915937834c",
"assets/assets/animations/scroll_arrow.json": "67ea434763e8b337f3f791b18ce76884",
"assets/assets/animations/done.json": "b317edd11cc287ccc8caa78f32684d02",
"assets/assets/animations/logo_abstract.json": "48c79ae18261900564e4fdb507fd9050",
"assets/assets/animations/breathing_shape.json": "a0ac05dadcdef7d145b2f5a747724230",
"assets/assets/animations/contact.json": "46633ffffef52f1895a761bebc316a9b",
"assets/assets/animations/new_logo_abstract.json": "913bc7dffd3d93174afb4a520b3c6e9e",
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
