/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {

  const location = useLocation();

  useEffect(() => {
    
       const routeTitles = {
      
      '/': 'ECO ADVENTURE',

      '/data/:ID': 'DETAILS | Eco Adventure',
      '/login': 'LOGIN | Eco Adventure',
      '/registration': 'REGISTRATION | Eco Adventure',
      '/forget': 'FORGET | Eco Adventure',
      '/profile': 'PROFILE | Eco Adventure',
      '/update': 'UPDATE | Eco Adventure',
     
     };

    const title = routeTitles[location.pathname] || 'Eco Adventure';
         document.title = title;

  }, [location]);

  return null; 
};

export default DynamicTitle;
