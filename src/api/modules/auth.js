import { firebaseClient } from '../clients'

const signup = (email, password) => {
  return firebaseClient.auth().createUserWithEmailAndPassword(email, password)
}

const signin = async (email, password) => {
  return firebaseClient.auth().signInWithEmailAndPassword(email, password)
}

export default { signup, signin }
