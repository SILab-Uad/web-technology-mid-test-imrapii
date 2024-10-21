// TODO: Implement the password generation logic based on user input
export const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let charSet = '';
    if (options.includeUppercase) charSet += uppercase;
    if (options.includeLowercase) charSet += lowercase;
    if (options.includeNumbers) charSet += numbers;
    if (options.includeSpecialChars) charSet += specialChars;

    if (charSet === '') {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
};