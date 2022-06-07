import React , {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Category from './pages/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import PostAd from './pages/PostAd';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { useIsAuthenticated } from "@azure/msal-react";


function App() {
    const { instance, accounts, inProgress } = useMsal();
    const name = accounts[0] && accounts[0].name;
    if(name){
        console.log(accounts[0]);
    }
    else console.log("no")

    function handleLogin(instance) {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    }
    
    function handleLogout(instance) {
        instance.logoutRedirect().catch(e => {
            console.error(e);
        });
    }

    return (
        <div>
        <Router>

        <Navbar />
        <Routes >
            <Route path = '/' exact element = {<Home />} />
            <Route path = '/category' element = {<Category />} />
            <Route path = 'product/:id' element = {<Product />} />
            <Route path = '/post-ad' element = {<PostAd />} />
            <Route path = '/profile' element = {<ProfileContent />} />
        </Routes>
        </Router>
        </div>
    );
}

function ProfileContent() {
    const { instance, accounts, inProgress } = useMsal();
    const [accessToken, setAccessToken] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestAccessToken() {
        
        const request = {
            ...loginRequest,
            account: accounts[0]
        };
        // if(name){
        //     console.log(name);
        // }
        // else console.log("no")


        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken, console.log(accessToken));

        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken);
            });
        });
    }

    return (
        <>
            <h5 className="card-title" style={{marginTop: "500px"}}>Welcome {name}</h5>
            {accessToken ? 
                <p>Access Token Acquired!</p>
                :
                <button variant="secondary" onClick={RequestAccessToken}>Request Access Token</button>
            }
        </>
    );
};


export default App;
