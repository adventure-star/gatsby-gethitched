import React, { useState } from "react"
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from '../../constants/images'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header>
      <Location>
        {({ location }) => {

          const lastPos = location.pathname.lastIndexOf('/');
          const len = location.pathname.length;
          const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

          const links = [
            {
              route: `/testing`,
              title: `ABOUT US`,
            },
            {
              route: `/services`,
              title: `SERVICES`,
            },
            {
              route: `/coaching`,
              title: `VENUES`,
            },
            {
              route: `/contact`,
              title: `CONTACT`,
            }
          ];
          const NavItems = links.map((link) => (
            <Link
              className={"nav-item block uppercase text-center font-13 lg:inline-block lg:mr-8 mb-0 lg:mb-0 py-3 lg:py-0 no-underline font-avenirnextmedium"
                + (link.route == pathName ? " text-yellow-1" : " text-yellow-1")}
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ));
          return (
            <div className="container flex flex-wrap py-0 pl-3">
              <div className="flex flex-wrap lg:flex-no-wrap w-full justify-between pr-6">
                <div className="pr-8">
                  <Link to="/" className="my-auto">
                    <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="145" height="57" viewBox="0 0 137 53">
                      <text id="Hitched" transform="translate(0 43)" fill="#707070" className="font-baskerville font-42"><tspan x="0" y="0">Hitched</tspan></text>
                      <text id="get" transform="translate(92 19)" fill="#bfb882" className="font-nexabold font-20 fontweight-700"><tspan x="0" y="0">get</tspan></text>
                    </svg>
                  </Link>
                </div>
                <button
                  className="flex my-auto float-right w-10 h-10 items-center px-3 py-2 text-yellow-1 border border-yellow-2 rounded lg:hidden"
                  onClick={() => toggleExpansion(!isExpanded)}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
                <nav
                  className={`${
                    isExpanded ? `block` : `hidden`
                    } flex-none lg:flex lg:items-center w-full pr-1 justify-between`}
                >
                  <div>
                    {NavItems}
                  </div>
                  <div className="flex mr-0 lg:mr-40">
                    <div
                      className="flex py-2 mx-auto"
                    >
                      <button className="text-yellow-1 font-13 uppercase border border-yellow-2 px-8 py-2">Send Enquiry</button>
                      <Link to="/basket" className="text-yellow-1 font-13 uppercase border border-yellow-2 px-8 py-2 ml-3 mr-3 flex items-center">
                        <button className="flex items-center">
                          <span className="inline-block">
                            <img src={images.IMG_SHOPPING_BUSKET} />
                          </span>
                          <span className="inline-block pl-2">
                            MY BASKET
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          );
        }}
      </Location>

    </header >
  );
}


export default Header;

