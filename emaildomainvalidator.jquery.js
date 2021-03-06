/* Made by Samuel Wagner */
// https://github.com/Mukah/emaildomainvalidator

(function($) {
  $.fn.emailDomainValidator = function(domainlist, allow, success, failed) {
    domainlist = domainlist || [];
    allow = (allow === undefined) ? true : allow;
    success = success || function() { };
    failed = failed || function() { };

    $(this).change(function() {
      let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let email = $(this).val();
      let domain = email.replace(/.*@/, '');

      if(email !== '') {
        $(this)[0].setCustomValidity('');

        if(regex.test(email)) {
          $(this)[0].setCustomValidity('');

          if(domainlist.includes(domain) == allow) {
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
})(jQuery);
