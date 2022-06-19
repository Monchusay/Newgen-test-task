import React from 'react';
import style from "./Header.module.css"

const Header = () => {
    return (
      <div className={style.Header}>
        <span className={style.HeaderText}>
            NewGen Test Task
        </span>
      </div>
    );
};

export default Header;