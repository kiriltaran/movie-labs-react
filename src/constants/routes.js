import IndexRoute from '../routes/index'
import MoviesPopularRoute from '../routes/moviesPopular'
import MoviesUpcomingRoute from '../routes/moviesUpcoming'
import FavoritesRoute from '../routes/favorites'
import MovieRoute from '../routes/movie'
import NotFoundRoute from '../routes/notFound'

const routes = {
  INDEX: {
    path: '/',
    component: IndexRoute,
  },
  MOVIES_POPULAR: {
    path: '/movies/popular',
    component: MoviesPopularRoute,
  },
  MOVIES_UPCOMING: {
    path: '/movies/upcoming',
    component: MoviesUpcomingRoute,
  },
  FAVORITES: {
    path: '/favorites',
    component: FavoritesRoute,
  },
  MOVIE: {
    path: '/movies/:id',
    component: MovieRoute,
  },
  NOT_FOUND: {
    component: NotFoundRoute,
  },
}

export { routes }
