import React, { useState } from "react";
import { GiTechnoHeart } from "react-icons/gi";
import { MdTheaterComedy, MdVideoCameraFront } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay, BiCode } from "react-icons/bi";
import { BsChevronLeft, BsMusicNoteBeamed, BsFilePlay } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";

import { Container, Category, Button } from "./sidebar.styled";
import { useLocation } from "react-router-dom";

const Sidebar = ({ setCategory, category }) => {
  const { pathname } = useLocation();
  // states
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <Container
      $sidebarOpen={sidebarOpen}
      style={{ display: pathname.includes("/channel") && "none" }}
    >
      <Category $sidebarOpen={sidebarOpen}>
        <Button
          $sidebarOpen={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <BsChevronLeft />
        </Button>
        <li
          className={`${category == "new" && "active"}`}
          onClick={() => {
            setCategory("new");
          }}
        >
          <AiOutlineHome /> All
        </li>
        <li
          className={`${category == "Tech" && "active"}`}
          onClick={() => {
            setCategory("Tech");
          }}
        >
          <GiTechnoHeart /> Tech
        </li>
        <li
          className={`${category == "Coding" && "active"}`}
          onClick={() => setCategory("Coding")}
        >
          <BiCode />
          Coding
        </li>
        <li
          className={`${category == "Football" && "active"}`}
          onClick={() => setCategory("Shorts")}
        >
          <BsFilePlay />
          Shorts
        </li>
        <li
          className={`${category == "Gaming" && "active"}`}
          onClick={() => setCategory("Gaming")}
        >
          {" "}
          <SiYoutubegaming />
          Gaming
        </li>
        <li
          className={`${category == "Comedy" && "active"}`}
          onClick={() => setCategory("Comedy")}
        >
          <MdTheaterComedy />
          Comedy
        </li>
        <li
          className={`${category == "Music" && "active"}`}
          onClick={() => setCategory("Music")}
        >
          <BsMusicNoteBeamed />
          Music
        </li>
        <li
          className={`${category == "Vlogs" && "active"}`}
          onClick={() => setCategory("Vlogs")}
        >
          <MdVideoCameraFront />
          Vlogs
        </li>
        <li
          className={`${category == "Webseries" && "active"}`}
          onClick={() => setCategory("Webseries")}
        >
          <BiMoviePlay />
          Web Series
        </li>
      </Category>
    </Container>
  );
};

export default Sidebar;
