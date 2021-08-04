import React from "react";
import {
    InjectedFormProps,
    reduxForm,
    formValueSelector,
    Field ,
} from "redux-form";
// import { Button } from "reactstrap";
import "../../styles/reduxformjest.css";
import "../../styles/confirmation.css";
import { connect } from "react-redux";
// import {  } from "../../components/";
import FileInput from "../../components/ReduxFormInput/FileInput";
interface Props {
    previousPage: any;
    isLoading: boolean;
}
const ConfirmationPage: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    const {
        userName,
        userEmail,
        userMobileNumber,
        userAddress1,
        userAddress2,
        userAddress3,
        officeLandLineNumber,
        officeBuildingName,
        officeAreaName,
        officeAddress1,
        officeAddress2,
        officePOBoxNumber,
        isLoading,
        handleSubmit,
        previousPage,
        pristine,
        submitting,
    } = props;

    return (
        <form onSubmit={handleSubmit} noValidate={true}>
            <div className="confirmation-container">
                <div className="column">
                    <div className="two-row">
                        <div className="row">
                            <label className="field-row"> Name </label>
                            <label> {userName} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> Email </label>
                            <label> {userEmail} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> Moblie Number </label>
                            <label> {userMobileNumber} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> Address Line 1 </label>
                            <label> {userAddress1} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> Address Line 2 </label>
                            <label> {userAddress2} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> Address Line 3 </label>
                            <label> {userAddress3} </label>
                        </div>
                    </div>
                    <div className="two-row">
                        <div className="row">
                            <label className="field-row"> Building Name </label>
                            <label> {officeBuildingName} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> City/Area </label>
                            <label> {officeAreaName} </label>
                        </div>

                        <div className="row">
                            <label className="field-row"> Landline Number </label>
                            <label> {officeLandLineNumber} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> Adress Line 1 </label>
                            <label> {officeAddress1} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> Adress Line 2 </label>
                            <label> {officeAddress2} </label>
                        </div>
                        <div className="row">
                            <label className="field-row"> PO Box Number </label>
                            <label> {officePOBoxNumber} </label>
                        </div>
                    </div>
                    <div className="two-row right-container">
                        <div className="camera-outline confirmation-container">
                            <div className="person">
                                <img
                                    className="img-person"
                                    src="data:image/png;base64,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"
                                    alt=""
                                />
                                <Field type="file" name="profile-file" component={FileInput} />
                            </div>
                            <div>
                                <div>
                                    <img
                                        className="img"
                                        src="https://w7.pngwing.com/pngs/140/861/png-transparent-digital-cameras-graphy-camera-icon-rectangle-camera-icon-logo-thumbnail.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        className="img"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-sLGJZlZ_L8Picxdev8MREgycPU16H_cDg&usqp=CAU"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="signature-outline confirmation-container">
                            signature
                            <Field type="file" name="signature" component={FileInput} />

                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button
                        className="button-back"
                        onClick={previousPage}
                        disabled={isLoading}
                        style={{ marginLeft: "20px", float: "left" }}
                    >
                        &nbsp; Back
                    </button>
                    <button
                        className="button"
                        // isLoading={isLoading}
                        type="submit"
                        style={{ marginRight: "20px", float: "right" }}
                        disabled={pristine || submitting}
                    >
                        {isLoading && <span>Loading..</span>} &nbsp;
                        {!isLoading && <span>Submit</span>}
                    </button>
                </div>
            </div>
        </form>
    );
};

// export default ConfirmationPage;
const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    form: "user",
    touchOnChange: true,
})(ConfirmationPage);

// Decorate with connect to read form values
const selector = formValueSelector("user"); // <-- same as form name

export default connect((state) => {
    const {
        userName,
        userEmail,
        userMobileNumber,
        userAddress1,
        userAddress2,
        userAddress3,
        officeLandLineNumber,
        officeBuildingName,
        officeAreaName,
        officeAddress1,
        officeAddress2,
        officePOBoxNumber,
    } = selector(
        state,
        "userName",
        "userEmail",
        "userMobileNumber",
        "userAddress1",
        "userAddress2",
        "userAddress3",
        "officeLandLineNumber",
        "officeBuildingName",
        "officeAreaName",
        "officeAddress1",
        "officeAddress2",
        "officePOBoxNumber"
    );
    return {
        userName,
        userEmail,
        userMobileNumber,
        userAddress1,
        userAddress2,
        userAddress3,
        officeLandLineNumber,
        officeBuildingName,
        officeAreaName,
        officeAddress1,
        officeAddress2,
        officePOBoxNumber,
    };
})(form);
