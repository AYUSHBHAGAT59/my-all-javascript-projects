$(document).ready(function () {
    //for images
    $('.jup').hide()
    $('.sun').hide()
    $('.saturn').hide()
    $('.heading').html('<div class="jquery-c">This Is Earth</div>' + '\n' +
        '<div class="jquery-d"> <br>Tilted Of Earth: 5.13 Degrees</div>' +
        '<div class="jquery-b"><br /> Gravity: 7.3x <br> <br> Hrs: 30 </div>')
    //for button
    $('#earth').hide()
    $('#jupiter').hide()
    $('#saturn').hide()
    //for displaying click function (sun)
    $('#sun').click(function () {
        $('.sun').fadeIn()
        $('.ear').fadeOut()
        $('#sun').fadeOut()
        $('#jupiter').fadeIn()
        $('.heading').html('<div class="jquery-c">This Is Sun</div>' + '\n' +
            '<div class="jquery-d"> <br>Tilted Of Sun: 23.5 Degrees</div>' +
            '<div class="jquery-b"><br /> Gravity: 274 m/s² <br> <br> Hrs: 609.12 </div>')
        // '<div class="jquery-b">degree</div>')
    })

    // for diplaying jupiter
    $('#jupiter').click(function () {
        $('.jup').fadeIn()
        $('#saturn').fadeIn()
        $('#jupiter').fadeOut()
        $('.heading').html('<div class="jquery-c">This Is Jupiter</div>' + '\n' +
            '<div class="jquery-d"> <br>Tilted Of Jupiter: 11.13 Degrees</div>' +
            '<div class="jquery-b"><br /> Gravity: 1.8x <br> <br> Hrs: 50 </div>')
    })

    //for displaying saturn 
    $('#saturn').click(function () {
        // alert("not working");
        $('.saturn').fadeIn()
        $('.jup').hide()
        $('.sun').hide()
        $('.ear').fadeOut()
        $('#earth').fadeIn()
        $('#saturn').fadeOut()
        $('#jupiter').fadeOut()
        $('#sun').fadeOut()
        $('.heading').html('<div class="jquery-c">This Is Saturn</div>' + '\n' +
            '<div class="jquery-d"> <br>Tilted Of Saturn: 11.11 Degrees</div>' +
            '<div class="jquery-b"><br /> Gravity: 1.9x <br> <br> Hrs: 50 </div>')

    })

    //displaying earth
    $('#earth').click(function () {
        $('#sun').fadeIn()
        $('.ear').fadeIn()
        $('#earth').fadeOut()
        $('.heading').html('<div class="jquery-c">This Is Earth</div>' + '\n' +
            '<div class="jquery-d"> <br>Tilted Of Earth: 5.13 degrees</div>' +
            '<div class="jquery-b"><br /> Gravity: 7.3x <br> <br> Hrs: 30 </div>')
    })

    //displaying all buttons and there content is finshed
})