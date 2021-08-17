import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import { addUser } from "../../redux/actions/user/add";
import { reset } from "redux-form";
import axios from "axios";
export const User = (props: any) => {
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (values: any) => {
        console.log("Submitted values", values);
            axios
                .post(`http://localhost:3000/posts/`, {
                    values,
                })
                .then((res) => {
                    alert("Successfully submitted");
                    props.dispatch(addUser(values));
                    props.dispatch(reset("user"));
                    props.history.push("/success");
                    setLoading(false);
                })
                .catch((err) =>{
                    setLoading(true);
                    alert(err)
                    
                });
            
       
    };
    if(isLoading) {
        return <div className="content">Checking Authentiction...</div>
    }
    return (
        <>
            <Form onSubmit={handleSubmit} isLoading={isLoading} {...props} />
        </>
    );
};

export default connect(null)(User);
