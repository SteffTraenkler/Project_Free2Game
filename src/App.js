import './App.css';
import Header from './Components/header';
import Home from './Components/home';
import Added from './Components/recentlyadded';
import Sidebar from './Components/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
      
    </div>
  );
}

export default App;
