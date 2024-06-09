import { toastError } from "../toastMessage"

export const checkUserName = (userName) => {
    if(!userName) {
        toastError("Please enter your username");
        return false;
    }
    return true;
}

export const checkPassword = (password) => {
    if(!password) {
        toastError("Please enter a password");
        return false;
    }
    return true;
}