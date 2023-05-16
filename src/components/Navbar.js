import React from 'react';
import logo from '../images/logo.svg';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div class="nav-center">
          <div class="nav-header">
            <img src={logo} class="nav-logo" alt="backroads" />
            <button type="button" class="nav-toggle" id="nav-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <PageLinks parentClass={'nav-links'} itemClass={'nav-link'} />
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return <SocialLink id={link.id} {...link} itemClass="nav-icon" />;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
