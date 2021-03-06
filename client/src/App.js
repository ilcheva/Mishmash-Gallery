import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header'
import Card from './Components/Home/Card'
import HeaderLoggedIn from './Components/Header/HeaderLoggedIn';
import Navigation from './Components/Header/Menu';
import NewFormItem from './Components/PostForm/';
import DetailedPost from './Components/DetailedPost/'
import ModalForm from './Components/Modal'
import Home from './Components/Home/Home'
import CustomizedDialogs from './Components/Modal/dialog'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
     
      <Switch>
        <Route path="/" exact component={Home} />
       
        <Route path="/newPost" component={NewFormItem} />
        <Route path="/detailedPost" component={DetailedPost} />

      </Switch>
      


      {/* <HeaderLoggedIn />

      <Navigation /> */}

    </div >
  );
}

export default App;
