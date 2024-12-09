import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="menu">
        <li>
          <span>File</span>
          <ul className="submenu">
            <li><Link to="/open-osm-map">Open OSM Map</Link></li>
            <li><Link to="/save-as">Save As</Link></li>
            <li><Link to="/print">Print</Link></li>
            <li><Link to="/exit">Exit</Link></li>
          </ul>
        </li>
        <li>
          <span>Configure</span>
          <ul className="submenu">
            <li><Link to="/communication">Communication</Link></li>
            <li><Link to="/port-settings">Port Settings</Link></li>
            <li><Link to="/cnr-settings">CNR Settings</Link></li>
            <li><Link to="/location-update">Location Update</Link></li>
            <li><Link to="/interval">Interval</Link></li>
            <li><Link to="/allotslot-interface">Allotslot Interface</Link></li>
            <li><Link to="/external-source-settings">External Source Settings</Link></li>
            <li><Link to="/internal-source-settings">Internal Source Settings</Link></li>
          </ul>
        </li>
        <li>
          <span>View</span>
          <ul className="submenu">
            <li><Link to="/zoom-in">Zoom In</Link></li>
            <li><Link to="/zoom-out">Zoom Out</Link></li>
            <li><Link to="/zoom-to-extend">Zoom to Extend</Link></li>
            <li><Link to="/pan">Pan</Link></li>
            <li><Link to="/fit-all">Fit All</Link></li>
            <li><Link to="/refresh">Refresh</Link></li>
            <li><Link to="/default-map">Default Map</Link></li>
            <li><Link to="/cursor">Cursor</Link></li>
            <li><Link to="/hide-show-legid">Hide/Show Legid</Link></li>
            <li><Link to="/ad-view">AD View</Link></li>
            <li><Link to="/ab-view">AB View</Link></li>
            <li><Link to="/unit-view">Unit View</Link></li>
            <li><Link to="/hide-view">Hide View</Link></li>
          </ul>
        </li>
        <li>
          <span>Map Operations</span>
          <ul className="submenu">
            <li><Link to="/query">Query</Link></li>
            <li><Link to="/analyze">Analyze</Link></li>
            <li><Link to="/overlay">Overlay</Link></li>
            <li><Link to="/military-symbols">Military Symbols</Link></li>
            <li><Link to="/path-profile">Path Profile</Link></li>
            <li><Link to="/zone-creation">Zone Creation</Link></li>
            <li><Link to="/geo-reference">Geo Reference</Link></li>
            <li><Link to="/change-detection">Change Detection</Link></li>
          </ul>
        </li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/import">Import</Link></li>
        <li><Link to="/export">Export</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

