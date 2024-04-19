import './App.css';
import Header from '../src/components/Header/Header';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Home from '../src/components/Home/Home';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
