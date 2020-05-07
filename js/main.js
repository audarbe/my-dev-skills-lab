$('form').on('submit', function(event) {
    event.preventDefault();
    const $input = $('input').val();
    const $newSkill = $(`<li>${$input} <button class="list-delete-button" id="deleteButton">X</button></li>`);
    if ($('input').val()) {
        $('#list').append($newSkill)
        $('input').val('');
    };

    $('#list > li').on('click', '#deleteButton', function() {
        console.log('click delete button')
        $(this).closest('li').remove();
    });
});