// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodoItem} = props

  const {title, id} = todoItem

  const onClickDelete = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" className="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
 
