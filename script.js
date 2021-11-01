function selection(element) {
    const border = element.querySelector("div");
    const option = border.parentNode;
    const container = option.parentNode;
    if (container.querySelector(".selected") !== null) {
        container.querySelector(".selected").classList.toggle("selected");
    }
    border.classList.toggle("selected");

    if (container.classList[1] === "zero") {
        document.querySelector(".itemName0").innerHTML = element.querySelector(".itemName").innerHTML;
        document.querySelector(".price0").innerHTML = element.querySelector(".price em").innerHTML;
    }
    if (container.classList[1] === "um") {
        document.querySelector(".itemName1").innerHTML = element.querySelector(".itemName").innerHTML;
        document.querySelector(".price1").innerHTML = element.querySelector(".price em").innerHTML;
        parseFloat(document.querySelector(".price1").innerHTML.replace(/,/g, '.'));
    }
    if (container.classList[1] === "dois") {
        document.querySelector(".itemName2").innerHTML = element.querySelector(".itemName").innerHTML;
        document.querySelector(".price2").innerHTML = element.querySelector(".price em").innerHTML;
        parseFloat(document.querySelector(".price2").innerHTML.replace(/,/g, '.'));
    }
    let totalPrice = parseFloat(document.querySelector(".price0").innerHTML.replace(/,/g, '.')) + parseFloat(document.querySelector(".price1").innerHTML.replace(/,/g, '.')) + parseFloat(document.querySelector(".price2").innerHTML.replace(/,/g, '.'));
    document.querySelector(".total").innerHTML = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    if (document.querySelectorAll(".selected").length === 3) {
        document.querySelector(".confirm span").innerHTML = "Fechar pedido";
        document.querySelector(".confirm").classList.add("done");
    }
}

function confirm() {
    document.querySelector(".overlay").style.display = "block";
}

function declination() {
    document.querySelector(".overlay").style.display = "none";
}

function confirmation() {

    window.open("https://wa.me/+5521999999999?text=" +
        encodeURIComponent('Olá, gostaria de fazer o pedido:\n' +
            '- Prato: ' + document.querySelector(".itemName0").innerHTML +
            '\n - Bebida: ' + document.querySelector(".itemName1").innerHTML +
            '\n - Sobremesa ' + document.querySelector(".itemName2").innerHTML +
            '\n \n Nome: ' + prompt("Qual é o seu nome?") +
            '\n  Endereço: ' + prompt("Qual o endereço de entrega?")));
}