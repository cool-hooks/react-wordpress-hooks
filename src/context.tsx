import React from 'react';

export const WPContext = React.createContext<{
  url: string;
  auth: {
    email: string;
    password: string;
  };
}>({
  url: '',
  auth: {
    email: '',
    password: ''
  }
});
