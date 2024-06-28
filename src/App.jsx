
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Productslist from './pages/Productslist';

function App() {
  return (
    <div className="App">
      <Header/>
      <Productslist/>
      <Footer/>
    </div>
  );
}

export default App;
