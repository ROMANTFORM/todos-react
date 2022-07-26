import './App.css';
import './styles/main.scss';

// Components
import Main from './components/Main';
import Footer from './components/Footer';




const App = () => {
  return (
    
    <div className="App">
     

      <header className="App-header">
        <div className='main-container'>
          <div className='logo-container'>
            <div className="App-logo">&#9733;</div>
            <p className='App-text'>You can add, delete and update task</p>
          </div>
        </div>
      </header>

      <Main/>

      <Footer/>
    </div>
  );
}

export default App;
