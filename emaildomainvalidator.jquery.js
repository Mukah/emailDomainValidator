/* Made by Samuel Wagner */
// https://github.com/Mukah/emaildomainvalidator

(function($){
  $.fn.emailDomainValidator = function(whitelist, success, failed) {
    whitelist = whitelist || [];

    $(this).change(function() {
      let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let email = $(this).val();
      let domain = email.replace(/.*@/, '');

      if(email !== '') {
        $(this)[0].setCustomValidity('');

        if(regex.test(email)) {
          $(this)[0].setCustomValidity('');

          if(whitelist.includes(domain)) {
            $(this)[0].setCustomValidity('');
            success();  
          } else {
            $(this)[0].setCustomValidity('O e-mail não pertence a um domínio válido.');  
            failed();
          }
        } else {
          $(this)[0].setCustomValidity('O formato do e-mail não é válido.');
          failed();
        }
      } else {
        if(!$(this).prop('required')) {
          $(this)[0].setCustomValidity('');
        } else {
          $(this)[0].setCustomValidity('Preencha este campo.');
          failed();
        }
      }
    });
  };
})(JQuery);
