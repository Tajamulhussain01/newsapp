import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


// export default class App extends Component {
const App = () =>{
  // pageSize = 21;
  const apikey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

     return (
        <div>
          <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
            <Switch>
              <Route exact path="/"><News setProgress={setProgress} apikey={apikey} key="general" pageSize={21} country="us" category="general"/></Route>
              <Route exact path="/business"><News setProgress={setProgress} apikey={apikey} key="business" pageSize={21} country="us" category="business"/></Route>
              <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={21} country="us" category="entertainment"/></Route>
              <Route exact path="/health"><News setProgress={setProgress} apikey={apikey} key="health" pageSize={21} country="us" category="health"/></Route>
              <Route exact path="/science"><News setProgress={setProgress} apikey={apikey} key="science" pageSize={21} country="us" category="science"/></Route>
              <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey} key="sports" pageSize={21} country="us" category="sports"/></Route>
              <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey} key="technology" pageSize={21} country="us" category="technology"/></Route>
            </Switch>
          </Router>
        </div>
      ) 
    }

export default App;