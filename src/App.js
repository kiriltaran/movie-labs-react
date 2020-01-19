import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from './constants'
import './App.css'

import AppHeader from './components/AppHeader'
import AuthBar from './components/AuthBar'

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isSignupForm, setIsSignupForm] = useState(true)

  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <button type="button" onClick={() => setIsAuthorized(true)}>
          True
        </button>
        <main className="main">
          <Switch>
            <Route path={ROUTES.INDEX.path} exact component={ROUTES.INDEX.component} />
            <Route path={ROUTES.MOVIES_POPULAR.path} component={ROUTES.MOVIES_POPULAR.component} />
            <Route
              path={ROUTES.MOVIES_UPCOMING.path}
              component={ROUTES.MOVIES_UPCOMING.component}
            />
            <Route path={ROUTES.FAVORITES.path} component={ROUTES.FAVORITES.component} />
            <Route path={ROUTES.MOVIE.path} component={ROUTES.MOVIE.component} />
            <Route component={ROUTES.NOT_FOUND.component} />
          </Switch>
        </main>
        <AuthBar
          visible={isAuthorized}
          signup={isSignupForm}
          onToggleForm={() => setIsSignupForm(!isSignupForm)}
          onClose={() => setIsAuthorized(false)}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
