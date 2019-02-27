import { firebaseClient } from '../clients'

const signup = async (email, password) => {
  const result = await firebaseClient.auth().createUserWithEmailAndPassword(email, password)
  return result
}

export default { signup }
