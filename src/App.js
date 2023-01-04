import './App.css';
import TopBar from './components/TopBar'
import Background from './components/Background'
import StoreListings from './components/StoreListings'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
      <p>What am I missing?</p>
    </div>
  );
}

export default App;
