const generatePassword = require('generate-password'); // this imports the generate-password module

const password = generatePassword.generate({
    length: 12,
    numbers: true
});
console.log(password);
