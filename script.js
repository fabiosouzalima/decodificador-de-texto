function encryptText() {
    var inputText = document.getElementById("input-text").value;
    var outputText = "";
    var shift = 3; 

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

       
        if (charCode >= 65 && charCode <= 90) {
            var encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
            outputText += String.fromCharCode(encryptedCharCode);
        } else {
            outputText += inputText.charAt(i);
        }
    }

    document.getElementById("output-text").value = outputText;
}

function decryptText() {
    var inputText = document.getElementById("input-text").value;
    var outputText = "";
    var shift = 3; 

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        
        if (charCode >= 65 && charCode <= 90) {
            var decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
            outputText += String.fromCharCode(decryptedCharCode);
        } else {
            outputText += inputText.charAt(i);
        }
    }

    document.getElementById("output-text").value = outputText;
}

function copyText() {
    var outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}

function pasteText() {
    navigator.clipboard.readText().then(text => {
        document.getElementById("input-text").value += text;
    }).catch(err => {
        console.error('Erro ao colar texto: ', err);
    });
}