import { BrowserRouter as Router, HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Parent from './components/parent/parent.jsx'
import Child from './components/child/child.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Parent} />
            <Route path="/child" component={Child} />
          </Switch>
        </HashRouter>
      </Router>

    </div>
  );
}

export default App;
