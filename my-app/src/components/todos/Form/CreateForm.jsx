import { useNavigate } from "react-router-dom"
import { Base } from "./Base"
import { createTodo } from "../../../api"
import { useTodoFormParams } from "../../../hooks/useTodoFormParams"

export const CreateForm = () => {
    const { type } = useTodoFormParams()
    const navigate = useNavigate()
 
    const onSubmit = async (e) => {
        e.preventDefault()
        const todo = await createTodo(e.target.text.value)
        console.log(todo)
        navigate(`/todos`, { replace: true })
    }

    return <Base type={type} onSubmit={onSubmit} />
}

// /etc/nginx/conf.d/*.conf