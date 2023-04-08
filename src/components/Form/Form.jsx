const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" name="password"></input>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}
export default Form;