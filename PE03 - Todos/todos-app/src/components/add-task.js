import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState("");

    return (
        <div class={styles.addTask}>
            <input
                class={styles.addInput}
                placeholder='Add Task'
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button 
                class={styles.addButton}
                onClick={() => { onAddTask(text); setText(""); }}>Add</button>
        </div>
    );
}

const styles =
    {
        addButton: 'border-black border-2 shrink w-1/6 m-2 py-2 px-12 font-mono tracking-widest bg-green-700 hover:bg-green-900 font-semibold text-xl text-slate-50',
        addInput: 'shrink w-5/6 p-3 m-2 border-2 border-black bg-slate-200',
        addTask: 'flex justify-center mt-10 mb-5'
    }

export default AddTask;