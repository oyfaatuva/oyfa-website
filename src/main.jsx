/* This is the Entry Point of the website, "the main file."
** Here we generate the "root," the HTML element where our React hierarchy will be rendered/mounted from. */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/* Set the browser tab title, also for SEO (so when Google queries searches for 'OYFA' this is what it finds) */
document.title = "OYFA at UVA"

/* Tell the React Document Object Model to create a root HTML element for us */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Our root is now pathed to App which holds our router and our pages */
root.render(
  <>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
  </>
)