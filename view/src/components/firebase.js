import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCsjhdXLOrqzNqy8YuuZhT7TSLk5WXLUA8',
  authDomain: 'campmemo-1fee1.firebaseapp.com',
  projectId: 'campmemo-1fee1',
  storageBucket: 'campmemo-1fee1.appspot.com',
  messagingSenderId: '306575041881',
  appId: '1:306575041881:web:3641f810cac714313d9848',
  measurementId: 'G-6TW6T1ELJ0',
};

firebase.initializeApp(firebaseConfig); //กำหนดค่าเริ่มต้น

const storage = firebase.storage();

export { storage, firebase as default };
