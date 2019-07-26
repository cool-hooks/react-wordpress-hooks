import React from 'react';

export const WPContext = React.createContext<{
  url: string;
  headers?: Headers;
}>({
  url: '',
  headers: undefined
});
