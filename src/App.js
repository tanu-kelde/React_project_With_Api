import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import HeaderFirst from './Components/HeaderFirst';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSecond from './Components/HeaderSecond';
import HeaderThird from './Components/HeaderThird';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderFirst />
        <HeaderSecond />
        <HeaderThird />
        <HomePage />
        <Footer />
      </header>
    </div>
  );
}

export default App;
