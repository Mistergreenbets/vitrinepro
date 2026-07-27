/* =============================================
   CONFIGURAÇÃO DO FIREBASE
   Substitua os valores abaixo pelas credenciais
   do SEU projeto Firebase.
   (Configurações do projeto > Seus apps > SDK)
============================================= */
const firebaseConfig = {
  apiKey: "AIzaSyDU3PFBsBtHmJeJUp0m58p-5i0l_cWVqbE",
  authDomain: "saas-catalogo-4c018.firebaseapp.com",
  projectId: "saas-catalogo-4c018",
  storageBucket: "saas-catalogo-4c018.firebasestorage.app",
  messagingSenderId: "626478404978",
  appId: "1:626478404978:web:7866de30cba15c8b7639eb"
};

firebase.initializeApp(firebaseConfig);

const db   = firebase.firestore();
const auth = firebase.auth();
