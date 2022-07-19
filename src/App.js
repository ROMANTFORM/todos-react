import './App.css';
import './styles/main.scss';

// Components
import Main from './components/Main';
import Footer from './components/Footer';

const colorOptions = [
  {label: 'orange', color: '#DF7861'},
  {label: 'coral', color: '#ECB390'},
  {label: 'green', color: '#94B49F'},
  {label: 'fiolet', color: '#9A86A4'},
  {label: 'bezh', color: '#DFBB9D'},
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-container'>
          <div className='logo-container'>
            <div className="App-logo">&#9415;</div>
            <p className='App-text'>You can add, delete and update task</p>
          </div>
        </div>
      </header>

      <Main options={colorOptions}/>

      <Footer/>
    </div>
  );
}

export default App;
