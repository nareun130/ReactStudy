export const Base = ({ type, defaultValue, ...rest }) => {
    return <form {...rest}>
        <h3>{type} TODO</h3>
        <input name="text" type="text" defaultValue={defaultValue} />
        <button type="submit">submit</button>
    </form>
}