import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Item from './components/Item'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={Item} />
      <Route exact path="/bad-path" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
