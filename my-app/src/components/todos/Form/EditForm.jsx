import { useEffect, useState } from "react"
import { Base } from "./Base"
import { findTodoById, updateTodo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useTodoFormParams } from "../../../hooks/useTodoFormParams";

export const EditForm = () => {
    const { id, from, to, type } = useTodoFormParams()
    const [todo, setTodo] = useState()
    const navigate = useNavigate()
    
    console.log(from, to)

    useEffect(() => {
        findTodoById(id)
            .then(setTodo)
            .catch((e) => {
                alert(e.message)
                navigate("/todos", { replace: true })
            })
    }, [id, setTodo, navigate])

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(e)
        await updateTodo({ id, text: e.target.text.value })
        navigate("/todos", { replace: true })
    }

    if (!todo) {
        return <div>loading...</div>;
    }

    return <Base type={type} defaultValue={todo.text} onSubmit={onSubmit} />
}