import React from 'react';
interface Config {
    url: string;
    headers?: Headers;
}
export declare const WordPressContext: React.Context<Config>;
export declare const WordPressProvider: ({ children, config, }: {
    children: React.ReactChildren;
    config: Config;
}) => JSX.Element;
export {};
