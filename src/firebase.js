// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyB72ci5bRUhHs8IT92jNzk6OtpsVQJ8xL4',
   authDomain: 'notes-app-pro-32606.firebaseapp.com',
   projectId: 'notes-app-pro-32606',
   storageBucket: 'notes-app-pro-32606.appspot.com',
   messagingSenderId: '631154791829',
   appId: '1:631154791829:web:45f552081cc5247875129c',
   measurementId: 'G-9ZEFJ8VRW3',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   prompt: 'select_account',
});

// Initialize Auth
export const auth = getAuth();

// Function to sign in with Google
export const signInWithGooglePopup = async () => {
   try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      return user;
   } catch (error) {
      // Handle Errors here.
      console.error('Error signing in with Google:', error);
      throw error; // Rethrow the error if you need to handle it further up the call chain
   }
};
