document.querySelector("#content2").style.display = "none";
document.querySelector("#content3").style.display = "none";
document.querySelector("#content4").style.display = "none";
document.querySelector("#content5").style.display = "none";

document.querySelector("#hideContent1").addEventListener("click", (event) => {
 document.querySelector("#content1").style.display = "none";
  document.querySelector("#content2").style.display = "block";
});

document.querySelector("#hideContent2").addEventListener("click", (event) => {
  document.querySelector("#content2").style.display = "none";
   document.querySelector("#content3").style.display = "block"; 
 });
   
 document.querySelector("#hideContent3").addEventListener("click", () => {
  document.querySelector("#content3").style.display = "none";
   document.querySelector("#content4").style.display = "block";
   let minValue = document.getElementById('input1').value;
   let maxValue = document.getElementById('input2').value;
   const inVite= document.getElementById('inVite');
   
   minValue = (minValue <= -1000) ? 
   minValue = -999 :
   !isNaN(minValue) ?
   minValue = minValue:
   minValue = 0;
   
   maxValue = (maxValue >= 1000) ? 
   maxValue = 999 :
   !isNaN(maxValue) ?
   maxValue = maxValue:
   maxValue = 100;

   inVite.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}`;
 });
   
 document.querySelector("#hideContent4").addEventListener("click", () => {
  document.querySelector("#content4").style.display = "none";
   document.querySelector("#content5").style.display = "block";

   let minValue = document.getElementById('input1').value;
   minValue = parseInt(minValue);
   /*тернарный оператор для проверки  ввода текста, который не может быть интерпретирован как число (NaN) c присвоением значения по умолчанию, используя короткий цикл операций дизъюнкции.
   При вводе минимума  меньше -999 изменяет число на ближайшую границу (например, при вводе -10000 меняет значение на -999)*/
   minValue = (minValue <= -1000) ? 
   minValue = -999 :
   !isNaN(minValue) ?
   minValue = minValue:
   minValue = 0;

   let minvalueLess = minValue;
   let maxValue = document.getElementById('input2').value;
   maxValue = parseInt(maxValue);
   /*тернарный оператор для проверки  ввода текста, который не может быть интерпретирован как число (NaN) c присвоением значения по умолчанию, используя короткий цикл операций дизъюнкции.
   При вводе максимума  больше 1000 изменяет число на ближайшую границу (например, при вводе 1000 меняет значение на 999)*/
   maxValue = (maxValue >= 1000) ? 
   maxValue = 999 :
   !isNaN(maxValue) ?
   maxValue = maxValue:
   maxValue = 100;
   var answerNumber  = Math.floor((minValue + maxValue) / 2);
   var orderNumber = 1;
   var gameRun = true;
   
   const orderNumberField = document.getElementById('orderNumberField');
   const answerField = document.getElementById('answerField');
  
   var outputNumber;
 
//    if  (Math.abs(numberConvert(answerNumber)).length <=20 && answerNumber >=0) {
    if  ( answerNumber >=0) {
       outputNumber = numberConvert(answerNumber);
     
   } else {
        outputNumber = 'минус' + Math.abs(numberConvert(answerNumber));
   }
   

   orderNumberField.innerText = orderNumber;
   console.log(outputNumber);
   answerField.innerText = `Вы загадали число  ${outputNumber}?`;
   
   document.getElementById('btnRetry').addEventListener('click', function () {
       minValue = 0;
       maxValue = 100;
       orderNumber = 0;
       reload_interval(100);
   });
   
   
   document.getElementById('btnOver').addEventListener('click', function () {
       if (gameRun){
           if (minValue === maxValue){
               const phraseRandom = Math.round( Math.random()*3);
               const answerPhrase = (phraseRandom === 0) ?
                   `Вы загадали неправильное число!\n\u{1F914}` :
                   (phraseRandom === 1) ? 
                   `Я сдаюсь..\n\u{1F92F}` :
                   (phraseRandom === 2) ? 
                   `Вы мухлюете....\n\u{1F643}` :
                   `Не хочу с вами играть..\n\u{1F92F}`;
               answerField.innerText = answerPhrase;
               gameRun = false;
           } else {
               minValue = answerNumber  + 1;
               answerNumber  = Math.floor((minValue + maxValue) / 2);
               var outputNumber;

               if  ( answerNumber >=0) {
                outputNumber = numberConvert(answerNumber);
              
            } else {
                 outputNumber = 'минус' + Math.abs(numberConvert(answerNumber));
            }
            
               orderNumber++;
               orderNumberField.innerText = orderNumber;
               console.log(outputNumber);
               const phraseRandom = Math.round( Math.random()*3);
               answerField.innerText = (phraseRandom === 0) ?
               `Думаю Вы загадали число ${outputNumber}` :
               (phraseRandom === 1) ? 
               `Явно, это число ${outputNumber}` :
               (phraseRandom === 2) ? 
               `Мы близки к разгадке. Это число ${outputNumber}` :
               `Я почти уверен, что это число ${outputNumber}`;
           }
       }
   });
   
   document.getElementById('btnLess').addEventListener('click', function () {
       if (gameRun){
           if (maxValue === minvalueLess){
               const phraseRandom = Math.round( Math.random()*3);
               const answerPhrase = (phraseRandom === 0) ?
                   `Будьте внимательны! Вы загадали неправильное число!\n\u{1F975}` :
                   (phraseRandom === 1) ? 
                   `Я совершенно не понимаю вашей логики\n\u{1F635}` :
                   (phraseRandom === 2) ? 
                   `Вы обманываете....\n\u{1F974}` :
                   `Зачем обижать сущность, которая хочет погирать с вами...\n\u{1F927}`;
   
               answerField.innerText = answerPhrase;
               gameRun = false;
           } else {
               maxValue = answerNumber  - 1;
               minValue=minvalueLess;
               answerNumber  = Math.round((minValue + maxValue ) / 2);
               let outputNumber;
               
         if  ( answerNumber >=0) {
       outputNumber = numberConvert(answerNumber);
     
   } else {
        outputNumber = 'минус' + Math.abs(numberConvert(answerNumber));
   }
   
               orderNumber++;
               orderNumberField.innerText = orderNumber;
               console.log(outputNumber);
               const phraseRandom = Math.round( Math.random()*3);
               answerField.innerText = (phraseRandom === 0) ?
               `Думаю Вы загадали число ${outputNumber}` :
               (phraseRandom === 1) ? 
               `Явно, это число ${outputNumber}` :
               (phraseRandom === 2) ? 
               `Мы близки к разгадке. Это число ${outputNumber}` :
               `Я почти уверен, что это число ${outputNumber}`;
           }
       }
   });
   
   document.getElementById('btnEqual').addEventListener('click', function () {
       if (gameRun){
           let phraseRandom = Math.round( Math.random()*3);
           const answerPhrase = (phraseRandom === 0) ?
               `Удача- мое второе имя!\n\u{1F607}` :
               (phraseRandom === 1) ? 
               `Я лучший экстрасенс этой недели\n\u{1F929}` :
               (phraseRandom === 2) ? 
               `Приятно познакомиться! Я оракул!\n\u{1F929}` :
               `Одним словом- как настрадал предсказамус\n\u{1F61C}`;
               answerField.innerText = answerPhrase;
           gameRun = false;
       }
   });
   
   
   // reload_interval- функция обновления экрана с задержкой
   function reload_interval(time){
       setTimeout(function(){
           location.reload();
       }, time);
   }
   
   
   /*Функция вывода числа в текстовой форме, если на его запись в текстовой форме требуется меньше 20 символов, включая пробелы.*/
   function numberConvert(answerNumber) { 
           var ones = new Array('', ' один', ' два', ' три', ' четыре', ' пять', ' шесть', ' семь', ' восемь', ' девять', ' десять', ' одиннацать', ' двенадцать', ' тринадцать', ' четырнадцать', ' пятнадцать', ' шестнадцать', ' семнадцать', ' восемнадцать', ' девятнадцать');
           var tens = new Array('', '', ' двадцать', ' тридцать', ' сорок', ' пятьдесят', ' шестьдесят', ' семьдесят', ' восемьдесят', ' девяносто');
           var hundred = new Array('', ' сто', ' двести', ' триста', ' четыреста', ' пятьсот', ' шестьсот', ' семьсот', ' восемьсот', ' девятьсот');
           var output = '';
           var numString = answerNumber.toString();
   
           if (answerNumber == 0) {
               return 'ноль';
           }
   
           if (answerNumber < 20) {
               output = ones[answerNumber];
               return output;
           }


   
           if (numString.length == 3) {
               output = hundred[parseInt(numString.charAt(0))];
               output += tens[parseInt(numString.charAt(1))];
               output += ones[parseInt(numString.charAt(2))];
               return output;
           }
   
           output += tens[parseInt(numString.charAt(0))];
           output += ones[parseInt(numString.charAt(1))];
           return output;
       }
       

 });
   
 function change1(){
    let oRangeInput1 = document.querySelector('#inputRange1');
    let oRangeLabel1 = document.querySelector('#range_label1');
    oRangeLabel1.innerText = oRangeInput1.value;
    let nLabelWidth = parseFloat(window.getComputedStyle(oRangeLabel1).width);
    oRangeLabel1.style.left = parseInt(oRangeInput1.value / 350 - nLabelWidth / 2 - 6) + 'px';
    document.getElementById('input1').value = oRangeInput1.value;
}

 function change2() {
    let oRangeInput2 = document.querySelector('#inputRange2');
    let oRangeLabel2 = document.querySelector('#range_label2');
    oRangeLabel2.innerText = oRangeInput2.value;
    let nLabelWidth = parseFloat(window.getComputedStyle(oRangeLabel2).width);
    oRangeLabel2.style.left = parseInt(oRangeInput2.value / 350 - nLabelWidth / 2 - 6) + 'px';
    document.getElementById('input2').value = oRangeInput2.value;
  }

