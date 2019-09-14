import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyDmRtORNdXjJcXgJjUfC6SIVEJEmLLGueg',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'react-movie-labs.firebaseapp.com',
  projectId: process.env.FIREBASE_PROJECT_ID || 'react-movie-labs',
}

const firebaseClient = firebase.initializeApp(config)

export default firebaseClient
