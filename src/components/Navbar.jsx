import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { Container, Logo, Rightnav } from "./navbar.styled";

import LogoWhite from "/logo-white.png";
import sjProfilePhoto from "/SJ.jpg";
import { Link } from "react-router-dom";
import Credit from "../Credit";
const Navbar = () => {
  const [showCredit, setShowCredit] = useState(false);
  return (
    <Container>
      <Logo>
        <Link to={"/browse"}>
          <img src={LogoWhite} alt="" />
          <h2>Vidly</h2>
        </Link>
      </Logo>
      <Rightnav>
        <div className="search-div">
          <label htmlFor="search">
            <BiSearch />
          </label>
          <input
            type="text"
            placeholder="Search"
            id="search"
            autoComplete="off"
          />
        </div>
        <div className="profile-and-notification-div">
          <button className="notification-btn">
            <IoMdNotifications />
          </button>
          <button
            className="profile-btn"
            onMouseEnter={() => setShowCredit(true)}
            onMouseLeave={() => setShowCredit(false)}
          >
            <img src={sjProfilePhoto} alt="" />
            {showCredit && <Credit />}
          </button>
        </div>
      </Rightnav>
    </Container>
  );
};
export default Navbar;
