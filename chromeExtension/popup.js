window.addEventListener('load', init);

function init() {

    var actualLanguage = window.navigator.language;

     var newLanguage = document.getElementById("change-language");
     newLanguage.addEventListener('click', changeLanguage);

     function changeLanguage() {
         if(actualLanguage == "pt-BR"){
             actualLanguage = "en-US";
        }else{
             actualLanguage = "pt-BR";
         }
    };

};

