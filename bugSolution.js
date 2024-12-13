```javascript
import firebase from 'firebase/app';
import 'firebase/auth';

// ... your Firebase configuration ...

componentDidMount() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, access user data
      console.log('User is signed in:', user);
      // ... use user.uid, user.email, etc. ...
    } else {
      // User is signed out
      console.log('User is signed out');
      // ... handle user sign-out ...
    }
  });
}
```