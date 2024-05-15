$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#Cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const adicionarImg = $('#adicionar-img').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${adicionarImg}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${adicionarImg}" target"_blank" title="Ver imagem em tamanh real">
                    Ver imagem em tamanh real
                </a>
            </div>
            
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#adicionar-img').val('')
    })
})