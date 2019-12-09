$(document).ready(function() {
    $(".design").click(function() {
        $(".hide1").toggle()
        $(".img1").toggle()
    })
    $(".development").click(function() {
        $(".hide2").toggle()
        $(".img2").toggle()
    })
    $(".product").click(function() {
        $(".hide3").toggle()
        $(".img3").toggle()
    })
    $("#submit").click(function(e) {
        var name = $("#username").val()
        var email = $("#user-email").val()
        var message = $("contact-message").val()

        if(name == "" || email == "" || message == "") {
            alert("Fill the form")
        } else{
            alert(name + ", we have received your message. Thank you")
        }
        e.preventDefault()
    })
    $(".image").hover(function(){
        $(this).find(".project-name").fadeIn()
    }, function(){
        $(this).find(".project-name").fadeOut()
    }
    )
})