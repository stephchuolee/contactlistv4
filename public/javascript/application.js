$(function() {

  var handlers = {
    getContacts: function(){
      $.getJSON("/contacts", handlers.processContacts);
    },
    processContacts: function(result){
      var contacts = $('#contacts').empty();
      $.each(result, function(index, contact){
        $('<li>').html('<h3>' + contact.firstname + " " + contact.lastname + '</h3>').attr('class', 'contact').appendTo(contacts)
      })
    },

    addContact: function(){
      var newContact = {
        firstname: $('#firstname').val(),
        lastname: $('#lastname').val(),
        email: $('#email').val()
      };
      $.post('/contacts/new', newContact, handlers.checkResponse, 'json');
    },
    checkResponse: function(data){
      if (data.result){
        handlers.getContacts();
      } else {
        alert('Something is wrong!')
      }
    },
    showForm: function(data){
      $('#new_contact_form').css('display', 'block');
    },

    editContact: function(){
      
    };


}

  $('#listContacts').on("click", handlers.getContacts);
  $('#addContact').on("click", handlers.showForm);
  $('#new_contact_form').on("submit", function(event){
    event.preventDefault(); 
    handlers.addContact();
  });
  

});





  // $("#show_all").on("click", function(){
    
        
  //           $('#contacts').append("<div></div>").attr('id', 'contact');
  //           $("<div></div>").attr('id', 'contact').appendTo("#contacts");
  //           $('#contact').append("<h2>" + contact.firstname + " " + contact.lastname + "</h2>")
  //                        .append("<div> Email: " + contact.email +  "</div>");
  //       });
  //   });
  // });

  // $("#new").on("click", function() {
  //   $("#new_contact_form").css('display','block');
  // });






