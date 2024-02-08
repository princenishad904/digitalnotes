import database from "./InitializeFirebase";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc } from "firebase/firestore";

class service {
  constructor() {
    this.db = getFirestore(database);
  }

  async uploadNotes({ course, id, question, content }) {
    try {
      await setDoc(doc(this.db, course, id), {
        question: question,
        content: content,
        id: id,
      });

      return "Uploaded Sucess";
    } catch (error) {
      console.log(`something went wrong ${error.massage}`);
    }
  }

  async getLatestDocs(colName) {
    const data = await getDocs(collection(this.db, colName));
    return data;
  }

  async getOneDoc(colName, id) {
    const docRef = doc(this.db, colName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return "Document data:", docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      return "No such document!";
    }
  }
}

let services = new service();

export { services };
