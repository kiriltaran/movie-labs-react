import { firebaseClient } from '../clients'

const signup = (email, password) => {
  return firebaseClient.auth().createUserWithEmailAndPassword(email, password)
}

const signin = (email, password) => {
  return firebaseClient.auth().signInWithEmailAndPassword(email, password)
}

export { signup, signin }
