import { register } from 'register-service-worker'
import { Notify } from 'quasar'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  registrationOptions: { scope: './' },

  ready ( registration ) {
    console.log('Service worker is active.')
    console.log(registration)

    // caches.open('v1').then(function(cache) {
    //   return cache.addAll([
    //     '../src/pages/mobile/HomeInformation.vue',
    //   ]);
    // })
  },

  registered ( registration ) {
    console.log('Service worker has been registered.')
     console.log(registration)
  },

  cached ( registration ) {
    this.addEventListener('fetch', function(event) {
      event.respondWith(
        // magic goes here
        caches.match(event.request)
      );
    });

    Notify.create({
      message: 'Service Worker cached.',
      color: 'black',
      position: 'top'
    })
    console.log('Content has been cached for offline use.')
    console.log(registration);
  },

  updatefound ( registration ) {
    console.log('New content is downloading.')
  },

  updated ( registration ) {
    console.log('New content is available; please refresh.')
  },

  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },

  error ( err ) {
    Notify.create({
      message: 'Service Worker Offline.',
      color: 'red',
      position: 'top'
    })
    console.error('Error during service worker registration:', err)
  }
})
