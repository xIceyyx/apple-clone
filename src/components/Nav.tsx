import React, { useState } from "react";
import styled from "styled-components";
import AppleIcon from "@material-ui/icons/Apple";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {}

const Nav = (props: Props) => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive((prev) => !prev);
  };

  const MobileMenu = (
    <MobileNavMenu
      className={
        mobileMenuActive ? "nav-open-animation" : "nav-close-animation"
      }
    >
      <div className="nav">
        <AppleIcon className="nav-icon mobile-icon" />
      </div>
      <div className="search">
        <div className="wrapper">
          <SearchIcon className="nav-icon search-icon" />
          <input type="text" placeholder="Search apple.com" />
        </div>
      </div>

      <div className="nav-list">
        <ul>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>TV</li>
          <li>Music</li>
          <li>Support</li>
        </ul>
      </div>
    </MobileNavMenu>
  );

  return (
    <NavBar>
      <ul className="nav-items">
        <li className="mobile">
          <MenuIcon className="mobile-menu" onClick={toggleMobileMenu} />
        </li>
        <li className="nav-item mobile-icon">
          <AppleIcon className="nav-icon mobile-icon" />
        </li>
        <li className="nav-item">Mac</li>
        <li className="nav-item">iPad</li>
        <li className="nav-item">iPhone</li>
        <li className="nav-item">Watch</li>
        <li className="nav-item">TV</li>
        <li className="nav-item">Music</li>
        <li className="nav-item">Support</li>
        <li className="nav-item">
          <SearchIcon className="nav-icon" />
        </li>
        <li className="nav-item mobile-icon">
          <LocalMallOutlinedIcon className="nav-icon mobile-icon" />
        </li>
      </ul>

      {mobileMenuActive && MobileMenu}
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  height: 48px;
  max-height: 44px;
  background: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  position: fixed;
  padding: 0 20px;

  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  .nav-items {
    width: 100rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: silver;
    transition: all 1s;
  }

  .nav-item {
    list-style-type: none;
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    height: min-content;
    width: min-content;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: #fff;
    }
  }

  .nav-icon {
    font-size: 22px;
    color: silver;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    &:hover {
      color: #fff;
    }
  }

  .mobile {
    display: none;
    position: relative;
    z-index: 1000;

    &-menu {
      display: none;
      font-size: 22px;
      color: silver;
      cursor: pointer;
      transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      position: relative;
      z-index: 1000;

      &:hover {
        color: #fff;
      }
    }
  }

  @media only screen and (max-width: 770px) {
    .nav-item {
      display: none;
    }

    .mobile {
      display: block;

      &-menu {
        display: block;
        font-size: 25px;
      }
    }

    .mobile-icon {
      display: block;
      font-size: 25px;
    }
  }
`;

const MobileNavMenu = styled.nav`
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  min-height: max-content;
  overflow-y: scroll;
  overflow-x: hidden;

  // animation: nav-open 0.25s ease-in;

  .nav {
    height: 44px;
    min-height: 44px;
    max-height: 44px;
    font-size: 14px;
    position: relative;
    padding: 0 20px;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search {
    position: relative;

    margin: 0 auto;
    margin-top: 2rem;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      padding: 10px 35px;

      border-radius: 10px;
      border: none;
      outline: none;
      background-color: #1d1d1f;
      width: 100%;
      margin: 0 auto;

      caret-color: #fff;
      color: #fff;

      display: flex;
      align-items: center;
      line-height: 30px;
      height: 30px;
      font-size: 17px;

      &::placeholder {
        color: #6e6e73;
        font-size: 17px;
        display: flex;
        align-items: center;
        line-height: 30px;
        height: 30px;
      }
    }

    border-bottom: 1px solid silver;

    padding-bottom: 20px;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;

    position: relative;
  }

  .search-icon {
    position: absolute;
    left: 5px;
  }

  .hr {
    margin-top: 2rem;
    color: silver;
    border-color: silver;
    background-color: silver;
  }

  .nav-list {
    width: 80vw;
    margin: 0 auto;

    display: flex;
    justify-content: left;
    ul {
      display: flex;
      flex-direction: column;

      width: 100%;
    }
    margin-bottom: 10px;

    li {
      list-style-type: none;
      color: silver;
      margin-top: 10px;
      font-size: 17px;
      border-bottom: 1px solid silver;
      cursor: pointer;
      padding-bottom: 10px;
    }
  }
`;
