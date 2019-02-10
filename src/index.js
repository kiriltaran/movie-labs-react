import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import IndexPage from './pages/index'
import NotFoundPage from './pages/404'
import PopularMoviesPage from './pages/movies/popular'
import UpcomingMoviesPage from './pages/movies/upcoming'
import FavoritesMoviesPage from './pages/movies/favorites'
import MoviePage from './pages/movies/_id'

import './index.css'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <div className="app">
      <AppHeader />
      <main className="content">
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/movies/popular" component={PopularMoviesPage} />
          <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route path="/movies/favorites" component={FavoritesMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
