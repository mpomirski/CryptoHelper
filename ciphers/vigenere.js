const CaesarSalad = require("caesar-salad")

function vigenereCipher(string, shift){
    return CaesarSalad.Vigenere.Cipher(key).crypt(string);
}

function vigenereDecipher(string, shift){
    return CaesarSalad.Vigenere.Decipher(key).crypt(string);
}

window.addEventListener('load', (event) => {
    document.getElementById("decode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        let key = document.getElementById('key').value;
        
        decodedText.value = vigenereCipher(encodedText.value, key);
    });
    
    document.getElementById("encode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        let key = document.getElementById('key').value;
        
        encodedText.value = vigenereDecipher(decodedText.value, key);
    });    
})