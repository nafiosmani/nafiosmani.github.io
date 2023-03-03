import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <div className="todo__wrapper">
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      </div>
      
    </div>
  );
}

export default App;
