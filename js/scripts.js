$(document).ready(function() {
    $(".design").click(function() {
        $(".hide1").toggle()
        $(".img1").toggle()
    })
    $(".development").click(function() {
        $(".hide2").toggle()
        $(".img2").toggle()
    })
    $(".project").click(function() {
        $(".hide3").toggle()
        $(".img3").toggle()
    })
    $("#submit").click(function(e){
        var name = $("#user-name").val()
        var email = $("#user-email").val()
        if(name == "") {
            alert("Enter your name")
        }elseif(email == "") {
            alert("Enter your email")
        }elseif {
            alert("Thank you your message has been received, "+ name)
        }
      });
})