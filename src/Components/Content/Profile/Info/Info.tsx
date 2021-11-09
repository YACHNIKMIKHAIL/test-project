import React from 'react';
import style from './Info.module.css';
import MyInfo from "./MyInfo/MyInfo";
import MyFriends from "./MyFriends/MyFriends";
import {FriendsItemsType} from "../../../redux/state";

type InfoPropsType={
    friendsItems: Array<FriendsItemsType>
}

const Info = (props: InfoPropsType) => {

    return (
        <div className={style.info}>
            <MyInfo/>
            <MyFriends friendsItems={props.friendsItems}/>
        </div>
    )
}

export default Info;