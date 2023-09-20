import React, { useState } from 'react';
import './SignInView.css';

export function SignInView({ onSignIn }) { // <-- Notice the prop added here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your sign-in logic here
        // For now, just log the email and password
        console.log("Email:", email, "Password:", password);
        
        // Signal that the user has "signed in"
        onSignIn(); // <-- Call the prop function here
    }

    return (
        <div className="signin-view">
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInView;