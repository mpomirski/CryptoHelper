window.addEventListener('load', (event) => {
    document.getElementById("decode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        
        decodedText.value = numText(encodedText.value, true);
    });
    
    document.getElementById("encode").addEventListener("click", () => {
        let encodedText = document.getElementById('encoded');
        let decodedText = document.getElementById('decoded');
        
        encodedText.value = numText(decodedText.value, false);
    });
})

function numText(message, isEncoding) {
	if (isEncoding) {
		messageArray = message.split(' ');
		return messageArray
			.map((element) => {
				if (element > 0 && element <= 26) {
					element = parseInt(element);
					return String.fromCharCode(element + 96);
				}
			})
			.join('');
	} else {
		messageArray = message.split('');
		return messageArray
			.map((char) => {
				char = char.toLowerCase();
				char = char.charCodeAt(0) - 96;
				if (char > 0 && char <= 26) {
					return char;
				}
			})
			.join(' ');
	}
}