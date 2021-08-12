import { produce } from 'immer'
import moment from 'moment'

export const initialState = {
  open: [{ title: "Do assignment", desc: "Maths assignment", id: "card-0", time: moment().format('lll') }],
  progress: [],
  completed: [],
}

const reducer = (state, action) => {

  switch (action.type) {
    case "TO_OPEN":
      return produce(state, newState => {
        newState.open = [...state.open, action.payload]
      })

    case "TO_PROGRESS":
      return produce(state, newState => {
        newState.progress = [...state.progress, action.payload]
      })

    case "TO_COMPLETED":
      return produce(state, newState => {
        newState.completed = [...state.completed, action.payload]
      })

    case "REMOVE_FROM_CURRENT":
      // eslint-disable-next-line
      switch (action.payload.currentBoardID) {
        case "board-1": {
          const index = state.open.findIndex((task) => (task.id === action.payload.taskID))
          return produce(state, newState => {
            newState.open.splice(index, 1)
          })
        }
        case "board-2": {
          const index = state.progress.findIndex((task) => (task.id === action.payload.taskID))
          return produce(state, newState => {
            newState.progress.splice(index, 1)
          })
        }
        case "board-3": {
          const index = state.completed.findIndex((task) => (task.id === action.payload.taskID))
          return produce(state, newState => {
            newState.completed.splice(index, 1)
          })
        }
      }
      break;

    default:
      return state;

  }
}

export default reducer;
