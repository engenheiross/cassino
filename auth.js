let usuariosCadastrados = [
    {
        "user": "admin",
        "password": "admin"
    }
];

//let usuarioLogado;

jQuery(function($) {
    $('#login-btn').click(function(e) {
        for(let i = 0; i <= usuariosCadastrados.length; i++) {
            if($('#username').val() == usuariosCadastrados[i].user && $('#password').val() == usuariosCadastrados[i].password) {
                //usuarioLogado = usuariosCadastrados[i];
                window.location.replace("roleta.html");
                break;
            }
        }
    });
});



function voltar() {
    window.location.replace("index.html");
};