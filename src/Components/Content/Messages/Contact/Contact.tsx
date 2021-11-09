import React from 'react';
import style from './Contact.module.css'
import {FriendsItemsType} from "../../../redux/state";

type ContactPropsType = {
    friendsItems: Array<FriendsItemsType>
}

const Contact = (props: ContactPropsType) => {

    let contact = props.friendsItems.map((c) => {
        return (

                    <div className={style.friendItem}>
                        <div className={style.cont}>
                            <img className={style.friendAva}
                                 src={c.img}
                                 alt=""/>
                            <div className={style.friendName}> {c.name} </div>
                        </div>
                    </div>

        )
    })
    return (
        <div className={style.friendContact}>
            {contact}
        </div>
    )

}

export default Contact;