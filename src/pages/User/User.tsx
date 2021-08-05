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

        const formData = new FormData();
        if (typeof values.picture !== "string" && values.picture !== null) {
            formData.append("picture", values.profile, "pic");
        }

        axios
            .post(`http://localhost:3000/posts/`, {
                values,
                headers: { "content-type": "multipart/form-data" },
                body: formData,
            })
            .then((res) => {
        alert("Successfully submitted");
    })
            .catch((err) =>  alert(err)
            );
        props.dispatch(addUser(values));
        props.dispatch(reset("user"));
        props.history.push("/success");
        setLoading(false);
    };

    return (
        <>
            <Form onSubmit={handleSubmit} isLoading={isLoading} {...props} />
        </>
    );
};

export default connect(null)(User);
