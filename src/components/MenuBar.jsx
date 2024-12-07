import React, { useState } from 'react';
import '../App.css';

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      label: 'File',
      items: ['Open OSM Map', 'Save As', 'Print', 'Exit']
    },
    {
      label: 'Configure',
      items: ['Communication', 'Port Settings', 'CNR Settings', 'Location Update', 'Interval', 'Allotslot Interface', 'External Source Settings', 'Internal Source Settings']
    },
    {
      label: 'View',
      items: ['Zoom In', 'Zoom Out', 'Zoom to Extend', 'Pan', 'Fit All', 'Refresh', 'Default Map', 'Cursor', 'Hide/Show Legid', 'AD View', 'AB View', 'Unit View', 'Hide View']
    },
    {
      label: 'Map Operations',
      items: ['Query', 'Analyze', 'Overlay', 'Military Symbols', 'Path Profile', 'Zone Creation', 'Geo Reference', 'Change Detection']
    },
    {
      label: 'Order',
      items: []
    },
    {
      label: 'Import',
      items: []
    },
    {
      label: 'Export',
      items: []
    },
    {
      label: 'Photos',
      items: []
    },
    {
      label: 'Help',
      items: []
    }
  ];

  return (
    <nav className="menu-bar">
      {menuItems.map((menu, index) => (
        <div key={index} className="menu-item">
          <button 
            className="menu-button"
            onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
          >
            {menu.label}
          </button>
          {activeMenu === menu.label && menu.items.length > 0 && (
            <div className="dropdown">
              {menu.items.map((item, itemIndex) => (
                <button key={itemIndex} className="dropdown-item">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MenuBar;

