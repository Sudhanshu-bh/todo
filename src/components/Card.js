import './Card.scss'
import { useStateValue } from '../StateProvider'

function Card({ id, title, desc, time }) {
  // eslint-disable-next-line
  const [{ }, dispatch] = useStateValue()

  const toOpen = e => {
    dispatch({
      type: "TO_OPEN",
      payload: {
        id,
        title,
        desc,
        time
      }
    })
    remove(e)
  }
  const toProgress = e => {
    dispatch({
      type: "TO_PROGRESS",
      payload: {
        id,
        title,
        desc,
        time
      }
    })
    remove(e)
  }
  const toCompleted = e => {
    dispatch({
      type: "TO_COMPLETED",
      payload: {
        id,
        title,
        desc,
        time
      }
    })
    remove(e)
  }

  const remove = e => {

    const boardID = e.target.parentElement.parentElement.parentElement.id;
    const cardID = e.target.parentElement.parentElement.id;

    dispatch({
      type: "REMOVE_FROM_CURRENT",
      payload: {
        currentBoardID: boardID,
        taskID: cardID,
      }
    })
  }

  return (
    <div
      id={id}
      className="card"
      draggable="true"
    >
      <h3>{title}</h3>
      <div>{desc}</div>

      <div className="options">
        <div className="option" id="open" onClick={toOpen}>Open</div>
        <div className="option" id="progress" onClick={toProgress}>Progress</div>
        <div className="option" id="completed" onClick={toCompleted}>Completed</div>
      </div>

      <div><small>Created: {time}</small></div>
    </div>
  )
}

export default Card
