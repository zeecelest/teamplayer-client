import React from 'react';

function Signup() {
    return (
        <section>
            <header>
                <h3>Sign Up</h3>
            </header>
            <form className="signup-form">
                <div>
                    <label>"user-name">Username: </label>
                    <input placeholder="User Name" type="text" name="user-name" id="user-name" required />
                </div>
                <div>
                    <label>"user-email">Email: </label>
                    <input placeholder="youremail@gmail.com" type="text" name="user-email" id="user-email" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>

    )
}

export default Signup;