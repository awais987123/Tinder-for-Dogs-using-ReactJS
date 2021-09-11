import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton  from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useHistory} from "react-router-dom";



function Header({ BackButton }) {
    const history=useHistory();
    return (
        <div className="header">
        {BackButton ? (
            <IconButton onClick={()=> history.replace(BackButton)}> <ArrowBackIosIcon
            className="header__icon"
            fontSize="large"/>
            </IconButton>
        

        ) :(
        
           <IconButton> <PersonIcon
            className="header__icon"
            fontSize="large"/>
            </IconButton>
        )}
         <Link to="/">   <img
            className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-Logo-2012.png" alt="tender logo" />
</Link>
            <Link to="/chats">
            <IconButton>   <ForumIcon
            className="header__icon"
            fontSize="large" />
            </IconButton></Link>
        </div>
    )
;}

export default Header;
