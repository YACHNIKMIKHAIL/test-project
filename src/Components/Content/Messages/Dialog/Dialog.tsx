import React from 'react';
import style from './Dialog.module.css'
import img1 from './../../../Images/ProfileInfo/download.jpeg'
import {MessagesType, UserType} from "../../../redux/state";

type DialogPropsType = {
    myDialogs: UserType


}

const Dialog = (props: DialogPropsType) => {

    // let dialogs = props.myDialogs.user.myMessages.myMessage.map((d) => {
    //     return (
    //         <div className={style.dialog}>
    //             <div className={style.myMessage}>
    //                 <img className={style.img}
    //                      src={img1} alt=""/>
    //                 <div className={style.message}>
    //                     {d}
    //                 </div>
    //             </div>
    //
    //             <div className={style.yourMessage}>
    //                 <img className={style.img}
    //                      src={img1} alt=""/>
    //                 <div className={style.yourmessage}>
    //                     {d}
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // })
    return (
        <div className={style.dialog}>
            <div className={style.dialog22}>
            {props.myDialogs.user.myMessages.yourMessage.map((d) => {
                return (
                    <div>
                        <div className={style.myMessage}>
                            <img className={style.img}
                                 src={img1} alt=""/>
                            <div className={style.message}>
                                {d}
                            </div>
                        </div>

                        <div className={style.yourMessage}>
                            <img className={style.img}
                                 src={img1} alt=""/>
                            <div className={style.yourmessage}>
                                {d}
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Dialog;