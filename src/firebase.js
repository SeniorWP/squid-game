import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAJ8nEktp2m14g5ULVbtWfsagwfBTH7Z6U",
    authDomain: "squid-game-15486.firebaseapp.com",
    projectId: "squid-game-15486",
    storageBucket: "squid-game-15486.appspot.com",
    messagingSenderId: "627261583219",
    appId: "1:627261583219:web:cc10743c8edfba3e6c5f06",
    measurementId: "G-9XW7HJ646N"
}

initializeApp(firebaseConfig)

export const db = getFirestore()
