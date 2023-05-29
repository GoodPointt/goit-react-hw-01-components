import React from 'react';
import ReactDOM from 'react-dom/client';
import { Statistics } from 'components/statistics/Statistics';
import { Profile } from 'components/profile/Profile';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Profile />
    <Statistics />
  </React.StrictMode>
);
