
 let validate = (name, email, msg) => {
    
    //  storing errors for all fields in a signle array

    const errors = [];

    // regular expression for email validation

    function emailIsValid (email) {
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return validEmailRegex.test(email)
      }


    if (name.length === 0) {
        errors.push("name can't be empty");
        console.log('invalid name')
    }
    if (email.length === 0 || !emailIsValid(email)) {
        errors.push("invalid email");
        console.log('incorrect email')
    }

    if (msg.length < 10) {
        errors.push("message should be at least 10 characters long");
        console.log('invalid message')
    }

    return errors;
}

export {validate};
