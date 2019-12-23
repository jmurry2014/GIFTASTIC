var narutoArray = ['Naruto', 'Rock Lee', 'Madara']

$(function () {
    console.log('loaded on page load')
    populateButtons('narutoButton', '#searches', narutoArray)
})

function populateButtons(classToAdd, areaToAddTo, narutoArray) {
    for (var i = 0; i < narutoArray.length; i++) {
        var b = $("<button>");
        b.addClass(classToAdd);
        b.attr('data-type', narutoArray[i]);
        b.text(narutoArray[i])
        $(areaToAddTo).append(b)
    }
}