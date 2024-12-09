import React from 'react';
import OsmMap from './osm-map';

const MapPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        <OsmMap />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Tank Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MapPage;

