import Header from './Components/Header'
import Card from './Components/Card'
import HeaderLoggedIn from './Components/HeaderLoggedIn';
import Navigation from './Components/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <HeaderLoggedIn />
      <Navigation />

    </div>
  );
}

export default App;
