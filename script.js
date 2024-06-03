var_TorF = true;
cont = 1;
linha = 0;

function TorF(id) {
  document.getElementById(id).disabled = true;

  if (var_TorF == true) {
    var_TorF = false;
    document.getElementById(id).value = "X";
    document.getElementById("torf").innerHTML = "Jogador 2";
    vitoria = "Vitória do Jogador 1";

    cont++;
  } else {
    var_TorF = true;
    document.getElementById(id).value = "O";
    document.getElementById("torf").innerHTML = "Jogador 1";
    vitoria = "Vitória do Jogador 2";

    cont++;
  }

  campo1 = document.getElementById(1).value;
  campo2 = document.getElementById(2).value;
  campo3 = document.getElementById(3).value;
  campo4 = document.getElementById(4).value;
  campo5 = document.getElementById(5).value;
  campo6 = document.getElementById(6).value;
  campo7 = document.getElementById(7).value;
  campo8 = document.getElementById(8).value;
  campo9 = document.getElementById(9).value;

  // VITORIA POR LINHA
  if (
    (campo1 == "X" && campo2 == "X" && campo3 == "X") ||
    (campo1 == "O" && campo2 == "O" && campo3 == "O")
  ) {
    linha = 1;
  }
  if (
    (campo4 == "X" && campo5 == "X" && campo6 == "X") ||
    (campo4 == "O" && campo5 == "O" && campo6 == "O")
  ) {
    linha = 2;
  }
  if (
    (campo7 == "X" && campo8 == "X" && campo9 == "X") ||
    (campo7 == "O" && campo8 == "O" && campo9 == "O")
  ) {
    linha = 3;
  }
  // VITORIA POR COLUNA
  if (
    (campo1 == "X" && campo4 == "X" && campo7 == "X") ||
    (campo1 == "O" && campo4 == "O" && campo7 == "O")
  ) {
    linha = 4;
  }
  if (
    (campo2 == "X" && campo5 == "X" && campo8 == "X") ||
    (campo2 == "O" && campo5 == "O" && campo8 == "O")
  ) {
    linha = 5;
  }
  if (
    (campo3 == "X" && campo6 == "X" && campo9 == "X") ||
    (campo3 == "O" && campo6 == "O" && campo9 == "O")
  ) {
    linha = 6;
  }
  // VITORIA POR DIAGONAIS
  if (
    (campo1 == "X" && campo5 == "X" && campo9 == "X") ||
    (campo1 == "O" && campo5 == "O" && campo9 == "O")
  ) {
    linha = 7;
  }
  if (
    (campo7 == "X" && campo5 == "X" && campo3 == "X") ||
    (campo7 == "O" && campo5 == "O" && campo3 == "O")
  ) {
    linha = 8;
  }

  function fun_linha(linha) {
    switch (linha) {
      case 1:
        aparece("linha1");
        break;
      case 2:
        aparece("linha2");
        break;
      case 3:
        aparece("linha3");
        break;
      case 4:
        aparece("linha4");
        break;
      case 5:
        aparece("linha5");
        break;
      case 6:
        aparece("linha6");
        break;
      case 7:
        aparece("linha7");
        break;
      case 8:
        aparece("linha8");
        break;
    }
  }

  if (linha != 0) {
    document.getElementById("torf").innerHTML = "VITÓRIA";

    document.getElementById(1).disabled = true;
    document.getElementById(2).disabled = true;
    document.getElementById(3).disabled = true;
    document.getElementById(4).disabled = true;
    document.getElementById(5).disabled = true;
    document.getElementById(6).disabled = true;
    document.getElementById(7).disabled = true;
    document.getElementById(8).disabled = true;
    document.getElementById(9).disabled = true;

    fun_linha(linha);

    setTimeout(function () {
      if (confirm(vitoria) == true) {
        fun_linha(linha);
        zera();
      } else {
        fun_linha(linha);
        zera();
      }
    }, 500);

    return;
  }
  if (cont > 9) {
    document.getElementById("torf").innerHTML = "EMPATE";

    setTimeout(function () {
      if (confirm("EMPATE") == true) {
        zera();
      } else {
        zera();
      }
    }, 500);
  }

  function aparece(linhadevitoria) {
    var linhadevitoria = document.getElementById(linhadevitoria);

    if (linhadevitoria.style.display == "block") {
      linhadevitoria.style.display = "none";
    } else {
      linhadevitoria.style.display = "block";
    }
  }
}

function zera() {
  document.getElementById(1).value = "";
  document.getElementById(2).value = "";
  document.getElementById(3).value = "";
  document.getElementById(4).value = "";
  document.getElementById(5).value = "";
  document.getElementById(6).value = "";
  document.getElementById(7).value = "";
  document.getElementById(8).value = "";
  document.getElementById(9).value = "";
  document.getElementById(1).disabled = false;
  document.getElementById(2).disabled = false;
  document.getElementById(3).disabled = false;
  document.getElementById(4).disabled = false;
  document.getElementById(5).disabled = false;
  document.getElementById(6).disabled = false;
  document.getElementById(7).disabled = false;
  document.getElementById(8).disabled = false;
  document.getElementById(9).disabled = false;
  document.getElementById("torf").innerHTML = "Jogador 1";
  var_TorF = true;
  cont = 1;
  linha = 0;
}
