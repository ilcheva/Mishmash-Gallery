import Header from './Components/Header/Header'
import Card from './Components/Home/Card'
import HeaderLoggedIn from './Components/Header/HeaderLoggedIn';
import Navigation from './Components/Header/Menu';
import NewFormItem from './Components/PostForm/';
import DetailedPost from './Components/DetailedPost/'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <HeaderLoggedIn />

      <Navigation />

      <NewFormItem />
      <DetailedPost />
    </div>
  );
}

export default App;
