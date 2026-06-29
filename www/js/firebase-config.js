// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUuAktxmXzwqd-c1HJSsswyhCkQz2ZSx4",
  authDomain: "parstary-9abd3.firebaseapp.com",
  projectId: "parstary-9abd3",
  storageBucket: "parstary-9abd3.firebasestorage.app",
  messagingSenderId: "521250017077",
  appId: "1:521250017077:web:9dc6bbc6a04e54c000867c",
  measurementId: "G-SVLFL18SXK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore (Database)
const db = firebase.firestore();

// Enable Offline Persistence
db.enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
    } else if (err.code == 'unimplemented') {
      console.warn('The current browser does not support all of the features required to enable persistence');
    }
  });

console.log("Firebase is connected successfully with your real keys!");

// Initialize Firebase Cloud Messaging
let messaging;
try {
  messaging = firebase.messaging();
  console.log("Firebase Cloud Messaging is supported and initialized.");
} catch (e) {
  console.warn("Firebase Cloud Messaging is not supported in this browser.", e);
}

// Function to request notification permission and get token
window.requestNotificationPermission = async function(serviceWorkerRegistration) {
  if (!messaging) return;
  
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // Get FCM token
      const currentToken = await messaging.getToken({ 
        vapidKey: 'BN6n-5hBIrxNqSflnI6TUuS9vY4qXnW63erbGV60H3ZC4yvYXSfjJCZ85SKZ_NzrdapsnyRgPaHSCaNcZc66cus', 
        serviceWorkerRegistration: serviceWorkerRegistration 
      });
      
      if (currentToken) {
        console.log('FCM Token:', currentToken);
        // You can send this token to your database to save it for this user
        // db.collection('fcmTokens').doc(currentToken).set({ token: currentToken, timestamp: new Date() });
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    } else {
      console.log('Unable to get permission to notify.');
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err);
  }
};

// Handle incoming messages when the app is in the foreground
if (messaging) {
  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // Optionally, show a custom UI toast or alert for foreground messages
    if (typeof showToast === 'function') {
      showToast(`🔔 ${payload.notification?.title || 'ئاگادارکەرەوەی نوێ'}`);
    }
  });
}
