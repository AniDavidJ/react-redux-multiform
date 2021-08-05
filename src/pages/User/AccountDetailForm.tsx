import React from "react";
import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import ReduxFormInput from "../../components/ReduxFormInput";
import validate from "./validate";
import { accountNumber, name } from "../../lib/normalize";

interface Props {
    previousPage: any;
    isLoading: boolean;
}

export const AccountDetailForm: React.FC<Props & InjectedFormProps<{}, Props>> = (
    props: any
) => {
    
    const { isLoading, handleSubmit, previousPage } = props;
   
    
    return (
        <form onSubmit={handleSubmit} noValidate={true}>
            <div className="personal-container">
                <div className="left">
                    <div className="cardbody">
                     
                        <div className="sameRow">
                            <div className="label">
                                <label htmlFor="officeBuildingName" className="label-field">Building Name</label>
                            </div>
                            <Field
                                name="officeBuildingName"
                                type="text"
                                component={ReduxFormInput}
                                normalize={name}
                            />
                        </div>
                        <div className="sameRow">
                            <div className="label">
                                <label htmlFor="officeAreaName" className="label-field">City/Area</label>
                            </div>
                            <Field
                                name="officeAreaName"
                                type="text"
                                component={ReduxFormInput}
                                normalize={name}
                            />
                        </div>
                        <div className="sameRow">
                            <div className="label">
                                <label htmlFor="officeLandLineNumber" className="label-field">Landline Number</label>
                            </div>
                            <Field
                                name="officeLandLineNumber"
                                type="text"
                                component={ReduxFormInput}
                                normalize={accountNumber}
                            />
                        </div>
                        <div className="sameRow">
                            <div className="label">
                                <label htmlFor="officeAddress1" className="label-field">Address Line 1</label>
                            </div>
                            <Field
                                name="officeAddress1"
                                type="textarea"
                                component={ReduxFormInput}
                            />
                        </div>
                        <div className="sameRow">
                            <div className="label">
                                <label htmlFor="officeAddress2" className="label-field">Address Line 2</label>
                            </div>
                            <Field
                                name="officeAddress2"
                                type="textarea"
                                component={ReduxFormInput}
                            />
                        </div>
                        <div className="sameRow">
                            <div className="label">
                                <label htmlFor="officePOBoxNumber" className="label-field">PO Box Number</label>
                            </div>
                            <Field
                                name="officePOBoxNumber"
                                type="textarea"
                                component={ReduxFormInput}
                            />
                        </div>
                    </div>
                    <div style={{ paddingBottom: 15 }}>
                        <button
                            className="button-back"
                            onClick={previousPage}
                            disabled={isLoading}
                            style={{ marginLeft: "20px", float: "left" }}
                        >
                            &nbsp; Back
                        </button>
                        <button
                            className="next-button"
                            type="submit"
                            style={{ marginRight: "20px", float: "right" }}
                        >
                            {isLoading && <span>Loading..</span>} &nbsp;
                            {!isLoading && <span>Next</span>}
                            
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: "user",
    touchOnChange: true,
    validate,
})(AccountDetailForm);

export default connect(null)(form);
