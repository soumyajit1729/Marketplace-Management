


var loginsec = document.querySelector(".container-fluid #login");
var signupsec = document.querySelector(".container-fluid #signup");


var signupBtn = document.querySelector(".container-fluid #signup-link");
var loginBtn = document.querySelector(".container-fluid #login-link");


signupBtn.addEventListener("click", function(){
	loginsec.classList.remove('show')
	signupsec.classList.add('show')
});

loginBtn.addEventListener("click", function(){
	loginsec.classList.add('show')
	signupsec.classList.remove('show')
});


//Login Request


$( "#loginBtn" ).click(function( event ) {
 
 
  event.preventDefault();

  var formData = {
  	'usernameMarketplaceLogin': $('input[name=username]').val(),
  	'passwordMarketplaceLogin' : $('input[name=password]').val()
  }


  //console.log(formData.usernameMarketplaceLogin); 

  if(formData.usernameMarketplaceLogin=="" || formData.passwordMarketplaceLogin==""){
    alert("You left an empty field")

 	return;
  }

  //console.log(authtoken);
  console.log(localStorage.getItem("authToken"));


  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://13.233.215.43:8765/marketplace/login/authority",
    headers: { "Authorization": 'Bearer ' + localStorage.getItem('authToken')},
    data: formData,
    dataType: "json",
    success: function(response){
      console.log(response);

    	if(response.error == false){

        window.location.replace("http://localhost:3000/Dashboard1.html");
      }	
    },
    error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                } 

  });
  
});

//Sign up request

$( "#signupBtn" ).click(function( event ) {
 
  event.preventDefault();

  var formData = {

    'emailMarketplaceRegister' : $('input[name=emailRegister]').val(),
    'usernameMarketplaceRegister':  $('input[name=usernameRegister]').val(),
    'passwordMarketplaceRegister' : $('input[name = passwordRegister]').val()

  }

  //var obj = JSON.parse(formData);

  console.log(formData.usernameMarketplaceRegister);

  if(formData.usernameMarketplaceRegister=="" || formData.passwordMarketplaceRegister=="" || formData.emailMarketplaceRegister=="" ){
 alert("You left an empty field")
  return;
  }

  $.ajax({

    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://13.233.215.43:8765/marketplace/register/authority", 
    data: formData,
    dataType: "json",
    success: function(response){

      console.log(response);
      if(response.error ==false){
        localStorage.setItem("Uname", formData.usernameMarketplaceRegister);
        //localStorage.setItem("Pass", formData.passwordMarketplaceRegister);


        window.location.replace("http://localhost:3000/LoginSignup.html");
      
      }

    },
    error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                } 

  });

});



$( "#authenticateBtn" ).click(function( event ) {
 
 
  event.preventDefault();

  var formData = {
    "username": $('input[name=username]').val(),
    "password" : $('input[name=password]').val()
  }


  console.log(formData.username); 


  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://13.233.215.43:8765/marketplace/authenticate",
    data: formData,
    dataType: "json",
    success: function(response){

      console.log(response);

      if(!response.error){
        localStorage.setItem("authToken", response.token);
        console.log(response.token);

      }
    },
    error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                } 

  });
  
});
