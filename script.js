$(document).ready(() => {

    const list = $('ul');

    $('form').on('submit', function(e) {
        e.preventDefault();

        const task = $('#task').val();
        $(`<li>${task}</li>`).appendTo(list);

        $('#task').val('');
    });

    list.on('click', 'li', function(e) {
        $(e.target).toggleClass('active');
    });

})