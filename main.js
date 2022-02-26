lateral = false;
imc = false;
excluir = false;
excluir2 = false;
ad = false;
objs = new Array();

function Rodape() {
  if (lateral) {
    lateral = false;
    MudaCSS("barraLateral", "Rodape-max", "Rodape-min");
    MudaCSS("Conteudo", "Conteudo-max", "Conteudo-min");
  } else {
    lateral = true;
    ZeraTudo();
    MudaCSS("barraLateral", "Rodape-min", "Rodape-max");
    MudaCSS("Conteudo", "Conteudo-min", "Conteudo-max");
  }
}
function IMC() {
  ZeraTudo();
  if (imc == false) {
    imc = true;
    MudaCSS("IMC", "Nada", "CalcIMC");
  } else {
    imc = false;
    MudaCSS("IMC", "CalcIMC", "Nada");
  }
}
function LC() {
  ZeraTudo();
  MudaCSS("LC", "Nada", "LC");
}
function AG() {
  ZeraTudo();
  MudaCSS("AGE", "Nada", "Agenda");
}
function CalculaIMC(altura, peso) {
  retorno = false;
  if (altura == "") {
    document.getElementById("LabelAltura").style.color = "red";
    retorno = true;
  } else {
    document.getElementById("LabelAltura").style.color = "black";
  }
  if (peso == "") {
    document.getElementById("LabelPeso").style.color = "red";
    retorno = true;
  } else {
    document.getElementById("LabelPeso").style.color = "black";
  }

  if (retorno) {
    return;
  }
  ZeraIMC();
  let result = peso / (altura * altura);
  if (result < 18.5) {
    MudaCSS("1", "Nada", "1");
  } else if (result >= 18.5 && result < 24.9) {
    MudaCSS("2", "Nada", "2");
  } else if (result >= 24.9 && result < 30) {
    MudaCSS("3", "Nada", "3");
  } else if (result >= 30 && result < 35) {
    MudaCSS("4", "Nada", "4");
  } else if (result >= 35 && result < 40) {
    MudaCSS("5", "Nada", "5");
  } else {
    MudaCSS("6", "Nada", "1");
  }

  console.log(result);
}
function ZeraIMC() {
  MudaCSS("1", "1", "Nada");
  MudaCSS("2", "2", "Nada");
  MudaCSS("3", "3", "Nada");
  MudaCSS("4", "4", "Nada");
  MudaCSS("5", "5", "Nada");
  MudaCSS("6", "6", "Nada");

  document.getElementById("Altura").value = "";
  document.getElementById("Peso").value = "";
}
function ZeraTudo() {
  MudaCSS("IMC", "CalcIMC", "Nada");
  MudaCSS("LC", "LC", "Nada");
  MudaCSS("AGE", "AGE", "Nada");
  imc = false;
}
function Excluir(op) {
  if (op == 1) {
    id = "excluir0";
    texto = "Excluir";
    pode = excluir;
    classe = "NadaBotao";
  } else {
    id = "btn";
    texto = "Excluir Evento";
    pode = excluir2;
    classe = "NadaBotao2";
  }
  if (pode) {
    op == 1 ? (excluir = false) : (excluir2 = false);
    document.getElementById(id).value = texto;
    document.getElementById(id).classList.add("Botao5");
    document.getElementById(id).classList.remove("Botao6");
    lista = document.getElementsByClassName("Botao3");
    novaLista = [];
    for (x of lista) {
      novaLista.push(x);
    }
    for (x of novaLista) {
      x.classList.add(classe);
      x.classList.remove("Botao3");
    }
  } else {
    op == 1 ? (excluir = true) : (excluir2 = true);
    document.getElementById(id).value = "Cancelar";
    document.getElementById(id).classList.remove("Botao5");
    document.getElementById(id).classList.add("Botao6");
    lista = document.getElementsByClassName(classe);
    novaLista = [];
    for (x of lista) {
      novaLista.push(x);
    }
    for (x of novaLista) {
      x.classList.add("Botao3");
      x.classList.remove(classe);
    }
  }
}
function CalculaTotal() {
  soma = 0;
  for (x of document.getElementsByClassName("valor")) {
    soma += Number(x.innerHTML);
  }

  document.getElementById("total").innerHTML = "Valor Total: R$ " + soma;
}
function AdicionarL() {
  if (ad == false) {
    ad = true;
    document.getElementById("Informacoes").classList.remove("Nada");
    document.getElementById("Informacoes").classList.add("Corpo4");
  } else {
    ad = false;
    document.getElementById("Informacoes").classList.add("Nada");
    document.getElementById("Informacoes").classList.remove("Corpo4");
  }

  if (excluir) {
    Excluir(1);
  }
}
function Adicionar(Nome, Valor) {
  retorno = false;
  if (Nome == "" || Valor == "") {
    document.getElementById("LabelInfo").style.color = "red";
    retorno = true;
  } else {
    document.getElementById("LabelInfo").style.color = "black";
  }

  if (retorno) {
    return;
  }
  index = 0;
  for (x of document.getElementsByClassName("index")) {
    index = Number(x.innerHTML);
  }
  index += 1;
  base =
    '<tr id="a' +
    index +
    '"><td class="index">' +
    index +
    "</td><td>" +
    Nome +
    '</td><td class="valor">' +
    Valor +
    '</td><td><input type="button" value="Excluir" class="NadaBotao" onclick="Remove(a' +
    index +
    ')"></td></tr>';
  antigo = document.getElementById("Tabela").innerHTML;
  document.getElementById("Tabela").innerHTML = antigo + base;
  CalculaTotal();
  document.getElementById("Nome").value = "";
  document.getElementById("Valor").value = "";

  if (excluir) {
    excluir = false;
    Excluir(1);
  }
}
function Remove(comp) {
  pai = comp.parentElement;
  pai.removeChild(comp);
  CalculaTotal();

  index = 0;
  for (x of document.getElementsByClassName("index")) {
    index = Number(x.innerHTML);
  }
  if (index == 0 && excluir == true) {
    Excluir(1);
  }
}
function InputData() {
  MudaCSS("Entrada", "Nada", "Corpo2");
  MudaCSS("bt", "Botao4", "Nada");
  MudaCSS("btn", "Botao5", "Nada");
  MudaCSS("contador", "Texto1", "Nada");
}
function MudaCSS(id, antiga, nova) {
  document.getElementById(id).classList.add(nova);
  document.getElementById(id).classList.remove(antiga);
}
function refatoraData(data, hora) {
  ano = data.slice(0, 4);
  mes = data.slice(5, 7);
  dia = data.slice(8, 10);
  return [
    dia + "/" + mes + "/" + ano + " " + hora,
    dia + "/" + mes + "/" + ano,
  ];
}
function compare(a, b) {
  r = 0;
  if (a.Ano > b.Ano) {
    r += 10;
  }
  if (a.Mes > b.Mes) {
    r += 5;
  }
  if (a.Dia > b.Dia) {
    r += 2;
  }
  if (a.Hora > b.Hora) {
    r += 1;
  }

  if (a.Ano < b.Ano) {
    r -= 10;
  }
  if (a.Mes < b.Mes) {
    r -= 5;
  }
  if (a.Dia < b.Dia) {
    r -= 2;
  }
  if (a.Hora < b.Hora) {
    r -= 1;
  }

  return r;
}
function CalculaTabela(data, hora, nome) {
  retorno = false;
  if (data == "") {
    document.getElementById("LabelData").style.color = "red";
    retorno = true;
  } else {
    document.getElementById("LabelData").style.color = "black";
  }
  if (hora == "") {
    document.getElementById("LabelHora").style.color = "red";
    retorno = true;
  } else {
    document.getElementById("LabelHora").style.color = "black";
  }
  if (nome == "") {
    document.getElementById("LabelNome").style.color = "red";
    retorno = true;
  } else {
    document.getElementById("LabelNome").style.color = "black";
  }

  if (retorno) {
    return;
  }

  MudaCSS("Entrada", "Corpo2", "Nada");
  MudaCSS("bt", "Nada", "Botao4");
  MudaCSS("btn", "Nada", "Botao5");
  MudaCSS("contador", "Nada", "Texto1");

  dataCompleta = refatoraData(data, hora);
  compAtual = new Object();
  compAtual.DataCompleta = dataCompleta[0];
  compAtual.Data = dataCompleta[1];
  compAtual.Hora = hora;
  compAtual.Desc = nome;
  compAtual.Dia = dia;
  compAtual.Mes = mes;
  compAtual.Ano = ano;
  objs.push(compAtual);
  objts = objs.sort(compare);
  console.log(objs);

  reorganizaTabela(objts);
  apagaCampos();

  if (excluir2) {
    excluir2 = false;
    Excluir(2);
  }
}
function CancelaCalculaTabela() {
  MudaCSS("Entrada", "Corpo2", "Nada");
  MudaCSS("bt", "Nada", "Botao4");
  MudaCSS("btn", "Nada", "Botao5");
  MudaCSS("contador", "Nada", "Texto1");
}
function reorganizaTabela(objts) {
  ContaCompromissos();
  tabela = document.getElementById("tabelaComp");
  tabela.innerHTML =
    '<tr><td class="cabecalho">Índice</td><td class ="cabecalho">Nome do Compromisso</td><td class ="cabecalho">Data</td><td class="cabecalho">Hora</td></tr>';
  contador = 0;
  for (x of objts) {
    contador += 1;
    antigo = tabela.innerHTML;
    novo =
      '<tr><td id="indc' +
      contador +
      '">' +
      contador +
      "</td><td>" +
      x.Desc +
      "</td><td>" +
      x.Data +
      "</td><td>" +
      x.Hora +
      '</td><td><input type="button" value="Excluir" class="NadaBotao2" onclick="ExcluirCompromisso(indc' +
      contador +
      ')"></td></tr>';
    tabela.innerHTML = antigo + novo;
  }
}
function apagaCampos() {
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("desc").value = "";
}
function ExcluirCompromisso(indc) {
  console.log(indc.textContent - 1);
  objts.splice(indc.textContent - 1, indc.textContent - 1);
  if (indc.textContent - 1 == 0) {
    objts.splice(0, 1);
  }
  reorganizaTabela(objts);
  excluir2 = false;
  Excluir(2);
}
function ContaCompromissos() {
  data1 = new Date();
  dia1 = String(data1.getDate()).padStart(2, "0");
  mes1 = String(data1.getMonth() + 1).padStart(2, "0");
  ano1 = data1.getFullYear();
  dataAtual = dia1 + "/" + mes1 + "/" + ano1;

  ano = dataAtual.slice(6, 10);
  mes = dataAtual.slice(3, 5);
  dia = dataAtual.slice(0, 2);
  hora1 = data1.getHours();
  min1 = data1.getMinutes();

  hora1 = hora1 + ":" + min1;

  dt = new Object();

  dt.Ano = ano;
  dt.Mes = mes;
  dt.Dia = dia;
  dt.Hora = hora1;

  cont = 0;

  for (x of objs) {
    if (compare(dt, x) <= 0) {
      console.log(
        "Evento Detectado: " + x.Data + " - " + x.Hora + " - " + x.Desc
      );
      cont += 1;
    }
  }

  document.getElementById("contador").innerHTML = "Eventos Pendentes: " + cont;
}
