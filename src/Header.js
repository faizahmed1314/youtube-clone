import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://www.gannett-cdn.com/-mm-/09608943aa25adf525e933716a119392e8625fb6/c=0-22-773-459/local/-/media/2016/12/08/TennGroup/Nashville/636167962312583015-YouTube-logo-full-color.png?width=660&height=374&fit=crop&format=pjpg&auto=webp"
          alt="youtube"
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-1/p100x100/115803624_3119785601450509_4958406722022361535_o.jpg?_nc_cat=108&ccb=2&_nc_sid=dbb9e7&_nc_ohc=0OHStpJBIZcAX869aQB&_nc_ht=scontent.fdac17-1.fna&tp=6&oh=1bbb41513d6bbfc5742c7de1d2cec03d&oe=5FDC8310"
          alt="faiz ahmed"
        />
      </div>
    </div>
  );
}

export default Header;
