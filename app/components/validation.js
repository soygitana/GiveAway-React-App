<<<<<<< HEAD

 let validate = (name, email, msg) => {
    
=======
const validate = (name, email, message) => {

>>>>>>> 855b615d3ab2702a5c44d5ea3cdde027c403a533
    //  storing errors for all fields in a signle array

    const errors = [];

<<<<<<< HEAD
    // regular expression for email validation

    function emailIsValid (email) {
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return validEmailRegex.test(email)
      }
=======
    // regular expression for an email validation

    function emailIsValid(email) {
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return validEmailRegex.test(email)
    }
>>>>>>> 855b615d3ab2702a5c44d5ea3cdde027c403a533


    if (name.length === 0) {
        errors.push("name can't be empty");
        console.log('invalid name')
    }
    if (email.length === 0 || !emailIsValid(email)) {
        errors.push("invalid email");
        console.log('incorrect email')
    }

<<<<<<< HEAD
    if (msg.length < 10) {
        errors.push("message should be at least 10 characters long");
=======
    if (message.length < 15) {
        errors.push("message should be at least 15 characters long");
>>>>>>> 855b615d3ab2702a5c44d5ea3cdde027c403a533
        console.log('invalid message')
    }

    return errors;
}

<<<<<<< HEAD
export {validate};
=======
export {
    validate
};
>>>>>>> 855b615d3ab2702a5c44d5ea3cdde027c403a533
