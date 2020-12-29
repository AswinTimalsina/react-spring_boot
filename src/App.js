import './App.css';
import TodoApp from './Component/Todo/TodoApp';
import './bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
   
  return (
    <div className="App">
      <Router>
      <TodoApp/>
      </Router>
    </div>
  );
}

export default App;
