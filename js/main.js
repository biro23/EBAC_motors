$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });

  $(".menu-hamburger").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("00 0000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        // Adicione dois pontos (:) aqui
        required: true,
      },
      veiculoDeInteresse: {
        // Adicione dois pontos (:) aqui
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      // Corrija "invalideHandler" para "invalidHandler"
      let camposIncorretos = validador.numberOfInvalids(); // Corrija "numberOFInvalids" para "numberOfInvalids"
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });

  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");

    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
