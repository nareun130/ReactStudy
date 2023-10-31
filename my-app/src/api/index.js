export const fetchTodos = () => {
    return new Promise((resolve) => {
        resolve(JSON.parse(localStorage.getItem("todos") ?? "[]"))
    })
}

export const findTodoById = async (id) => {
    const todos = await fetchTodos()
    const todo = todos.find((todo) => todo.id === id)
    if (!todo) {
        // 404 not found
        throw new Error(`Todo not found: ${id}`)
    }
    return todo
}

export const createTodo = (text) => {
    return new Promise((resolve) => {
        const prev = JSON.parse(localStorage.getItem("todos") ?? "[]")
        const todo = { id: Date.now(), text }// { id: Date.now(), text : text }
        const next = [ ...prev, todo ];
        localStorage.setItem("todos", JSON.stringify(next))
        resolve(todo)
    })
}

export const updateTodo = ({ id, text }) => {
    return new Promise((resolve) => {
        const prev = JSON.parse(localStorage.getItem("todos") ?? "[]")
        const next = prev.map((todo) => {
            if (todo.id !== id) {
                return todo
            }
            return { id, text }
        })
        localStorage.setItem("todos", JSON.stringify(next))
        resolve(next)
    })
}

export const deleteTodo = (id) => {
    return new Promise((resolve) => {
        const prev = JSON.parse(localStorage.getItem("todos") ?? "[]")
        const next = prev.filter((todo) => todo.id !== id)
        localStorage.setItem("todos", JSON.stringify(next))
        resolve(next)
    })
}