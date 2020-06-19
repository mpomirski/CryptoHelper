const { encode, decode } = require("morsee")

window.addEventListener('load', (event) => {
    document.getElementById("decode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        
        decodedText.value = decode(encodedText.value);
    });
    
    document.getElementById("encode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        
        encodedText.value = encode(decodedText.value);
    });    
})