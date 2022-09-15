import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import avatar from "../../../assets/image.png";

export default function Avatar() {
  return (
    <div className='avatar'>
      <div className="image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <span>Jason Miller</span>
        <BiChevronDown />
      </div>
    </div>
  );
}
