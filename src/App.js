import Players from "./Components/Players";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component = {Players}/>
        </Router>
    </div>
  );
}

export default App;
