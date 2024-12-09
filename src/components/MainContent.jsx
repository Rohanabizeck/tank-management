import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OsmMap from './OsmMap';
import Communication from './Communication';

const MainContent = () => (
  <div className="flex-1 p-5">
    <Switch>
      <Route path="/open-osm-map" component={OsmMap} />
      <Route path="/communication" component={Communication} />
      <Route path="/">
        <div className="grid grid-cols-3 gap-5">
          <div className="border border-gray-300 rounded p-2">
            <h3 className="mt-0 mb-2">Input 1</h3>
            <div className="h-48 bg-gray-100"></div>
          </div>
          <div className="border border-gray-300 rounded p-2">
            <h3 className="mt-0 mb-2">Input 2</h3>
            <div className="h-48 bg-gray-100"></div>
          </div>
          <div className="border border-gray-300 rounded p-2">
            <h3 className="mt-0 mb-2">Input 3</h3>
            <div className="h-48 bg-gray-100"></div>
          </div>
          <div className="border border-gray-300 rounded p-2">
            <h3 className="mt-0 mb-2">Screen 1</h3>
            <div className="h-48 bg-gray-100"></div>
          </div>
          <div className="border border-gray-300 rounded p-2">
            <h3 className="mt-0 mb-2">Input 4</h3>
            <div className="h-48 bg-gray-100"></div>
          </div>
        </div>
      </Route>
    </Switch>
  </div>
);

export default MainContent;

