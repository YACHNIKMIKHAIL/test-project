import React from 'react';
import style from './MyFriends.module.css';
import Contact from "../../../Messages/Contact/Contact";
import {FriendsItemsType,} from "../../../../redux/state";


type MyFriendsPropsType = {
    friendsItems: Array<FriendsItemsType>
}

const MyFriends = (props: MyFriendsPropsType) => {


    return (
        <div className={style.infoF}>
            <div className={style.friendList}>
                {props.friendsItems.map((el) => {
                    return (
                        <div className={style.friendItem}>
                            <img className={style.friendAva} src={el.img} alt=""/>
                            <div className={style.friendName}>{el.name}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default MyFriends;