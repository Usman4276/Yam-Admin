// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDTZ7doLzFlPhVyx9yhpR5CwMg2h90bLQg",
  authDomain: "admin-panel-3fbda.firebaseapp.com",
  projectId: "admin-panel-3fbda",
  storageBucket: "admin-panel-3fbda.appspot.com",
  messagingSenderId: "168708596417",
  appId: "1:168708596417:web:52d65cdd882546d6732a40",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
