import React from "react";

// creating Success Component to show success message

const withSuccessHandling = WrappedComponent => ({ showSuccess, children }) => {
    return (
        <WrappedComponent>
            {showSuccess && <div className="success">Wiadomość została wysłana! <br />
                Wkrótce się z Tobą skontaktujemy.</div>}
            {children}
        </WrappedComponent>
    );
};

const SuccessMessage = withSuccessHandling(({ children }) => <div>{children}</div>)


export default SuccessMessage;