import React from 'react';

import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Nawigation = () => {
  return (
    <header>
      <nav>
        <NavLink
          exact
          to={routes.HomePage}
          className="link-nav"
          activeClassName="link-is-active"
        >
          Home
        </NavLink>

        <NavLink
          to={routes.MoviesPage}
          className="link-nav"
          activeClassName="link-is-active"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Nawigation;
