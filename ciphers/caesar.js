const CaesarSalad = require("caesar-salad")

function caesarCipher(string, shift){
    return CaesarSalad.Caesar.Cipher(shift).crypt(string);
}

function caesarDecipher(string, shift){
    return CaesarSalad.Caesar.Decipher(shift).crypt(string);
}

window.addEventListener('load', (event) => {
    document.getElementById("decode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        let shift = document.getElementById('shift').value;
        
        decodedText.value = caesarCipher(encodedText.value, shift);
    });
    
    document.getElementById("encode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        let shift = document.getElementById('shift').value;
        
        encodedText.value = caesarDecipher(decodedText.value, shift);
    });    
})