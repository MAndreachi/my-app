/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { FaGlassWhiskey } from "react-icons/fa"
// import { Fa } from "react-icons/fa"

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            Liquor Inventory
          </span>
        </div>

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Vodka",
              itemId: "/vodka",
              elemBefore: () => <FaGlassWhiskey/>,
              subNav: [
                {
                  title: "Plain",
                  itemId: "/about/plain",
                  // Optionals
                  elemBefore: () => <Icon name="cloud-snow" />
                },
                {
                  title: "Flavored",
                  itemId: "/about/flavored",
                  elemBefore: () => <Icon name="coffee" />
                },
                {
                  title: "Fruit",
                  itemId: "/about/fruit",
                  elemBefore: () => <Icon name="coffee" />
                },
                {
                  title: "Grain",
                  itemId: "/about/grain",
                  elemBefore: () => <Icon name="coffee" />
                }
              ]
            },
            {
              title: "Whiskey",
              itemId: "/whiskey",
              elemBefore: () => <FaBeer/>,
              subNav: [
                {
                  title: "Canadian",
                  itemId: "/about/canadian"
                  // Optional
                  // elemBefore: () => <Icon name="calendar" />
                }
              ]
            },
            {
              title: "Burboun",
              itemId: "/burboun",
              subNav: [
                {
                  title: "Teams",
                  itemId: "/another/teams"
                  // Optional
                  // elemBefore: () => <Icon name="calendar" />
                }
              ]
            },
            {
              title: "Gin",
              itemId: "/gin",
              subNav: [
                {
                  title: "Teams",
                  itemId: "/another/teams"
                  // Optional
                  // elemBefore: () => <Icon name="calendar" />
                }
              ]
            },
            {
              title: "Tequila",
              itemId: "/tequila",
              subNav: [
                {
                  title: "Teams",
                  itemId: "/another/teams"
                  // Optional
                  // elemBefore: () => <Icon name="calendar" />
                }
              ]
            },
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Icon name="activity" />
              }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
