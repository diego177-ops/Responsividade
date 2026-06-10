$("#btnCursos").click(function() {
    $(".cursos").slideToggle();
});

// Modo escuro
$(document).ready(function () {

    $("#btnModo").click(function () {

        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $("#btnModo").html("☀️ Modo Claro");
            $("#btnModo").removeClass("btn-dark");
            $("#btnModo").addClass("btn-light");
        } else {
            $("#btnModo").html("🌙 Modo Escuro");
            $("#btnModo").removeClass("btn-light");
            $("#btnModo").addClass("btn-dark");
        }

    });

});