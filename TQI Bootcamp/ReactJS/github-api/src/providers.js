import React from 'react'
import App from './App';
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

export default function Providers() {
  return (
    <main>
        <GithubProvider>
            <ResetCSS></ResetCSS>
            <App></App>
        </GithubProvider>
    </main>
  )
}
