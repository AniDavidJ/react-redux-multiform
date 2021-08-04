import { FormErrors } from 'redux-form';
import { AddUserParams } from './AddUser.d';

const validate = (values: AddUserParams): FormErrors<AddUserParams> => {
    const errors: FormErrors<AddUserParams> = {};

    if (!values.userName) {
      errors.userName = 'User name required';
    }
    if (!values.userEmail) {
      errors.userEmail = 'User email required';
    }

    if (!values.userMobileNumber) {
      errors.userMobileNumber = 'Mobile number required';
    }

    if (!values.userAddress1) {
      errors.userAddress1 = 'Address required';
    }
    if (!values.userAddress2) {
      errors.userAddress2 = 'Address required';
    }
    if (!values.userAddress3) {
      errors.userAddress3 = 'Address required';
    }

    if (!values.officeLandLineNumber) {
      errors.officeLandLineNumber = 'LandLine number required';
    }

    if (!values.officeBuildingName) {
      errors.officeBuildingName = 'Building name required';
    }
    if (!values.officeAreaName) {
      errors.officeAreaName = 'City/Area required';
    }
    if (!values.officeAddress1) {
      errors.officeAddress1 = 'Office Address required';
    }
    if (!values.officeAddress2) {
      errors.officeAddress2 = 'Office Address required';
    }
    if (!values.officePOBoxNumber) {
      errors.officePOBoxNumber = 'PO Box Number required';
    }

    return errors;
};
export default validate;