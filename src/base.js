import firebase from "firebase/app";
import "firebase/database";
// import "firebase/database";
require('firebase/storage')

const firebaseConfig = {
  apiKey: "AIzaSyCbDYC23uhQLXtwS84zQWTiM5j9gKkMo_0",

  authDomain: "mercado-dev-7850f.firebaseapp.com",

  databaseURL: "https://mercado-dev-7850f-default-rtdb.firebaseio.com",

  projectId: "mercado-dev-7850f",

  storageBucket: "gs://mercado-dev-7850f.appspot.com",

  messagingSenderId: "925401031845",

  appId: "1:925401031845:web:13db0642e2148e193bd94c",
};

const Rebase = require("re-base");
const app = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(app.database());
export const storage = app.storage();

export default base;
