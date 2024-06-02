import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { createTask } from '../../api/create-task'
import { getTasks } from '../../api/get-tasks'

export function Dashboard() {
  const queryClient = useQueryClient()

  const [newTask, setNewTask] = useState('')

  const { data: tasks, isLoading: isLoadingTask } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  const { mutateAsync: addTask, isPending } = useMutation({
    mutationFn: createTask,
    onSuccess() {
      queryClient.invalidateQueries('tasks')
    },
  })

  function handleNewTaskName(event) {
    setNewTask(event.target.value)
  }

  async function onSubmit(event) {
    event.preventDefault()

    try {
      await addTask({ title: newTask })
    } catch (error) {
      console.log(error)
    }

    setNewTask('')
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
            <button
              type="submit"
              className="btn btn-primary btn-lg ms-2"
              disabled={isPending}
            >
              {isPending && (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  />
                </>
              )}

              <span role="status">Add</span>
            </button>
          </div>
        </form>

        {isLoadingTask ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  )
}
