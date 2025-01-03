import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyrMcGz5a7SMy0ctSYHhmk4KVyN0_Vi1o",
    authDomain: "ara-fms.firebaseapp.com",
    projectId: "ara-fms",
    storageBucket: "ara-fms.firebasestorage.app",
    messagingSenderId: "952593483961",
    appId: "1:952593483961:web:9d51dcfdf210e13635f368",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }