import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './MyApp.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider
        card={{ className: 'card' }}
        theme={{
          token: {
            colorPrimary: '#f04d0c',
          },
        }}
      >
        <MyApp />
      </ConfigProvider>
    </Router>
  </React.StrictMode>
);
