// Assignment Cod


(function(){
/*--------------------------------*/
/* VARIABLES AND OBJECTS /*
/*--------------------------------*/
    var app = document.getElementById('app');
    var inputCharacters = document.getElementById('password-lenght');

    var confi = {
        characters: parseInt(inputCharacters.value),
        symbols: true,
        numbers: true,
        uppercases: true,
        lowercases: true
    }

    var characters = {
        numbers: '0 1 2 3 4 5 6 7 8 9', 
        symbols: '! @ # $ % ^ & * ( ) _ - = + { } [ ] ; : / ? . > , < ` ~',
        uppercases: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        lowercases: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }
 
/*--------------------------------*/
/* EVENTS /*
/*--------------------------------*/

//Event to prevent that app make submit
app.addEventListener('submit', function(e){
    e.preventDefault();
});

app.elements.namedItem('btn-one-plus').addEventListener('click', function(){ 
    if (confi.characters < 128) {
        confi.characters++; 
        inputCharacters.value = confi.characters;
    }    
});

    app.elements.namedItem('btn-one-minus').addEventListener('click', function() {
        if (confi.characters > 8 ){
            confi.characters--;
            inputCharacters.value = confi.characters;
        }
    });

    app.elements.namedItem('btn-symbols').addEventListener('click', function(){
      btnToggle(this);
      confi.symbols = !confi.symbols;
    });

    app.elements.namedItem('btn-numbers').addEventListener('click', function () {
        btnToggle(this);
        confi.numbers = !confi.numbers;
    });

    app.elements.namedItem('btn-uppercase').addEventListener('click', function () {
        btnToggle(this);        
        confi.uppercase = !confi.uppercase;
    });

    app.elements.namedItem('btn-generate').addEventListener('click',function(){
        generatePassword();

    } );

    app.elements.namedItem('input-password').addEventListener('click', function(){
        copyPassword();
    });
/*--------------------------------*/
/* FUNCTIONS /*
/*--------------------------------*/
function btnToggle(element){
    element.classList.toggle('false');
    element.childNodes[0].classList.toggle('fa-check');
    element.childNodes[0].classList.toggle('fa-times');
}

function generatePassword(){
    var finalChar = '';
    var password = '';

    for(propiedad in confi){
       if(confi[propiedad] == true){
           finalChar += characters[propiedad] + ' ';

       } 
    }
    finalChar = finalChar.trim();
   finalChar = finalChar.split(' ');

   for(var i = 0; i < confi.characters; i++){
       password = password + finalChar[Math.floor(Math.random() * finalChar.length)];
   }

   app.elements.namedItem('input-password').value = password;
}

function copyPassword(){
    app.elements.namedItem('input-password').select();
    document.execCommand('copy');
    document.getElementById('message-copied').classList.add('active');

    setTimeout(function(){
        document.getElementById('message-copied').classList.remove('active');
    }, 2000);
}
    generatePassword();
}())



/*var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/
