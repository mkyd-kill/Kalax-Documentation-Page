// coded by @mkyd-kill

const { url } = require("inspector");

$('#contact-form').submit(function(e) {
    var name = document.getElementById('name'),
        email = document.getElementById('email'),
        subject = document.getElementById('messageSubject'),
        message = document.getElementById('comment');

    if (!name.value || !email.value || !subject.value || !message.value) {
        alertify.error('Please check your entries')
    }
    else {
        // email validation
        function validate(){
            var email = document.getElementById('email').value;

            var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2, 8})(.[a-z]{2, 8})$/;
                if (regx.test(email)){
                    $.ajax({
                    url: "https://formspree.io/romeomureithi@gmail.com",
                    method: "POST",
                    data: $('#contact-form').serialize(),
                    datatype: "json"
                    });
                    e.preventDefault()
                    $(this).get(0).reset()
                    alertify.success('Message Sent')
                }
                else {
                    document.getElementById('emailtext').innerHTML="Invalid Email";
                    document.getElementById('emailtext').style.visibility="visible";
                    document.getElementById('emailtext').style.color="red";
                }
        }
    }
})