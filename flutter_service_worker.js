'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "69c9d9eef0ecc9d712d11d10781272a1",
"assets/assets/animations/3d_geometric.json": "74cb86692b628af31537c7a5ae3df5ae",
"assets/assets/animations/3d_text.json": "b97282e37e057ecb1a4e963f10a2e440",
"assets/assets/animations/breathing_shape.json": "18b2c98506a31e65497bd1543953ab37",
"assets/assets/animations/contact.json": "eba079c333028c02e0ae6ee030bffeb4",
"assets/assets/animations/done.json": "b317edd11cc287ccc8caa78f32684d02",
"assets/assets/animations/logo_abstract.json": "b154d2bb084052088aae696fa8387069",
"assets/assets/animations/new_logo_abstract.json": "f5c487470cbc842e2b785dd45f3137d7",
"assets/assets/animations/scanning.json": "58650d81e67854a7db3ee7db33519e3a",
"assets/assets/animations/scroll_arrow.json": "67ea434763e8b337f3f791b18ce76884",
"assets/assets/fonts/SFProDisplay-Black.ttf": "295be9fb41e124fbc4dd1392cccaaf6d",
"assets/assets/fonts/SFProDisplay-Bold.ttf": "368636f1b6e330a4806185cdf6bb44bc",
"assets/assets/fonts/SFProDisplay-Heavy.ttf": "a1196de3f5de864f812b83bae4229e14",
"assets/assets/fonts/SFProDisplay-Light.ttf": "eebf2894b069d9cb93a29dab12aa31f5",
"assets/assets/fonts/SFProDisplay-Medium.ttf": "c5a8e1f150a5b6d6d37e0f95220ed5f6",
"assets/assets/fonts/SFProDisplay-Regular.ttf": "6987bcc482500f459516dc0342836ee5",
"assets/assets/fonts/SFProDisplay-Semibold.ttf": "0538ddc92082d2ef2e7b375519825dac",
"assets/assets/fonts/SFProDisplay-Thin.ttf": "616c9904ca0af2343d27c93029f87165",
"assets/assets/fonts/SFProDisplay-Ultralight.ttf": "2a153e7817bfab335240d9eb2ee9a01d",
"assets/assets/images/abstract_1.png": "85e26132cc97172f2e2b2a5f09d53859",
"assets/assets/images/abstract_1.svg": "81f6f2f39d6f52df06b0f88fd14b603a",
"assets/assets/images/abstract_2.png": "a72e48b4ff376851b7ab2e59ae134f13",
"assets/assets/images/appstore-full.png": "cff0fb23c8daf9b0961e3b6e8ddac32f",
"assets/assets/images/cccircular.svg": "8fa5ba18fc60623ea3890bbc83ec133d",
"assets/assets/images/ethereum.png": "2214386a20472bc5fba9309f1a90645f",
"assets/assets/images/Icon-192.png": "9bbc09a04ec0fee45f374bb87669f997",
"assets/assets/images/Icon-512.png": "6dca9650d3fc5b61ee355b20f6c50583",
"assets/assets/images/Instagram_icon.png": "be33c23138581c6232562e9d67624a11",
"assets/assets/images/metamask.png": "081585c3898ba6afb98bfe6b39776586",
"assets/assets/images/polygon.png": "f84cc483cab9c1a320bdbc3bcda2ee97",
"assets/assets/images/shape.gif": "27aab0c59be4bde448ac03915937834c",
"assets/assets/images/walletconnect.png": "5b5a360613910665bb3a5390652bc332",
"assets/FontManifest.json": "93f3fcabcd9cce0773c884afddbe78e4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3a36c7732610d91a6262e42b420d50e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "9bfd37b8868ab192f1977371a9f7b974",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "20f1190649a4803e2daa0c63fc6776c2",
"icons/Icon-512.png": "c7ae3ffe47872f863d49e87577ef956d",
"icons/Icon-maskable-192.png": "20f1190649a4803e2daa0c63fc6776c2",
"icons/Icon-maskable-512.png": "c7ae3ffe47872f863d49e87577ef956d",
"index.html": "7bc53c096ff923e44a24577e7fc2ffad",
"/": "7bc53c096ff923e44a24577e7fc2ffad",
"main.dart.js": "f55adebb8127eb1df2793a73fdb0b8e0",
"manifest.json": "dda5ca0211bea0555d6da128ce6caf89",
"version.json": "009c9e65172e010890f7f65fde438006"
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
