# Firebase Authentication: Asynchronous currentUser Handling

This repository demonstrates a common error when using Firebase Authentication: attempting to access the `currentUser` property before the authentication state is fully initialized. This often results in unexpected behavior or crashes due to `currentUser` being `null`.  The solution shows how to handle this asynchronously, preventing errors and ensuring robust user data access.

## Problem

Accessing `firebase.auth().currentUser` immediately after app launch or component mount can return `null` before Firebase finishes authentication. This leads to errors.

## Solution

Use `onAuthStateChanged` to listen for changes in the authentication state and handle the `currentUser` asynchronously. This ensures data access only after authentication is complete.

## How to Run

1.  Install Firebase:
    `npm install firebase`
2.  Configure Firebase (Add your Firebase project configuration)
3.  Run the application (e.g., using `npm start`).