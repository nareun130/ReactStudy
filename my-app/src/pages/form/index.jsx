import { EditForm, CreateForm } from "../../components/todos/Form";
import { useTodoFormParams } from "../../hooks/useTodoFormParams";

const forms = {
    edit: EditForm,
    create: CreateForm
}

export const FormPage = () => {
    const { type } = useTodoFormParams();
    const Component = forms[type]
    return <Component />
}
