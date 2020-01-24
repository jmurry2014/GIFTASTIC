var narutoArray = ['Naruto', 'Rock Lee', 'Madara']

$(function () {
    console.log('loaded on page load')
    populateButtons('narutoButton', '#searches', narutoArray)
})

function populateButtons(classToAdd, areaToAddTo, narutoArray) {
    $("#searches").empty()
    for (var i = 0; i < narutoArray.length; i++) {
        var b = $("<button>");
        b.addClass(classToAdd);
        b.attr('data-type', narutoArray[i]);
        b.text(narutoArray[i])
        $(areaToAddTo).append(b)
    }
}



$(document).on('click', '.narutoButton', function () {


    var character = $(this).data('type')
    console.log(character)
    var queryURL = '//api.giphy.com/v1/gifs/search?q=' + character + '&api_key=tQNI7UCgtwJRKmpgwwySCiQr8nnzaA4u&limit=5'


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {

        for (var i = 0; i < response.data.length; i++) {
            var still = response.data[i].images.fixed_height_still.url
            var animate = response.data[i].images.fixed_height.url
            var rating = response.data[i].rating
            var p = $("<p>").text("Rating: " + rating)
            var image = $("<img>")
            image.attr('src', still)
            image.attr('data-state', 'still')
            image.attr('data-animate', animate)
            image.attr('data-still', still)
            image.addClass('move')
            // $("#pics").append(p)

            $("#pics").append(image)

        }
    })

})

$(document).on('click', "#add-choice", function (event) {
    event.preventDefault()
    var newCharacter = $('input').eq(0).val();
    narutoArray.push(newCharacter)
    populateButtons('narutoButton', '#searches', narutoArray)

    return false

})






$(document).on('click', '.move', function () {
    var state = $(this).attr('data-state')

    if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'))
        $(this).attr('data-state', 'animated')
    } else {
        $(this).attr('src', $(this).attr('data-still'))
        $(this).attr('data-state', 'still')
    }

})








