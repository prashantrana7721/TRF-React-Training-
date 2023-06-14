import logo from './logo.svg';
import './App.css';
import TRI from './Pages/TRI';
import Approver from './Pages/Approver';
import TD from './Pages/TD'
import Login from './Pages/Login';
import Reg from './Pages/Reg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Reg/> */}
      <TRI />
      <Approver/>
      <TD />
      </header>
    </div>
  );
}

export default App;