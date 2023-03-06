import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';

function App() {
  return (
    <div className="App">
      <Title>
        <div>
          <input type="text" onChange={(event) => {
            console.log(event.target.value)
          }} />
          <button>Add todo</button>
        </div>
      </Title>
      <div className="todo__wrapper">
      <Todo title="Finish Frontend Simplified"
      />

      <Todo title="Finish Interview Section"
      />

      <Todo title="Land a $100k Job"
      />
      </div>
      <Modal title="Are you srue want to delete" />
    </div>
  );
}

export default App;

