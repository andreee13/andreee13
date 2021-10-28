'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fb87f363916acb0187e518e8a51082bd",
"assets/assets/animations/3d_geometric.json": "893be19b56e4b52ae4a9b0a60b15a4e3",
"assets/assets/animations/blob_green.json": "b33aea703147c038cf97dbead521ebad",
"assets/assets/animations/data_blocks.json": "6f0365a5bcd920a48b86074428d70d31",
"assets/assets/animations/digital_rain.json": "48554c068ca5f1924ad4fadaa7babd95",
"assets/assets/animations/loading_indicator.json": "0f8343aa0128f53151250989133e78c6",
"assets/assets/animations/logo_abstract.json": "b154d2bb084052088aae696fa8387069",
"assets/assets/animations/new_logo_abstract.json": "f5c487470cbc842e2b785dd45f3137d7",
"assets/assets/animations/scroll_arrow.json": "8088a1f3f670b634d12b5c3bf8c2b5a5",
"assets/assets/animations/scroll_arrow_curved.json": "14ffc00dd2096f9501d6151137b12637",
"assets/assets/fonts/SFProDisplay-Black.ttf": "295be9fb41e124fbc4dd1392cccaaf6d",
"assets/assets/fonts/SFProDisplay-Bold.ttf": "368636f1b6e330a4806185cdf6bb44bc",
"assets/assets/fonts/SFProDisplay-Heavy.ttf": "a1196de3f5de864f812b83bae4229e14",
"assets/assets/fonts/SFProDisplay-Light.ttf": "eebf2894b069d9cb93a29dab12aa31f5",
"assets/assets/fonts/SFProDisplay-Medium.ttf": "c5a8e1f150a5b6d6d37e0f95220ed5f6",
"assets/assets/fonts/SFProDisplay-Regular.ttf": "6987bcc482500f459516dc0342836ee5",
"assets/assets/fonts/SFProDisplay-Semibold.ttf": "0538ddc92082d2ef2e7b375519825dac",
"assets/assets/fonts/SFProDisplay-Thin.ttf": "616c9904ca0af2343d27c93029f87165",
"assets/assets/fonts/SFProDisplay-Ultralight.ttf": "2a153e7817bfab335240d9eb2ee9a01d",
"assets/assets/images/Icon-192.png": "9bbc09a04ec0fee45f374bb87669f997",
"assets/assets/images/Icon-512.png": "6dca9650d3fc5b61ee355b20f6c50583",
"assets/FontManifest.json": "93f3fcabcd9cce0773c884afddbe78e4",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "acb645d3b066de2d3d6cc266a717efc7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"favicon.png": "9e7e8052be80bcf32142a3aa9e36cba7",
"icons/Icon-192.png": "9bbc09a04ec0fee45f374bb87669f997",
"icons/Icon-512.png": "6dca9650d3fc5b61ee355b20f6c50583",
"icons/Icon-maskable-192.png": "9bbc09a04ec0fee45f374bb87669f997",
"icons/Icon-maskable-512.png": "6dca9650d3fc5b61ee355b20f6c50583",
"index.html": "10ba02f6b7207fe9fe5de4eeeb3b3b70",
"/": "10ba02f6b7207fe9fe5de4eeeb3b3b70",
"main.dart.js": "664b12306f9160b664738ade4e1c065c",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
 // "/",
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
