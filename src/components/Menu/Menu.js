import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

// import App from '../../App'
import About from '../About/About'
import Order from '../Order/Order'

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <Router>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Link to='/' tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          Home
        </Link>
        <Link to='/about' tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          About
        </Link>
        <Link to='/order' tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          Order
        </Link>
        <a href="https://www.instagram.com/jakegrella/" target='_blank' rel="noopener noreferrer" tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          ig
        </a>
        <a href="https://twitter.com/jakegrella" target='_blank' rel="noopener noreferrer" tabIndex={tabIndex}>
          <span aria-hidden="true"></span>
          tw
        </a>
      </StyledMenu>

      <Switch>
        <Route exact path="/"> </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </Router>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
