import React, { useState } from "react";
import { InjectedFormProps } from "redux-form";
import Stepper from "react-stepper-horizontal";

import AccountDetailForm from "./AccountDetailForm";
import PersonalDetailForm from "./PersonalDetailForm";
import Header from "./Header";
import ConfirmationPage from "./ConfirmationPage";
import "../../styles/form.css";

export const Form: React.FC<InjectedFormProps> = (props: any) => {
    const [page, setPage] = useState(0);
    const steps = [{ title: "Step 1" }, { title: "Step 2" }, { title: "Step 3" }];
    const { onSubmit, isLoading } = props;

    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    };

    return (
        <div className="form-background">
            {page === 0 && (
                <Header
                    title="Personal Info Page"
                    subtitle="Personal Info"
                    banner="USER"
                />
            )}
            {page === 1 && (
                <Header title="Office info Page" subtitle="Office info" banner="ARC" />
            )}
            {page === 2 && (
                <Header
                    title="Confirmation Page"
                    subtitle="Confirmation Page"
                    banner="ARC"
                />
            )}
            <div className="stepper-container">
                <Stepper
                    steps={steps}
                    activeStep={page}
                    activeColor={"rgb(225, 53, 69"}
                    connectorStateColors
                    completeColor={"rgb(210, 53, 69"}
                    fontWeight={"10"}
                    nonLinear
                    titleFontSize={11}
                    size={25}
                    circleFontSize={11}
                    completeBarColor={"red"}
                    lineMarginOffset={50}
                    onClick={()=>console.log("stepper clicked")}
                />
                {page === 0 && <PersonalDetailForm onSubmit={nextPage} />}
                {page === 1 && (
                    <AccountDetailForm
                        isLoading={isLoading}
                        previousPage={previousPage}
                        onSubmit={nextPage}
                    />
                )}
                {page === 2 && (
                    <ConfirmationPage
                        isLoading={isLoading}
                        previousPage={previousPage}
                        onSubmit={onSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default Form;
