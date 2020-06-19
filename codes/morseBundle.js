(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"morse-code-encoder-and-decoder":2}],2:[function(require,module,exports){
const MORSE_CODE = {
    ".-"   : "a",
    "-..." : "b",
    "-.-." : "c",
    "-.."  : "d",
    "."    : "e",
    "..-." : "f",
    "--."  : "g",
    "...." : "h",
    ".."   : "i",
    ".---" : "j",
    "-.-"  : "k",
    ".-.." : "l",
    "--"   : "m",
    "-."   : "n",
    "---"  : "o",
    ".--." : "p",
    "--.-" : "q",
    ".-."  : "r",
    "..."  : "s",
    "-"    : "t",
    "..-"  : "u",
    "...-" : "v",
    ".--"  : "w",
    "-..-" : "x",
    "-.--" : "y",
    "--.." : "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "|"    : " "
};


function encode(data) {
    let message = '';
    data.toLowerCase().split('').forEach(c => {
        message += ' ' + Object.keys(MORSE_CODE)[Object.values(MORSE_CODE).indexOf(c)];
    });
    return message.trim();
}

function decode(data) {
    let words = (data).split(' ');
    let letters = words.map((w) => w.split(' '));
    let decoded = [];
    for (let i = 0; i < letters.length; i++) {
        decoded[i] = [];
        for (var x = 0; x < letters[i].length; x++) {
            if (MORSE_CODE[letters[i][x]]) {
                decoded[i].push(MORSE_CODE[letters[i][x]]);
            }
        }
    }

    return decoded.map(arr => arr.join('')).join('');
}

module.exports = {
    MORSE_CODE,
    encode,
    decode
};
},{}]},{},[1]);
