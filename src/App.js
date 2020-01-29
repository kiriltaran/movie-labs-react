import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { routes } from './constants'
import './App.css'

import AppHeader from './components/AppHeader'
import AuthBar from './components/AuthBar'

function App() {
  const [isAuthBarVisible, setIsAuthBarVisible] = useState(false)

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <AppHeader onAuth={() => setIsAuthBarVisible(true)} />
          <main className="main">
            <Switch>
              <Route path={routes.INDEX.path} component={routes.INDEX.component} exact />
              <Route
                path={routes.MOVIES_POPULAR.path}
                component={routes.MOVIES_POPULAR.component}
                exact
              />
              <Route
                path={routes.MOVIES_UPCOMING.path}
                component={routes.MOVIES_UPCOMING.component}
                exact
              />
              <Route path={routes.FAVORITES.path} component={routes.FAVORITES.component} exact />
              <Route path={routes.MOVIE.path} component={routes.MOVIE.component} exact />
              <Route component={routes.NOT_FOUND.component} />
            </Switch>
          </main>
          <AuthBar isVisible={isAuthBarVisible} onClose={() => setIsAuthBarVisible(false)} />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
