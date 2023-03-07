import logo from './logo.svg';
import './App.css';
// import Todo from './components/Todo.jsx';
// import Title from './components/Title.jsx';
// import Modal from './components/Modal.jsx';
// import React, { useState, useEffect } from 'react';
// import Counter from './components/Counter.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Nav from './components/Nav.jsx';
import Users from './pages/Users.jsx';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<Users />} />
        </Routes>
      </Router>
  );
}
  
//   const [showModal, setShowModal] = useState(false)

//   function onTodoDelete() {
//     setShowModal(true)
//     console.log('onTodoDelete()')
//   }

//   function onModalClose() {
//     setShowModal(false)
//   }

//   function confirmModal() {
//     setShowModal(false)
//   }

//   useEffect(() => {
//     console.log('on mount')
//   }, [])

//   useEffect(() => {
//     console.log(`on mount AND on ${showModal}  change`)
//   }, [showModal])

//   useEffect(() => {
//     console.log('EVERY render')
//   })

  // return (
  //   <div>
  //     <Title />
  //       <div>
  //         <input type="text" onChange={(event) => {
  //           console.log(event.target.value)
  //         }} />
  //         <button onClick={() => setShowModal(true)}>Add todo</button>
  //       </div>
  //     <div className="todo__wrapper">
  //     <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>
  //     <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"/>
  //     <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job"/>
  //     </div>
  //     {showModal && <Modal onModalClose={onModalClose} confirmModal={confirmModal} title="Confirm delete?" />}
  //   </div>
  // );

export default App;

