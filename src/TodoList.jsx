/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem"

// eslint-disable-next-line react/prop-types
export function TodoList ({todo , toggleTodo , deleteTodo}) {
  return(
    <ul className="list">
    {todo.length === 0 && "No items to display"}
    {todo.map(todo => {
      return (
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
      )
    })}
   </ul>
  )
}