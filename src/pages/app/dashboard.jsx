import { useState } from 'react'

export function Dashboard() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  function handleNewTaskName(event) {
    setNewTask(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()

    setTasks((prevState) => [
      ...prevState,
      { id: prevState.length + 1, title: newTask, completed: false },
    ])
  }

  return (
    <div className="card">
      <div className="card-body p-5">
        <h6 className="mb-3">Todo List</h6>

        <form onSubmit={onSubmit} className="d-flex justify-content-end mb-4">
          <div className="form-outline flex-fill">
            <label className="form-label" htmlFor="taskName">
              O que você precisa fazer hoje?
            </label>

            <input
              type="text"
              id="taskName"
              onChange={handleNewTaskName}
              value={newTask}
              className="form-control form-control-lg"
            />
          </div>

          <div className="d-flex align-items-end">
            <button type="submit" className="btn btn-primary btn-lg ms-2">
              Add
            </button>
          </div>
        </form>

        <ul className="list-group mb-0">
          {tasks.map((task) => (
            <>
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
              >
                <div className="form-check">
                  <input
                    id="task"
                    className="form-check-input me-2"
                    type="checkbox"
                    value={task.completed}
                    aria-label="..."
                  />

                  <label className="form-check-label" htmlFor="task">
                    {task.title}
                  </label>
                </div>

                <a href="#!" data-mdb-tooltip-init title="Remove item">
                  <i className="fas fa-times text-primary"></i>
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}
