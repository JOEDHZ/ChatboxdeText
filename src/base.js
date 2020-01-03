import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZSFvPKvH2yyvikaLkilE-iXfp-C6Qc10",
  authDomain: "chatbox-app-47d60.firebaseapp.com",
  databaseURL: "https://chatbox-app-47d60.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
