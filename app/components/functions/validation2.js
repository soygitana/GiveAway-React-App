    //  validation for sign in and log in section

    let validate2 = (email, password, password2) => {

        //  storing errors for all fields in a signle array

        const errors = [];

        // regular expression for email validation

        function emailIsValid(email) {
            const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            return validEmailRegex.test(email)
        }


        if (email.length === 0 || !emailIsValid(email)) {
            errors.push("invalid email");
            console.log('incorrect email')
        }

        if (password.length < 6) {
            errors.push("password should be at least 6 characters long");
            console.log('invalid password')
        }
        if (password2 !== password) {
            errors.push("passwords do not match!");
            console.log('passwords do not match')
        }

        return errors;
    }

    export {
        validate2
    };