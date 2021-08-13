import React from "react";
import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import ReduxFormInput from "../../components/ReduxFormInput";
import validate from "./validate";
import { name, mobile } from "../../lib/normalize";
import "../../styles/reduxformjest.css";

interface Props {}

export const PersonalDetailForm: React.FC<Props & InjectedFormProps<{}, Props>> = (
    props: any
) => {
    const { handleSubmit } = props;

    return (
        <>

        <form onSubmit={handleSubmit} noValidate={true} > 
            <div className="personal-container" style={{ transform: `translateX(-${0* 100}vw)` }}>
                <div className="left">
                    <div className="cardbody">
                            <div className="sameRow">
                                <div className="label">
                                    <label htmlFor="userName" className="label-field">Name</label>
                                </div>
                                <Field
                                    name="userName"
                                    type="text"
                                    component={ReduxFormInput}
                                    normalize={name}
                                    
                                />
                            </div>

                            <div className="sameRow">
                            <div className="label">
                                    <label htmlFor="userEmail" className="label-field">Email</label>
                                </div>
                                <Field
                                    name="userEmail"
                                    type="email"
                                    component={ReduxFormInput}
                                    normalize={name}
                                />
                            </div>
                            <div className="sameRow">
                            <div className="label">
                                    <label htmlFor="userMobileNumber" className="label-field">
                                        Mobile Number
                                    </label>
                                </div>
                                <Field
                                    name="userMobileNumber"
                                    type="text"
                                    component={ReduxFormInput}
                                    normalize={mobile}
                                />
                            </div>

                            <div className="sameRow">
                            <div className="label">
                                    <label htmlFor="userAddress1" className="label-field">Address Line 1</label>
                                </div>
                                <Field
                                    name="userAddress1"
                                    type="textarea"
                                    component={ReduxFormInput}
                                />
                            </div>
                            <div className="sameRow">
                            <div className="label">
                                    <label htmlFor="userAddress2" className="label-field">Address Line 2</label>
                                </div>
                                <Field
                                    name="userAddress2"
                                    type="textarea"
                                    component={ReduxFormInput}
                                />
                            </div>
                            <div className="sameRow">
                                <div className="label">
                                    <label htmlFor="userAddress3" className="label-field">Address Line 3</label>
                                </div>
                                <Field
                                    name="userAddress3"
                                    type="textarea"
                                    component={ReduxFormInput}
                                />
                        </div>
                    </div>
                </div>
                <div style={{ paddingBottom: 30 }}>
                    <button
                        className="next-button"
                        type="submit"
                        style={{ marginRight: "10px" }}
                        
                    >
                        Next &nbsp;
                        
                    </button>
                </div>
            </div>
            
        </form>
        </>
    );
};

const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: "user",
    validate,
})(PersonalDetailForm);

export default connect(null)(form);
