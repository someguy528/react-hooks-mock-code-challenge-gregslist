import React from "react";
import Search from "./Search";

function Header({onSearchChange}) {



  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search  onSearchChange={onSearchChange} />
    </header>
  );
}

export default Header;
