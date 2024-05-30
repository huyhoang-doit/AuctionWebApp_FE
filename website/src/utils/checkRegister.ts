// Check Password
export const isPasswordWrongFormat = (password: string) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        return true;
    } else {
        // Nhập passCf đúng nhưng ch match sau đó nhập pass đúng
        // if (password === cfPassword) {
        //     setErrorConfirmPassword("");
        // }
        // setErrorPassword("");
        return false;
    }
};

export const isPhoneNumberWrongFormat = (phoneNumber: string) => {
    // Regular expression to check if the phone number is 10 digits and starts with 07
    const phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if (!phoneRegex.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
};

// Check Confirm Password
export const isConfirmPasswordWrong = (password: string , confirmPassword: string) => {
    if (password !== confirmPassword) {
        return true;
    } else {
        return false;
    }
};

export const isYearOfBirthWrongFormat = (year: string) => {
    // Regular expression to check if the year is a four-digit number starting from 1900 to the current year
    const currentYear = new Date().getFullYear();
    const yearRegex = /^(19[0-9]{2}|20[0-9]{2})$/;
    const isValidFormat = yearRegex.test(year);

    if (isValidFormat) {
        const yearNumber = parseInt(year, 10);
        if (yearNumber >= 1900 && yearNumber <= currentYear) {
            return false; // Valid year of birth
        }
    }
    return true; // Invalid year of birth
};

export const isCitizenIdWrongFormat = (citizenId: string) => {
    // Regular expression to check if the citizen ID is either 9 or 12 digits long
    const citizenIdRegex = /^(?:\d{9}|\d{12})$/;
    return !citizenIdRegex.test(citizenId);
};
