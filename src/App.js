import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router ,Switch,Route,Link,Redirect} from 'react-router-dom';
import Home from './page/Home';
import Contacts from './page/Contacts';

function App() {
  return (
    <Router>
      <NavBar />
       <Home/>
        <Contacts/>
        
  </Router>
     
  );
}
// const ho

export default App;
