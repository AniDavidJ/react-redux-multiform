import React from 'react'
import "../../styles/success.css";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div className="success-mainbackground">
             <div className="success-header">
                <h2>Registration Success</h2>
            </div>
            <div className="sub-header-background">
                <div className="container-success">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqN5Y5lO78m4Ul9fyA6jq7IuHPvl6aw1WrBA&usqp=CAU" alt="" />
                    </div>
                    <div>
                    <h1>Success</h1>
                    </div>
                    <div>
                    <h4>Your Application has been submitted</h4>
                    </div>
                    <Link to={``}>

                    <button className="ok-button">OK</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Success
