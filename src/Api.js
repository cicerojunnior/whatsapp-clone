import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default {
    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        let result = firebaseApp.auth().signInWithPopup(provider)
        return result
    },
    addUser: async (u) => {
        await db.collection('users').doc(u.id).set({
            name: u.name,
            avatar: u.avatar
        }, {merge:true})
    },
    getContactList: async (userId) => {
        let list = []

        let results = await db.collection('users').get()
        results.forEach(result => {
            let data = result.data()
            if(result.id !== userId) {
                list.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.avatar
                })
            }
        })
        return list
    },
    addNewChat: async (user, userChat) => {
        let newChat = await db.collection('chats').add({
            messages: [],
            users: [user.id, userChat.id]
        })

        db.collection('users').doc(user.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: userChat.name,
                image: userChat.avatar,
                with: userChat.id
            })
        })
        db.collection('users').doc(userChat.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: user.name,
                image: user.avatar,
                with: user.id
            })
        })
    },
    onChatList: (userId, setChatList) => {
        return db.collection('users').doc(userId).onSnapshot((doc)=>{
            if(doc.exists) {
                let data = doc.data()

                if(data.chats) {
                    setChatList(data.chats)
                }
            }
        })
    }
}

