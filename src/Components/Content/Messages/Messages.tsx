import React from 'react';
import style from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Contact from "./Contact/Contact";
import {FriendsItemsType, myMessagesType, UserType} from "../../redux/state";

type MessagesPropsType = {
    friendsItems: Array<FriendsItemsType>
    myDialogs: UserType
}
const Messages = (props: MessagesPropsType) => {

    return (
        <div className={style.content}>
            <Contact friendsItems={props.friendsItems}/>
            <Dialog myDialogs={props.myDialogs}/>
            <div>Hello</div>

        </div>
    )
}

export default Messages;