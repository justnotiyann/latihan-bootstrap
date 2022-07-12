$(document).ready(function() {
    // Menambah Class Active Pada Saat klik navigator navbar
    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    })


    // Dark Mode Toggle
    $('#flexSwitchCheckChecked').on('click', function() {
        $('section').removeClass('bg-dark')
        $(this).addClass('bg-dark')
    })

})