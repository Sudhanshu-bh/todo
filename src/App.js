import { useState } from 'react'
import './App.scss';
import Board from './components/Board';
import Card from './components/Card';
import { useForm } from 'react-hook-form'
import { useStateValue } from './StateProvider'
import moment from 'moment';
import { v4 as uuid } from 'uuid';

function App() {

  let i = 0;
  const [{ open, progress, completed }, dispatch] = useStateValue()
  const { register, handleSubmit, reset } = useForm()

  const submit = data => {

    dispatch({
      type: "TO_OPEN",
      payload: {
        ...data,
        id: uuid(),
        time: moment().format('lll')
      }
    })
    reset()
  }

  return (
    <div className="app">
      <form className="addTask">
        <h3>Add New Task</h3>
        <input {...register("title")} placeholder="Title of the task" />
        <input {...register("desc")} placeholder="Description of the task" />
        <button type="submit" onClick={handleSubmit(submit)}>
          Add Task
        </button>
      </form>

      <Board id="board-1" title="Open">
        {open.map((card, j) => (
          <Card
            id={card.id}
            title={card.title}
            desc={card.desc}
            time={card.time}
            key={j}
          />
        ))}
      </Board>

      <Board id="board-2" title="Work in progress">
        {progress.map((card, j) => (
          <Card
            id={card.id}
            title={card.title}
            desc={card.desc}
            time={card.time}
            key={j}
          />
        ))}
      </Board>

      <Board id="board-3" title="Completed">
        {completed.map((card, j) => (
          <Card
            id={card.id}
            title={card.title}
            desc={card.desc}
            time={card.time}
            key={j}
          />
        ))}
      </Board>

    </div>
  );
}

export default App;
