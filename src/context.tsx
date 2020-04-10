import React from 'react';

interface Config {
  url: string;
  headers?: Headers;
}

export const WordPressContext = React.createContext<Config>({
  url: '',
  headers: undefined,
});

export const WordPressProvider: React.FC<{
  config: Config;
}> = ({ children, config }) => (
  <WordPressContext.Provider value={config}>
    {children}
  </WordPressContext.Provider>
);
