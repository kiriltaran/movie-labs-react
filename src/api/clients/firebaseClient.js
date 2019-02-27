import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDmRtORNdXjJcXgJjUfC6SIVEJEmLLGueg',
  authDomain: 'react-movie-labs.firebaseapp.com',
  projectId: 'react-movie-labs',
}

const firebaseClient = firebase.initializeApp(firebaseConfig)

export default firebaseClient
