import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
const database = initializeApp(firebaseConfig);

export default database;
