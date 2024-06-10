import { toastError } from "../toastMessage"

export const checkFirstName = (name) => {
    if(!name) {
        toastError("Please enter your first name");
        return false;
    }
    return true;
}

export const checkLastName = (name) => {
    if(!name) {
        toastError("Please enter your last name");
        return false;
    }
    return true;
}

export const checkProfilePic = (picture) => {
    if(!picture) {
        toastError("Error in profile picture");
        return false;
    }
    return true;
}

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

export const checkEmail = (email) => {
    if(!email) {
        toastError("Please enter an email");
        return false;
    }
    return true;
}

export const checkBio = (bio) => {
    if(!bio) {
        toastError("Please enter your bio");
        return false;
    }
    return true;
}

export const checkDescription = (description) => {
    if(!description) {
        toastError("Please enter your description");
        return false;
    }
    return true;
}

export const checkLocation = (location) => {
    if(!location) {
        toastError("Please enter a location");
        return false;
    }
    return true;
}

export const checkDOB = (dob) => {
    if(!dob) {
        toastError("Please enter your D.O.B.");
        return false;
    }
    return true;
}

export const checkInstitution = (institution) => {
    if(!institution) {
        toastError("Please enter institution name");
        return false;
    }
    return true;
}

export const checkGrade = (gpa) => {
    if(!gpa) {
        toastError("Please enter your grade");
        return false;
    }
    return true;
}

export const checkStartDate = (date) => {
    if(!date) {
        toastError("Please enter a start date");
        return false;
    }
    return true;
}

export const checkEndDate = (date) => {
    if(!date) {
        toastError("Please enter an end date");
        return false;
    }
    return true;
}