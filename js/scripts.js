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
        e.preventDefault()
        alert(name + ", we have received your message")
    })
})