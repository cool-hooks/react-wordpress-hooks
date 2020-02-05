import React from 'react';

interface Config {
  url: string;
  headers?: Headers;
}

export const WordPressContext = React.createContext<Config>({
  url: '',
  headers: undefined
});

export const WordPressProvider = ({
  children,
  config
}: {
  children: React.ReactChildren;
  config: Config;
}) => (
  <WordPressContext.Provider value={config}>
    {children}
  </WordPressContext.Provider>
);
