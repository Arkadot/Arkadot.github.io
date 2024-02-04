let boton =  document.querySelector('button');
let resultado =  document.querySelector('h3');
let resultado2 =  document.querySelector('h4');


function calculoIMC() {
  let a = parseFloat(prompt('Introduzca su altura en m: '));

    let b = parseFloat(prompt('Introduzca su peso en kg: '));

    let imc = b / (a*a); 

    let d = ' ';

    if (imc < 16) {     

        d = 'Infrapeso: Delgadez Severa';

   
} else if (16 <= imc && imc <= 16.99)
{ 

        d = 'Infrapeso: Delgadez moderada';
   
} else if (17 <= imc && imc <= 18.49)
{

        d = 'Infrapeso: Delgadez aceptable';

   
} else if (18.50 <= imc && imc <= 24.99)
{

        d = 'Peso Normal';

   
} else if (25.00 <= imc && imc <= 29.99)
{

        d = 'Sobrepeso';

   
} else if (30.00 <= imc && imc <= 34.99)
{

        d = 'Obeso: Tipo I';

   
} else if (35.00 <= imc && imc <= 40.00)
{

        d = 'Obeso: Tipo II';

    } else if (imc > 40.00) {

        d = 'Obeso: Tipo III';


    }
resultado.textContent = 'El valor de su IMC es: ' + imc;
resultado2.textContent = 'Su condicion es: ' + d;

}



boton.onclick = function() {
  calculoIMC();
}