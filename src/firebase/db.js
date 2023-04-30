import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';
import { showMessage } from '../util/Alert';
import { Navigate, useNavigate } from 'react-router-dom';



const firebaseConfig = {
    apiKey: "AIzaSyALxJESfNPutrTgta9OKmMWxZDFjtgQOcM",
    authDomain: "curvy-4e1ae.firebaseapp.com",
    projectId: "curvy-4e1ae",
    storageBucket: "curvy-4e1ae.appspot.com",
    messagingSenderId: "145419134447",
    appId: "1:145419134447:web:4a6d200fc01400afbb821a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export const panelLogin = async (e, username, password) =>  {
    
    e.preventDefault()

    if(username === "" || password === "") {
        showMessage("Bütün alanlar dolu olmalıdır!")
        return;
    }

    const q = query(collection(db, "panel_users"), where("username", "==", username), where("password", "==", password))
    const results = (await getDocs(q)).docs

    if(results.length === 0) {
        showMessage("Kullanıcı bulunamadı!")
        return;
    }

    const user = results[0].data();
    localStorage.setItem("user", user.username);
    window.location.reload();

    


}



