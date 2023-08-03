const TodoItem = ({ task, onDelete }) => {
  return (
    <div class={styles.todoListContainer}>
      <label class={styles.todoListItem}>{task.text}</label>
      <button class={styles.deleteButton} onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

// Use the .map() function to dynamically render the list of ToDos
const TodoList = ({ tasks, onDelete }) => (
  <ul>
    {tasks.map(task => 
      <li key={task.id}><TodoItem task={task} onDelete={onDelete}/></li>
    )}
  </ul>
);

export default TodoList;

const styles = {
  todoListContainer: 'flex items-center',
  todoListItem: 'shrink w-5/6 p-3 m-2 border-2 border-black bg-stone-200',
  deleteButton: 'border-black border-2 shrink w-1/6 m-2 py-2 px-10 font-mono tracking-wider font-semibold text-xl bg-red-600 hover:bg-red-800 text-slate-50' 
}