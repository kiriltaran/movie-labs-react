import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from './constants'
import './App.css'

import AppHeader from './components/AppHeader'
import IndexPage from './pages/index'
import NotFoundPage from './pages/notFound'
import PopularMoviesPage from './pages/movies/popular'
import UpcomingMoviesPage from './pages/movies/upcoming'
import FavoritesMoviesPage from './pages/movies/favorites'
import MoviePage from './pages/movies/movie'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <main className="main">
          <Switch>
            <Route path={ROUTES.INDEX} exact component={IndexPage} />
            <Route path={ROUTES.MOVIES_POPULAR} component={PopularMoviesPage} />
            <Route path={ROUTES.MOVIES_UPCOMING} component={UpcomingMoviesPage} />
            <Route path={ROUTES.MOVIES_FAVORITES} component={FavoritesMoviesPage} />
            <Route path={ROUTES.MOVIE} component={MoviePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
