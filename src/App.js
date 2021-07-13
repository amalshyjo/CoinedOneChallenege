import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import './App.scss';
import NavBarIndex from './Components/Sections/Navabar/Index';
import LoadBackdrop from "./Components/Utils/BackDrop/BackDrop";
import Dashboard from './Pages/Home/Dashboard';

function App() {

  const dispatch = useDispatch();

  function getData() {
    return dispatch => {
      axios.get("https://api.mocklets.com/mock68182/screentime")
      .then(res =>
          dispatch({
            type: "FETCH_DATA",
            data: res.data
          })
      );
    };
  }
  useEffect(() => {
    dispatch(getData());
  }, []);


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/summary" />
        </Route>
        <Route  path="/summary">
          <LoadBackdrop/>
          <div className="App">
            <NavBarIndex/>
            <Dashboard/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
