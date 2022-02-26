import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route path="/random/path" component={NotFound} />
        <Redirect to="/random/path" />
      </Switch>
    </div>
  </div>
)

export default App
