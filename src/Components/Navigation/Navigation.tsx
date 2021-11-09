import React from 'react';
import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <div className={style.link}>
                <NavLink to='./../Profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to='./../Messages' activeClassName={style.active}>Messeges</NavLink>
            </div>
            {/*<div className={style.link}>*/}
            {/*    <NavLink to='./../Posts' activeClassName={style.active}>Posts</NavLink>*/}
            {/*</div>*/}
            <div className={style.link}>
                <NavLink to='./../Music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to='./../News' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to='./../Settings' activeClassName={style.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;