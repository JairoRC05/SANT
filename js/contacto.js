$('document').ready(function(){

    const menubtn = $('.menumovil'),
        menu = $('.enlacesnav '),
        progressBar=$('#progressBar'),
        formulario=$('#formulario input, textarea'),
        facebook=$('#facebook'),
        linkedin=$('#linkedin');
        


// Menú móvil

menubtn.click(function() {
    menu.slideToggle('fast');
});	

// COrreo
$("#enviar").click(function(){
        

var nombre=$('#nombre ').val(),
	email=$('#email ').val(),
    subject=$('#asunto').val(),
	msj=$('textarea[name=msg]').val();


if(nombre.trim()==null){
alert("El nombre no puede estar vacio");
return false;
}

if(email.indexOf('@',0) ==-1){
alert("El correo no esta bien escrito");
return false;
}


if(msj.trim()==null){
alert("El mensaje no puede estar vacio");
return false;
}

// if(email.indexOf('gmail',0) ==-1){
// Email.send({
//     Host : "smtp.softwareandtech.com",
//     Username : "contacto@softwareandtech.com",
//     Password : "Cnt06st*",
//     To : 'contacto@softwareandtech.com',
//     From : email,
//     Subject : "Send from Contact",
//     Body : "Nombre: "+ nombre + "<br>" + "Correo:" + email + "<br>" + "Mensaje:" + msj
// }).then(
//   message => alert("mensaje enviado"),
// );
// }else{

// Email.send({
//     Host : "smtp.gmail.com",
//     Username : "contactosoftntech@gmail.com",
//     Password : "Cnt06st*",
//     Puerto SMTP: 587,
//     TLS/SSL: "Requerido",
//     To : 'contacto@softwareandtech.com',
//     From : email,
//     Subject : "Send from Contact",
//     Body : "Nombre: "+ nombre + "<br>" + "Correo:" + email + "<br>" + "Mensaje:" + msj
// }).then(
//   message => alert("mensaje enviado"),
// );

// }

Email.send({
    SecureToken:'00f45300-eb55-4b08-bc43-b09e451f853a',
    To : 'contacto@softwareandtech.com',
    From : email,
    Subject : 'From contact',
    Body : "Nombre: "+ nombre + "<br>" + "Correo: " + email + "<br>" + "Mensaje: " + msj
}).then(
  message => alert("mensaje enviado"),
);

formulario.val(null);
setTimeout(refrescar, 15000);

});


// function refrescar(){
//     location.reload();
// }

facebook.click(function(){
    url="https://www.facebook.com/softwareandtech";
    window.open(url,'_blank');
    return false;
});

linkedin.click(function(){
url="https://www.linkedin.com/company/software-and-tech/";
    window.open(url,'_blank');
    return false;  
});


});



