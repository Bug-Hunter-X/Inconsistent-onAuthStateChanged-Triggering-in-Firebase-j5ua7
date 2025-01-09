function handleAuthState(user) {
  if (user) {
    // User is signed in.
    // Get the user's ID and other relevant data from the user object.
    console.log('User signed in:', user.uid);
    // Update UI
  } else {
    // User is signed out.
    console.log('User signed out.');
    // Update UI
  }
}

firebase.auth().onAuthStateChanged(user => {
  handleAuthState(user);
}, error => {
  console.error('Authentication state change error:', error);
  // Handle error appropriately
});