import React from 'react';
import style from './Profile.module.css'
import Posts from "./Posts/Posts";
import Info from "./Info/Info";
import NewPosts from "./Posts/NewPost/NewPosts";
import {FriendsItemsType, MyPostsType} from "../../redux/state";


type ProfilePropsType = {

    friendsItems: Array<FriendsItemsType>
    posts: Array<MyPostsType>
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={style.content}>
            <Info friendsItems={props.friendsItems}/>

            <Posts/>

            <div className={style.scroll}>
                <NewPosts posts={props.posts}/>
            </div>

        </div>
    )
}

export default Profile;