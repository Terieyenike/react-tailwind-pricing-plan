import React from 'react';
import Card from './components/Card';

import { plans } from './plans';

const App = () => {
  return (
    <div className="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
      <div className="grid md:grid-cols-2 md:gap-0 lg:grid-cols-3 gap-12 lg:gap-0">
        {React.Children.toArray(
          plans.map((plan) => (
            <div
              className={`w-full max-w-md mx-auto ${
                plan.featured
                  ? 'order-first lg:order-none lg:scale-110 lg:transform lg:z-10'
                  : 'lg:transform lg:scale-90'
              }`}>
              <Card {...plan} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
