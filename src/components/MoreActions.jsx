import React from "react";
import Styled from "styled-components";
import { BiSolidDownload } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { MdOutlineWatchLater, MdOutlineReport } from "react-icons/md";
const MoreActions = () => {
  return (
    <>
      <Div className="more-actions">
        <li>
          <BiSolidDownload /> Download
        </li>
        <li>
          <FaShare /> Share
        </li>
        <li>
          <MdOutlineWatchLater /> Watch later
        </li>
        <li>
          <FiCopy /> Copy link
        </li>
        <li>
          <MdOutlineReport /> Report
        </li>
      </Div>
    </>
  );
};

const Div = Styled.div`
     background-color: #333;
     padding: 1rem;
     border-radius: .5rem;
     display: flex;
     flex-direction: column;
     gap: 1.5rem;
     position: absolute;
     width: 200px;
     right: 1rem;
     top: 2.7rem;
     z-index: 10;
     li{
         width: 200px;
         display: flex;
         align-items:center;
         gap: .5rem;
         cursor: pointer;
         transition: all .15s ease-in-out;
         &:hover{
             color: darkgray;
         }
     }

`;

export default MoreActions;
