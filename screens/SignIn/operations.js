import { Facebook } from 'expo';

export async function handleFacebookLogIn(signInFunc) {
  try {
    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync('383629895555387', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const jsonResponse = (await response.json())
      signInFunc(jsonResponse.id, jsonResponse.name)
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
