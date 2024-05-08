import './App.css';
import List from './components/list/List';
import data from "./data/data";

function App() {
  return (
    <div className="App">
      <List data ={ data }/>
    </div>
  );
}

export default App;
