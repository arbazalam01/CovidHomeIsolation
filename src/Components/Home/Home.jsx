import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"
import "./Home.css"

function Home() {
    return (
        <div>
            <div className="auth-buttons">
                    <Button variant="contained" color="primary" component={Link} to="/login">
                        Login
                    </Button>
                    <Button variant="contained" color="primary" component={Link} to="/signup">
                        Signup
                    </Button>
            
            </div>
        </div>
    )
}

export default Home;
