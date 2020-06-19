const $ = require("jquery");

module.exports = function loadNav (){
    $(document).ready(function() {
        $("#nav-placeholder").load("../templates/nav.html");
    });
}
