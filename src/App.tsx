import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Content/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./Components/Content/Messages/Messages";
import Settings from "./Components/Content/Settings/Settings";
import News from "./Components/Content/News/News";
import Music from "./Components/Content/Music/Music";
import {stateType, UserType} from "./Components/redux/state";


type AppPropsType = {
    state: stateType
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <Header/>
                {/*<Content/>*/}
                <Navigation/>
                <Route path='/profile' render={() => <Profile posts={props.state.myPosts}
                                                              friendsItems={props.state.friendsItems}/>}/>
                <Route path='/messages' render={() => <Messages friendsItems={props.state.friendsItems}
                                                                myDialogs={props.state.myDialogs}/>}/>

                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
