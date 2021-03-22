

function Login() {

    function formSubmit(e) {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        if (password.lenght < 4) {
            alert('не коректний пароль. Введіть пароль бельший 4 символів');
        }

        localStorage.setItem('email', true);

    }

    return (
        <div >
            <form onSubmit={formSubmit}>
                <label>Email</label>
                <input type='email' placeholder='введіть email' name='email' />
                <label>Password</label>
                <input type='password' placeholder='password' name='password' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
