import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {store} from './Redux/app/store.ts'
import { Provider } from 'react-redux'
import './index.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MantineProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  </Provider>,
)
