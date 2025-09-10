import React, { useState, useEffect } from "react";
import {
  Search,
  BarChart3,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

import logoImg from "../assets/Logomark@2x.png";
import UseAdminPanel from "../hooks/use-admin-panel";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState({
    dashboard: true,
    machines: false,
    service: false,
    apps: false,
    security: false,
    users: false,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size

  const { pathname } = useLocation();
  const pageUrl = pathname.split("/")[3];
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = (menuKey) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const handleMenuClick = () => {
    // Close sidebar on small screens when any menu item is clicked
    if (isSmallScreen) {
      setIsHovered(false);
    }
  };

  const { bottomMenuItems, menuItems, expandableMenus } = UseAdminPanel();

  return (
    <div
      className={`text-white min-h-screen flex flex-col transition-all duration-300 ease-in-out z-50
                 ${
                   isSmallScreen
                     ? isHovered
                       ? "left-0 top-0 w-64"
                       : "w-16"
                     : "w-64"
                 }`}
      style={{ borderRight: "1px solid rgba(34, 38, 47, 1)" }}
      onMouseEnter={() => !isSmallScreen && setIsHovered(true)}
      onMouseLeave={() => !isSmallScreen && setIsHovered(false)}
    >
      {/* Backdrop for mobile when expanded */}
      {isHovered && isSmallScreen && (
        <div
          className="inset-0 bg-opacity-50 -z-10"
          onClick={() => setIsHovered(false)}
        />
      )}

      {/* Header */}
      <div className="p-4">
        <div
          className="flex items-center space-x-2 mb-4"
          onClick={isSmallScreen ? () => setIsHovered(!isHovered) : undefined}
          style={{ cursor: isSmallScreen ? "pointer" : "default" }}
        >
          <img src={logoImg} className="w-8 h-8 rounded-lg flex-shrink-0" />
          <span
            className={`font-semibold text-lg whitespace-nowrap transition-opacity duration-300 
                       ${
                         !isSmallScreen || isHovered
                           ? "opacity-100"
                           : "opacity-0"
                       }`}
          >
            Untitled UI
          </span>
        </div>

        {/* Search - Only show when expanded or on larger screens */}
        <div
          className={`relative transition-opacity duration-300 
                     ${
                       !isSmallScreen || isHovered ? "opacity-100" : "opacity-0"
                     }`}
        >
          {(!isSmallScreen || isHovered) && (
            <>
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-12 text-sm focus:outline-none focus:border-gray-600"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-700 px-1.5 py-0.5 rounded">
                ⌘K
              </span>
            </>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        {/* Expandable Menu Items */}
        <div className="space-y-2 mb-6">
          {expandableMenus.map((menu) => {
            const Icon = menu.icon;
            const hasChildren = menuItems.some(
              (item) => item.parent === menu.key
            );

            return (
              <div key={menu.key}>
                <button
                  onClick={() => {
                    if (hasChildren) {
                      toggleMenu(menu.key);
                    } else {
                      handleMenuClick();
                    }
                  }}
                  className="flex items-center justify-between w-full text-left py-2 px-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="flex-shrink-0" size={20} />
                    <span
                      className={`font-medium whitespace-nowrap transition-opacity duration-300 
                                 ${
                                   !isSmallScreen || isHovered
                                     ? "opacity-100"
                                     : "opacity-0"
                                 }`}
                    >
                      {menu.label}
                    </span>
                  </div>
                  {(!isSmallScreen || isHovered) && (
                    <div className="flex items-center space-x-2">
                      {menu.count && (
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                          {menu.count}
                        </span>
                      )}
                      {hasChildren && (
                        <div className="transition-opacity duration-300">
                          {expandedMenus[menu.key] ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </button>

                {/* Show children if expanded and has children */}
                {expandedMenus[menu.key] &&
                  hasChildren &&
                  (!isSmallScreen || isHovered) && (
                    <div className="mt-2 ml-8 space-y-1">
                      {menuItems
                        .filter((item) => item.parent === menu.key)
                        .map((item) => {
                          const Icon = item?.icon;
                          return (
                            <Link to={item.to} key={item.id}>
                              <button
                                onClick={handleMenuClick}
                                className={`flex items-center space-x-3 w-full text-left py-2 px-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors
                                       ${
                                         item.id === pageUrl
                                           ? "bg-gray-800 text-white"
                                           : ""
                                       }`}
                              >
                                {Icon && (
                                  <Icon className="flex-shrink-0" size={16} />
                                )}
                                <span className="whitespace-nowrap">
                                  {item.label}
                                </span>
                              </button>
                            </Link>
                          );
                        })}
                    </div>
                  )}

                {/* Show "No items to show" for menus without children when expanded */}
                {expandedMenus[menu.key] &&
                  !hasChildren &&
                  (!isSmallScreen || isHovered) && (
                    <div className="mt-2 ml-8 space-y-1">
                      <div className="text-sm text-gray-400 py-2 whitespace-nowrap">
                        No items to show
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="space-y-2 mb-4">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={handleMenuClick}
                className="flex items-center justify-between w-full text-left py-2 px-2 rounded-lg hover:bg-gray-800 transition-colors"
                style={{ color: "rgba(206, 207, 210, 1)" }}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="flex-shrink-0" size={20} />
                  <span
                    className={`font-medium whitespace-nowrap transition-opacity duration-300 
                               ${
                                 !isSmallScreen || isHovered
                                   ? "opacity-100"
                                   : "opacity-0"
                               }`}
                  >
                    {item.label}
                  </span>
                </div>
                {(!isSmallScreen || isHovered) && (
                  <div className="flex items-center space-x-2">
                    {item.status && (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {item.status}
                        </span>
                      </>
                    )}
                    {item.external && (
                      <ExternalLink size={16} className="text-gray-400" />
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-800">
          <img
            src="/api/placeholder/32/32"
            alt="Mohamed Shaheen"
            className="w-8 h-8 rounded-full flex-shrink-0"
          />
          {(!isSmallScreen || isHovered) && (
            <>
              <div className="flex-1">
                <div className="font-medium text-sm whitespace-nowrap">
                  Mohamed Shaheen
                </div>
                <div className="text-xs text-gray-400 whitespace-nowrap">
                  Admin
                </div>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <ChevronDown size={16} className="text-gray-400" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
