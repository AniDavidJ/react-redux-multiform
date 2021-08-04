export interface UserData {
    userName: string;
    userEmail:string;
    userMobileNumber: string;
    userAddress1: string;
    userAddress2: string;
    userAddress3: string;

    officeBuildingName:string;
    officeAreaName:string;
    officeLandLineNumber:string;
    officeAddress1:string;
    officeAddress2:string;
    officePOBoxNumber:string;
}

export interface UserState {
    data: UserData[];
}

export interface UserAction {
    type: string;
    payload: any;
}

export type UserTypes = UserAction;