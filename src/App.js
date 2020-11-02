import MainWrapper from "./containers/main-wrapper";
import showDownloadData from "./components/showDownloadData";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/admin" render={(props) => <MainWrapper {...props}/>}/>
        <Route exact path="/" render={(props) => <MainWrapper {...props}/>} />
        <Route path="/show-download" component={showDownloadData} />
      </Router>
    </div>
  );
}

export default App;
