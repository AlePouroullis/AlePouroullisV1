import { useState } from 'react';
import classNames from 'classnames';

export default function Burger({ isShowNavList, toggleIsShowNavList }) {
  function handleClick() {
    toggleIsShowNavList();
  }

  const burgerClass = classNames("burger", 
                      {"active": isShowNavList})

  return (
    <div className={burgerClass} onClick={handleClick}>
      <span className="bar top-bar"></span>
      <span className="bar middle-bar"></span>
      <span className="bar bottom-bar"></span>
    </div>
  );
}