import React from 'react';

interface Config {
  readonly url: string;
  readonly headers?: Headers;
}

export const WordPressContext = React.createContext<Config | undefined>(
  undefined
);

WordPressContext.displayName = 'WordPressContext';

interface Props {
  readonly children: React.ReactNode;
  readonly config: Config;
}

export const WordPressProvider = ({ children, config }: Props) => (
  <WordPressContext.Provider value={config}>
    {children}
  </WordPressContext.Provider>
);
