import './Todo.css'

function Todo({ title }) {
    function deleteTodo() {
        console.log('deleteTodo()', title.toUpperCase())
    }

    return (
        <div className='todo'>
            <p>{title}</p>
            <button onClick={() => deleteTodo(1)}>Delete</button>
        </div>
    );
}

export default Todo