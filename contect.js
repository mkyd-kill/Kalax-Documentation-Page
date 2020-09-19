// coded by @mkyd-kill

const { url } = require("inspector");

const projectName = 'kalax-training-center';

$('#contact-form').submit(function(e) {
    var name = document.getElementById('name'),
        email = document.getElementById('email'),
        subject = document.getElementById('messageSubject'),
        message = document.getElementById('comment');

    if (!name.value || !email.value || !subject.value || !message.value) {
        alertify.error('Please check your entries')
    }
    else {
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
})