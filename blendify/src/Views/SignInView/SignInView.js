import React from 'react';
import './SignInView.css';
import spotifyLogo from './spotifyLogo.png';

export function SignInView({ onSignIn }) {

    const onSignInWithSpotify = () => {
        const clientId = '7853b4c9dc604b2ea9b7f1cc305d1e86';
        const redirectUri = 'http://127.0.0.1:3000/home';
        const scopes = ['user-read-private', 'user-read-email'];
    
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(' ')}&response_type=token`;
        window.location.href = authUrl;
    };

    return (
        <div className="signin-view">
            <h1 className="app-name">Blendify</h1>
            <div className="spotify-login-text">
                <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo"/>
                <span>Powered by Spotify</span>
            </div>
            <button onClick={onSignInWithSpotify}>Sign In</button>
        </div>
    );
}

export default SignInView;