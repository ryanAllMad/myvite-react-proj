import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { store } from "./store"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
