
// Cache ID version
const cacheID = 'v1';
// Files to precache
const cacheFiles = [
  // HTML Files
  './index.html',
  './offline.html',
  // CSS Files
  './sites/default/files/css/main.css',
  // Image Files
  './i/20101013_coho_138.jpg',
  './i/20101013_coho_138.jpg',
  './i/arc_480.jpg',
  './i/cal-aggie-band-uh-2-320.jpg',
  './i/farmar_480.jpg',
  './i/students_center_8459-320.jpg',
  './i/20111114_arboretum_034.jpg',
  './i/arc_800.jpg',
  './i/cal-aggie-band-uh-2-480.jpg',
  './i/farmar_800.jpg',  
  './i/students_center_8459-480.jpg',
  './i/20120106_students_center_8459.jpg',
  './i/as-thumbnail.jpg',
  './i/cal-aggie-band-uh-2-800.jpg',
  './i/farmar.jpg',
  './i/students_center_8459-800.jpg',
  './i/20120613_devon_lambert_0080_0-320.jpg',
  './i/as-thumbnail-m.jpg',
  './i/cal-aggie-band-uh-2.jpg',
  './i/fashion-design-class-uc-davis_0-320.jpg',
  './i/susan-williams-beach-925.jpg',
  './i/20120613_devon_lambert_0080_0-480.jpg',
  './i/awards-combo7tb.jpg',
  './i/carlito-lebrilla-925.jpg',
  './i/fashion-design-class-uc-davis_0-480.jpg',
  './i/susan-williams-beach-925-m.jpg',
  './i/20120613_devon_lambert_0080_0.jpg',
  './i/awards-combo7tb-m.jpg',
  './i/carlito-lebrilla-925-m.jpg',
  './i/fashion-design-class-uc-davis_0.jpg',
  './i/tercero_120-320.jpg',
  './i/20120928_tercero_120.jpg',
  './i/back-banner-1000.jpg',
  './i/coho_320.jpg',
  './i/gift-grass-min.png',
  './i/tercero_120-480.jpg',
  './i/20121005_pajamarino_288-320.jpg',
  './i/back-banner-1500.jpg',
  './i/coho_480.jpg',
  './i/gift-grass.png',
  './i/tercero_120-800.jpg',
  './i/20121005_pajamarino_288-480.jpg',
  './i/back-banner-500.jpg',
  './i/coho_800.jpg',
  './i/hen_housing_cage_freeedit.jpg',
  './i/thumbnail-ext.jpg',
  './i/20121005_pajamarino_288-800.jpg',
  './i/back-banner.jpg',
  './i/contests_racecar.jpg',
  './i/hen_housing_cage_freeedit-m.jpg',
  './i/thumbnail-ext-m.jpg',
  './i/20121005_pajamarino_288.jpg',
  './i/back-banner-m.jpg',
  './i/craft-center-uc-davis_0.jpg',
  './i/john-d-kemper-environ-925.jpg',
  './i/uc-davis-ranked-six-public-university-min.png',
  './i/20130612_segundodc_017.jpg',
  './i/badge-veterinary_0-min.png',
  './i/davis_west_village-46-320.jpg',
  './i/john-d-kemper-environ-925-m.jpg',
  './i/uc-davis-ranked-six-public-university.png',
  './i/20130927_buzz_154.jpg',
  './i/badge-veterinary_0.png',
  './i/davis_west_village-46-480.jpg',
  './i/logo.svg',
  './i/vtour-redbud-min.png',
  './i/20180421-ucdavismedal-01crop.jpg',
  './i/banduh-320.jpg',
  './i/davis_west_village-46-800.jpg',
  './i/mail-poppy-min.png',
  './i/vtour-redbud.png',
  './i/acls-combo3.jpg',
  './i/banduh-480.jpg',
  './i/davis_west_village-46.jpg',
  './i/mail-poppy.png',
  './i/welcome-uc-davis-transfer-class-1200.jpg',
  './i/ag-ranking-badge91916_0-min.png',
  './i/banduh.jpg',
  './i/dwib-thumbnail.jpg',
  './i/segundodc_017-320.jpg',
  './i/welcome-uc-davis-transfer-class-2020.jpg',
  './i/ag-ranking-badge91916_0.png',
  './i/banner-gold-min.png',
  './i/dwib-thumbnail-m.jpg',
  './i/segundodc_017-480.jpg',
  './i/welcome-uc-davis-transfer-class-2020-max.jpg',
  './i/arboretum_034-320.jpg',
  './i/banner-gold.png',
  './i/espn_basketball_crowdshot-320.jpg',
  './i/segundodc_017-800.jpg',
  './i/welcome-uc-davis-transfer-class-320.jpg',
  './i/arboretum_034-480.jpg',
  './i/brewing-class-uc-davis_0.jpg',
  './i/espn_basketball_crowdshot-480.jpg',
  './i/stadium-320.jpg',
  './i/welcome-uc-davis-transfer-class-480.jpg',
  './i/arboretum_034-800.jpg',
  './i/buzz_154-320.jpg',
  './i/espn_basketball_crowdshot-800.jpg',
  './i/stadium-480.jpg',
  './i/welcome-uc-davis-transfer-class-800.jpg',
  './i/arc_0.jpg',
  './i/buzz_154-480.jpg',
  './i/espn_basketball_crowdshot.jpg',
  './i/stadium-800.jpg',
  './i/where-is-uc-davis-icon_0-min.png',
  './i/arc_320.jpg',
  './i/buzz_154-800.jpg',
  './i/farmar_320.jpg',
  './i/stadium.jpg',
  './i/where-is-uc-davis-icon_0.png',
  // JS Files
  './sw.js',
  './app.js',
  // Misc. Files
  './manifest.json',
];

// Service Worker Install Event
self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(cacheID)
    .then(function(cache) {
      return cache.addAll(cacheFiles);
    })
    .catch(function(error) {
      console.log(`Unable to add cached assets: ${error}`);
    })
  );
});

// Service Worker Activate Event
self.addEventListener('activate', function(e) {
  e.waitUntil(
    // Load up all items from cache, and check if cache items are not outdated
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheID) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Service Worker Fetch Event
// self.addEventListener('fetch', function(e) {
//   console.log('Attempting to fetch');
//   e.respondWith(
//     // If request matches with something in cache, then return reponse
//     // from cache, otherwise fetch it
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheID).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          if (event.request.method != "POST") {
            cache.put(event.request, response.clone());
          }
          return response;
        })
        .catch(function(error) {
          console.log("error: " + error);
          return caches.match('./offline.html');
        });;
      });
    })
  );
});