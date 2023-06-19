
import './App.css';
import Header from './components/Header';
import Center from './components/Center';
import Footer from './components/Footer';
import Shorten from './components/Shorten';



function App() {
  return (
    <div className="App">
        <Header />
      <div className="main">
        <div className="center">
          <Center />
          <div className="pic">
          </div>
          <div className="inp">
            <Shorten />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
