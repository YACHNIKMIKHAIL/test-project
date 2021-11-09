import img1 from './../Images/FriedndsAvas/download (1).jpeg'
import img2 from './../Images/FriedndsAvas/images.jpeg'
import img3 from './../Images/FriedndsAvas/images (1).jpeg'
import img4 from './../Images/FriedndsAvas/images (2).jpeg'
import img5 from './../Images/FriedndsAvas/images (3).jpeg'
import img6 from './../Images/FriedndsAvas/Max.jpeg'
import img7 from './../Images/FriedndsAvas/Oleg.jpeg'
import img8 from './../Images/FriedndsAvas/Mark.jpeg'
import img9 from './../Images/FriedndsAvas/Kolia.jpeg'
import img10 from './../Images/FriedndsAvas/Anton.jpeg'


export type stateType = {
    friendsItems: Array<FriendsItemsType>
    myPosts: Array<MyPostsType>
    myDialogs: UserType
}
export type FriendsItemsType = {
    name: string,
    img: string,
    id: number,
}
export type MyPostsType = {
    post: string
}
export type UserType = {
    user: {
        img: string
        id: number
        myMessages: myMessagesType
    }
}
export type myMessagesType={
    myMessage: Array<string>
    yourMessage: Array<string>
}

const state: stateType = {
    friendsItems: [
        {name: 'Igor', img: img1, id: 1},
        {name: 'Vitalia', img: img2, id: 2},
        {name: 'Egor', img: img3, id: 3},
        {name: 'Serg', img: img4, id: 4},
        {name: 'Yura', img: img5, id: 5},
        {name: 'Max', img: img6, id: 6},
        {name: 'Oleg', img: img7, id: 7},
        {name: 'Mark', img: img8, id: 8},
        {name: 'Kolia', img: img9, id: 9},
        {name: 'Anton', img: img10, id: 10},
    ],
    myPosts: [
        {post: "Hi it's my first post"},
        {post: "Hi it's my second post"},
        {post: "Hi it's my third post"},
        {post: "Hi it's my fourth post"},
        {post: "Hi it's my fifth post"},
        {post: "Hi it's my sixth post"},
        {post: "Hi it's my seven post"},
        {post: "Hi it's my eighth post"},
        {post: "Hi it's my nine post"},
        {post: "Hi it's my ten post"},
        {post: "Hi it's my eleven post"},
        {post: "Hi it's my twelve post"},
        {post: "Hi it's my thirds post"},
        {post: "Hi it's my fourth post"},
        {post: "Hi it's my fifteen post"},
    ],
    myDialogs: {
        user: {
            img: img1,
            id: 1,
            myMessages: {
                myMessage: [
                    "It's my 1 message!",
                    "It's my 2 message!",
                    "It's my 3 message!",
                    "It's my 4 message!",
                    "It's my 5 message!",
                    "It's my 6 message!",
                    "It's my 7 message!",
                    "It's my 8 message!",
                    "It's my 9 message!",
                    "It's my 10 message!",
                    "It's my 11 message!",
                    "It's my 12 message!",
                    "It's my 13 message!",
                    "It's my 14 message!",
                    "It's my 15 message!",
                    "It's my 16 message!",
                    "It's my 17 message!",
                ],
                yourMessage: [
                    "It's Your 1 message!",
                    "It's Your 2 message!",
                    "It's Your 3 message!",
                    "It's Your 4 message!",
                    "It's Your 5 message!",
                    "It's Your 6 message!",
                    "It's Your 7 message!",
                    "It's Your 8 message!",
                    "It's Your 9 message!",
                    "It's Your 10 message!",
                    "It's Your 11 message!",
                    "It's Your 12 message!",
                    "It's Your 13 message!",
                    "It's Your 14 message!",
                    "It's Your 15 message!",
                    "It's Your 16 message!",
                    "It's Your 17 message!",
                ]
            }
        }
    }
}


export default state;

export class MessagesType {
}