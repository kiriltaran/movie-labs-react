import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
            <Route path="/" exact component={IndexPage} />
            <Route path="/movies/popular" component={PopularMoviesPage} />
            <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route path="/movies/favorites" component={FavoritesMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
