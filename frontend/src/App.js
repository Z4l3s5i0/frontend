import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/header/Searchbar";
import './components/buttons/buttons.css'

function App() {
  return (
    <div className="App">
        <Searchbar/>
        <button className={"medium ghost"}>button</button>
    </div>
  );
}

export default App;
