var_TorF = true;
cont = 1;
linha = 0;

function TorF(id) {
    GetCampos();
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

    // VITORIA POR LINHA
    if (
        (campo1.value == "X" && campo2.value == "X" && campo3.value == "X") ||
        (campo1.value == "O" && campo2.value == "O" && campo3.value == "O")
    ) {
        linha = "linha1";
    }
    if (
        (campo4.value == "X" && campo5.value == "X" && campo6.value == "X") ||
        (campo4.value == "O" && campo5.value == "O" && campo6.value == "O")
    ) {
        linha = "linha2";
    }
    if (
        (campo7.value == "X" && campo8.value == "X" && campo9.value == "X") ||
        (campo7.value == "O" && campo8.value == "O" && campo9.value == "O")
    ) {
        linha = "linha3";
    }
    // VITORIA POR COLUNA
    if (
        (campo1.value == "X" && campo4.value == "X" && campo7.value == "X") ||
        (campo1.value == "O" && campo4.value == "O" && campo7.value == "O")
    ) {
        linha = "linha4";
    }
    if (
        (campo2.value == "X" && campo5.value == "X" && campo8.value == "X") ||
        (campo2.value == "O" && campo5.value == "O" && campo8.value == "O")
    ) {
        linha = "linha5";
    }
    if (
        (campo3.value == "X" && campo6.value == "X" && campo9.value == "X") ||
        (campo3.value == "O" && campo6.value == "O" && campo9.value == "O")
    ) {
        linha = "linha6";
    }
    // VITORIA POR DIAGONAIS
    if (
        (campo1.value == "X" && campo5.value == "X" && campo9.value == "X") ||
        (campo1.value == "O" && campo5.value == "O" && campo9.value == "O")
    ) {
        linha = "linha7";
    }
    if (
        (campo7.value == "X" && campo5.value == "X" && campo3.value == "X") ||
        (campo7.value == "O" && campo5.value == "O" && campo3.value == "O")
    ) {
        linha = "linha8";
    }

    if (linha != 0) {
        document.getElementById("torf").innerHTML = "VITÓRIA";

        DesativarCampos();

        MostrarOcultarLinha(linha);

        setTimeout(function () {
            confirm(vitoria)
            MostrarOcultarLinha(linha);
            Zerar();
        }, 500);

        return;
    }
    if (cont > 9) {
        document.getElementById("torf").innerHTML = "EMPATE";

        setTimeout(function () {
            confirm("EMPATE");
            Zerar();
        }, 500);

    }
}

function GetCampos() {
    campo1 = document.getElementById(1);
    campo2 = document.getElementById(2);
    campo3 = document.getElementById(3);
    campo4 = document.getElementById(4);
    campo5 = document.getElementById(5);
    campo6 = document.getElementById(6);
    campo7 = document.getElementById(7);
    campo8 = document.getElementById(8);
    campo9 = document.getElementById(9);
}

function MostrarOcultarLinha(linha) {
    var linha = document.getElementById(linha);

    if (linha.style.display == "block") {
        linha.style.display = "none";
    } else {
        linha.style.display = "block";
    }
}

function Zerar() {

    LimparCampos();
    AtivarCampos();

    document.getElementById("torf").innerHTML = "Jogador 1";
    var_TorF = true;
    cont = 1;
    linha = 0;
}

function LimparCampos(id) {
    for (i = 1; i <= 9; i++) {
        document.getElementById(i).value = ""
    }
}

function AtivarCampos() {
    for (i = 1; i <= 9; i++) {
        document.getElementById(i).disabled = false;
    }
}

function DesativarCampos() {
    for (i = 1; i <= 9; i++) {
        document.getElementById(i).disabled = true;
    }
}