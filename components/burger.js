import { useState } from 'react';
import classNames from 'classnames';

export default function Burger({ toggleIsShowNavList }) {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
    toggleIsShowNavList();
  }

  const burgerClass = classNames("burger", 
                      {"active": isActive})

  return (
    <div className={burgerClass} onClick={handleClick}>
      <span className="bar top-bar"></span>
      <span className="bar middle-bar"></span>
      <span className="bar bottom-bar"></span>
    </div>
  );
}