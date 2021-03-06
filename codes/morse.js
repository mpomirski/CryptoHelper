const morse = require("morse-code-encoder-and-decoder")

window.addEventListener('load', (event) => {
    document.getElementById("decode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        
        decodedText.value = morse.decode(encodedText.value);
    });
    
    document.getElementById("encode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        
        encodedText.value = morse.encode(decodedText.value);
    });    
})