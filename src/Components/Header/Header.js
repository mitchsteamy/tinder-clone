//@ts-check

import React from "react";
import "./Header.css";

import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large" />
                </IconButton>
            ) : (
                <Link to="/profile">
                    <IconButton>
                        <PersonIcon className="header__icon" fontSize="large" />
                    </IconButton>
                </Link>
            )}

            <Link to="/">
                <img
                    className="header__logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
                    alt="tinder logo"
                />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;