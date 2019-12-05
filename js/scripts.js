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
        var name = $("#contact-name").val()
        if(name == "") {
            alert("Enter your name")
        }
      });
})