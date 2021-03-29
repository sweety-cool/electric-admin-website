firebase.initializeApp({
    apiKey: "AIzaSyBqz24pre7NCDRQzf9dMnmAj-5LSyExSi0",
    authDomain: "modern-electric-bagnan.firebaseapp.com",
    databaseURL: "https://modern-electric-bagnan.firebaseio.com",
    projectId: "modern-electric-bagnan",
    storageBucket: "modern-electric-bagnan.appspot.com",
    messagingSenderId: "158181126406",
    appId: "1:158181126406:web:d8e906aead3ee6e06e2e87",
    measurementId: "G-C69RMNC5LP"
});

//const DB = firebase.firestore();


// Vue app
// const myapp = new Vue({
//     el: "#main-vue-app",
//     data: {
//         isLoggedIn: false,
//         menuSelection: 3,
//         categories: []
//     },
//     watch: {
//         categories: {
//             deep: true,
//             handler: (_categories) => {
//                 _categories.map((e) => {
//                     e.name = e.name.replace(/[^\a-zA-Z0-9\s]/g, '');
//                     e.id = e.name.replace(/\s+/g, '-').toLowerCase();
//                 });
//             }
//         }
//     },
//     methods: {
//         deleteCategory: function (index) {
//             // before delete check from database, if empty items then delete category, else do nothing
//             let cat_id = this.categories[index].id;
//             let cat_name = this.categories[index].name;
//             DB.collection('items').doc(cat_id).get().then((doc) => {
//                 if (doc.exists && doc.data().items && doc.data().items.length > 0) {
//                     alert(`Category '${cat_name}' contains items. Delete all items first !!`);
//                 }
//                 else this.$delete(this.categories, index);
//             });
//         }
//     }
// });


// // Menu Load Functions 
// // (Called when respective button is clicked, used for some custom processing for each menu)

// function ordersMenuClsicked() {
//     myapp.menuSelection = 1;
// }

// function itemsMenuClicked() {
//     myapp.menuSelection = 2;
// }

// function categoriesMenuClicked() {
//     fetchCategories();
//     myapp.menuSelection = 3;
// }


// // CATEGORIES ###############################################################################

// function addCategory() {
//     myapp.categories.push({ id: '', name: '', desc: '' });
// }

// function fetchCategories() {
//     DB.collection('data').doc('categories').get().then((doc) => myapp.categories = doc.data().list);
// }

// function saveCategories() {
//     DB.collection('data').doc('categories').set({ list: myapp.categories })
//         .then((r) => alert("SAVED !!"))
//         .catch((err) => alert("ERROR OCURED DURING SAVING !"));
// }




