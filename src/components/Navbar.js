import React from 'react';
import { Link, } from 'react-router-dom'
import { Menu, } from 'semantic-ui-react';

const Navbar = () => (
  <Menu inverted>
    <Link to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to='/flashcards'>
      <Menu.Item>
        Flash Cards
      </Menu.Item>
    </Link>
    <Link to='/rps'>
      <Menu.Item>
        RPS
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar;