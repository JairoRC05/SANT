$('document').ready(function(){



$('#form').on('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    formData.append('service_id', 'gsoftware');
    formData.append('template_id', 'contact');
    formData.append('user_id', 'user_HtJj99X5RdXnEqxLAburM');

 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false
    }).done(function() {
        alert('! Email Enviado !');
    }).fail(function(error) {
        alert('Error  ... ' + JSON.stringify(error));
    });
});



});