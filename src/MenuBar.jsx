import React, { useState } from 'react';

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
    <nav style={styles.nav}>
      {menuItems.map((menu, index) => (
        <div key={index} style={styles.menuItem}>
          <button 
            style={styles.menuButton}
            onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
          >
            {menu.label}
          </button>
          {activeMenu === menu.label && menu.items.length > 0 && (
            <div style={styles.dropdown}>
              {menu.items.map((item, itemIndex) => (
                <button key={itemIndex} style={styles.dropdownItem}>
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

const styles = {
  nav: {
    display: 'flex',
    backgroundColor: '#f0f0f0',
    padding: '10px',
  },
  menuItem: {
    position: 'relative',
    marginRight: '10px',
  },
  menuButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px 0',
    zIndex: 1,
  },
  dropdownItem: {
    display: 'block',
    width: '100%',
    padding: '5px 10px',
    textAlign: 'left',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};

export default MenuBar;

