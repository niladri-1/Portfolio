$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }


    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear',
        );

    });

});


var typed = new Typed(".typing",{
    strings:["Web Designer..", "Web Developer..", "Python Developer..", "GUI Designer.."],
    typeSpeed: 120,
    BackSpeed: 10,
    smartBackspace: true,
    loop:true,
});



setInterval(()=>{
   const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let day_night = "AM"
if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
}
if(hours < 10){
    hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10){

    seconds = "0" + seconds;
}
    time.textContent = hours+":"+minutes+":"+seconds+" "+day_night;
});





$(document).ready(function() {
  $('form[name="google-sheet"]').on('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Check if all fields are filled
    var name = $('input[name="Name"]').val();
    var email = $('input[name="Email"]').val();
    var number = $('input[name="Number"]').val();
    var message = $('textarea[name="Message"]').val();

    if (name === '' || email === '' || number === '' || message === '') {
      // Display an error message
      showErrorMessage('Please fill in all fields.');
      return;
    }

    if (number.length !== 10) {
      // Display an error message
      showErrorMessage('Please enter a 10-digit number.');
      return;
    }

    var formData = $(this).serialize(); // Serialize form data

    // Clear the form
    $(this).trigger("reset");

    // Display a loading animation or message
    showLoading();

    // Simulate processing time (2 seconds)
    setTimeout(function() {
      // Hide the loading animation or message
      hideLoading();

      // Reload the page
      location.reload();
    }, 1500);

    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbwzKL6VwdDMU_namXVCaMP0VFjLUuTkIOn_A9IiflxXHejtdmFBryOgufyhfzgQ-EDg/exec',
      type: 'POST',
      data: formData,
      success: function(response) {
        // Handle successful form submission
        setTimeout(function() {
          showSuccessMessage('Message has been sent successfully!');
        }, 1500);
      },
      error: function(error) {
        // Handle form submission error
        setTimeout(function() {
          showErrorMessage('Error submitting form. Please try again.');
        }, 1500);
      }
    });
  });

  // Limit the input to 10 characters
  $('input[name="Number"]').on('input', function() {
    var input = $(this).val();
    if (input.length > 10) {
      $(this).val(input.slice(0, 10));
    }
  });

  function showLoading() {
    // Display a loading animation or message
    // Replace this with your own code to show the loading animation or message
    alert('Message has been sent successfully !');
  }

  function hideLoading() {
    // Hide the loading animation or message
    // Replace this with your own code to hide the loading animation or message
  }

  function showSuccessMessage(message) {
    // Display a success message
    // Replace this with your own code to show the success message in a more realistic way
    alert(message);
  }

  function showErrorMessage(message) {
    // Display an error message
    // Replace this with your own code to show the error message in a more realistic way
    alert(message);
  }
});




$(document).ready(function() {
  $('input[name="Number"]').on('input', function(e) {
    var inputValue = $(this).val();
    var truncatedValue = inputValue.slice(0, 10); // Get the first 10 characters

    // Update the input value with the truncated value
    $(this).val(truncatedValue);
  });
});

