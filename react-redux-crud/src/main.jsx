import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/app'
import { Provider } from 'react-redux'
import {store} from './app/store'
import './style/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

      <App />

    </Provider>

  </React.StrictMode>
)
