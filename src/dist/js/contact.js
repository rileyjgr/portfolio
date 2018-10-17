"use strict";

const submit = document.getElementById("submit");

const sendData = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    // const confirmEmail = document.getElementById("email-confirm").value;
    const message = document.getElementById("message").value;
    // const confirmPassword = document.getElementById("password-confirm").value;
    // noinspection JSAnnotator
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    console.log(data);

    const sendMessage = () => {
        const url = "/contact";
        axios
            .post(url, data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    console.log(data);
    sendMessage();
};
