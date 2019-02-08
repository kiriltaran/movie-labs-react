import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import PopularMovies from './components/PopularMovies'
import UpcomingMovies from './components/UpcomingMovies'
import FavoritesMovies from './components/FavoritesMovies'

import './index.css'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <div className="app">
      <AppHeader />
      <main className="content">
        <Route path="/" exact component={PopularMovies} />
        <Route path="/upcoming" component={UpcomingMovies} />
        <Route path="/favorites" component={FavoritesMovies} />
      </main>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
