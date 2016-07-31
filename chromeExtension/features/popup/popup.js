window.addEventListener('load', init);

function init() {

    var actualLanguage = window.navigator.language;

     var newLanguage = document.getElementById("change-language");
     newLanguage.addEventListener('mouseup', changeLanguage);

     function changeLanguage() {
         actualLanguage = newLanguage.value;         
    };

};

