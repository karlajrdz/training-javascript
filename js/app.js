// Object literal syntax
//let star = {
    //name: "Polaris",
    //constellation: "Ursa Minor",
    //type: "Double/Cepheid",
    //spectralClass: "F7",
    //mag: 2.0,
  //};
  
  // Escribe un objeto person, que contenga, nombre, apellidos,
  // edad, dirección{tipoVia, nombreVia, num, cp,localidad},telefono
  
  //let person = {
    //name: "John",
    //lastName: "Doe",
    //age: 30,
    //address: {
      //streetType: "Bouleletd",
      //streetName: "Larios",
      //num: 53,
      //cp: 54321,
      //location: "Málaga",
    //},
  //  phone: "+34 678 543 210",
  //};
  
  //person.address.location = "Madrid";
 // console.log(person);
  
 /// person.phone = {
   // 1: "+34 678 543 210",
    //2: "+34 678 543 211",
    //3: "+34 678 543 212",
  //};
  
 // console.log(person);
  
  // Crear un objeto llamado login con las propiedades y valores respectivamente.
  // id => Un número hexadecimal
  // state => {logged => verdadero o falso, onLine => verdadero o falso}
  // userName => "nombre"
  // loginAt: => fecha y hora
  
 // let login = {
   // id: "0afbc357de69f",
    //state: {
     // logged: false,
      //onLine: false,
    //},
    ///userName: "Jane",
    //loginAt: "2022/03/28 18:15:30",
  ///};
  
  // Modifica el objeto person, para que incluya un email y una contraseña
  // Una vez hechos los cambios, pide por prompt ambos datos y modifica el objeto login
  // según estos datos sea o no correctos.
  // alert de bienvenida refiriendo el nombre
  
  // person.email = "john@doe.com";
  // person.password = "1234";
  // console.log(person);
  // let userEmail = prompt("Please, enter your email:");
  // let userPass = prompt("Please, enter your password:");
  
  // if (userEmail == person.email && userPass == person.password) {
  //   login.state.logged = true;
  //   login.state.onLine = true;
  //   let loginInfo = new Date();
  //   let year = loginInfo.getFullYear();
  //   let month = loginInfo.getMonth()+1;
  //   let day = loginInfo.getDate();
  
  //   let hour = loginInfo.getHours();
  //   let minutes = loginInfo.getMinutes();
  //   let seconds = loginInfo.getSeconds();
  //   // loginAt: "2022/03/28 18:15:30",
  //   let completeDate = `${year}/`;
  //   if (month < 10) {
  //     completeDate += `0${month}/`;
  //   } else {
  //     completeDate += `${month}/`;
  //   }
  //   if (day < 10) {
  //     completeDate += `0${day} `;
  //   }else {
  //     completeDate += `${day} `;
  //   }
  //   if (hour<10) {
  //     completeDate += `0${hour}:`;
  //   } else {
  //     completeDate += `${hour}:`;
  //   }
  //   if (minutes<10) {
  //     completeDate += `0${minutes}:`;
  //   } else {
  //     completeDate += `${minutes}:`;
  //   }
  //   if (seconds<10) {
  //     completeDate += `0${seconds}`;
  //   } else {

  // let userPass = prompt("Please, enter your password:");
 
// if (userEmail == person.email && userPass == person.password) {
//   login.state.logged = true;
//   login.state.onLine = true;
//   let loginInfo = new Date();
//   let year = loginInfo.getFullYear();
//   let month = loginInfo.getMonth()+1;
//   let day = loginInfo.getDate();
 
//   let hour = loginInfo.getHours();
//   let minutes = loginInfo.getMinutes();
//   let seconds = loginInfo.getSeconds();
//   // loginAt: "2022/03/28 18:15:30",
//   let completeDate = `${year}/`;
//   if (month < 10) {
//     completeDate += `0${month}/`;
//   } else {
//     completeDate += `${month}/`;
//   }
//   if (day < 10) {
//     completeDate += `0${day} `;
//   }else {
//     completeDate += `${day} `;
//   }
//   if (hour<10) {
//     completeDate += `0${hour}:`;
//   } else {
//     completeDate += `${hour}:`;
//   }
//   if (minutes<10) {
//     completeDate += `0${minutes}:`;
//   } else {
//     completeDate += `${minutes}:`;
//   }
//   if (seconds<10) {
//     completeDate += `0${seconds}`;
//   } else {
//     completeDate += `${seconds}`;
//   }
//   login.loginAt = completeDate;
//   alert(`Welcome ${person.name}, you logged in correctly.`);
// } else {
//   alert("Your login data are incorrect.");
// }
//let x = 5;
//let y = x;
//y = 7;
 
//let hero = {
 //character : "iron man",
 //character : "thor",
 //name: "tony stark",
// powers:[
 //"genius- level",
 //"multiple powered armor suits",
 //"ability to fly",
// ],
 //info: {
   //yearCreated: 1963,
  // powerOrigin: "From  his suits",
  // weapons: ["repulsor rays" , "uni-beam projector" , "lasers"],
  // didYouKnow:
  // "lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto illum consectetur voluptatibus iusto ratione asperiores quae. Sit fugit voluptatum necessitatibus ut debitis animi! Unde, molestiae numquam! Vitae, maiores voluptate!",
// },
//};
 
 
//let original = [1, ,2 ,3];
//let originalIncreased =[0, ... original, 4 ];
//console.log(originalIncreased);
//let copy = [original];
//console.log(copy);
//colors [3] = "brown";
//alert(colors.length);
//colors [colors.length] = "black";
//colors [colors.length] = "white";
//console.log(colors.length);
 
 
//let moreNumbers = [9, 0,8, 1,5,10,50, 15];
//console.log(moreNumbers);
//moreNumbers.sort();
//let compare(value1, value2){
//if (value1 < value2){
  //return -1;
//}else if (value1 > value2){
  //return1;
// }else{
 // return 0;
// }
//}
 
 
//let numbers = [4,3, 2 , 5, 1, 3 ,7 ,7, 9, -1]
//let counter = 0;
//numbers.sort(let (a,b){
 //counter ++;
 //console.log("a:",a);
 //console.log("b:", b);
 //console.log(b-a);
 //return a - b
//});
 
//forma mas sencilla
//numbers.sort((a,b)=>b-a);
//console.log(numbers);
//console.log(counter);

//exercise 3
//let selection = parseInt(window.prompt("Give the User Id:", "Type a number!"), 10);

//let checkForm(form)
//{
  // validation fails if the input is blank
  //if(form.inputfield.value == "") {
    //alert("Error: Input is empty!");
    //form.inputfield.focus();
    //return false;
  //}

  // regular expression to match only alphanumeric characters and spaces
  //var re = /^[\w ]+$/;

  // validation fails if the input doesn't match our regular expression
  //if(!re.test(form.inputfield.value)) {
    //alert("Error: Input contains invalid characters!");
    //form.inputfield.focus();
    //return false;
  //}

  // validation was successful
//  return true;
//}




//6
/* //Recopila 20 citas aleatorias de una temática a tu elección, y almacénalas en un array. A
//continuación, investiga las funciones setInterval y setTimeout para generar una cita aleatoria, que
//se mostrará en consola, cada 10 segundos, durante 2 minutos.


let Quote=new Array() 

Quote[0] = "Time is of the essence! Comb your hair.";
Quote[1]="I don't stop when I'm tired. I stop when I'm done.";
Quote[2]="Greatness pulls mediocrity into the mud. Get out there and get after it";
Quote[3]="You may lose the battle of the morning but don’t lose the war of the day";
Quote[4]="Know why you’re in the fight to stay in the fight! And never forget that all emotional and physical anguish is finite!";
Quote[5]="The more things you can do to get outside of that zone that makes you feel good, the stronger your mind is going to get... It's not fun, but now my mind is used to it";
Quote[6]="Mental toughness is a lifestyle";
Quote[7]="You build calluses on your feet to endure the road";
Quote[8]="It’s about what we do with opportunities revoked or presented to us that determine how a story ends";
Quote[9]="From the time you take your first breath; you become eligible to die. You also become eligible to find your greatness and become the one warrior";
Quote[10]="If you want to get better, do the things that no-one else wants to do";
Quote[11] ="When you think that you are done, you're only 40% in to what your body's capable of doing. That's just the limits that we put on ourselves";
Quote[12] ="I was the sum total of the obstacles I'd overcome";
Quote[13] ="The reason it’s important to push hardest when you want to quit the most is because it helps you callous your mind";
Quote[14] ="The hard part is getting to that point, because the ticket to victory often comes down to bringing your very best when you feel your worst";
Quote[15] ="You can tolerate doubt as a backseat driver, but if you put doubt in the pilot’s seat, defeat is guaranteed";
Quote[16] ="The bottom line is that life is one big mind game. The only person you are playing against is yourself";
Quote[17] ="You must recognize what you are about to do, highlight what you do not like about it, and spend time visualizing each and every obstacle you can";
Quote[18] ="In this life, we're either getting better or we're getting worse";
Quote[19] ="It's going to be hard work; discipline, and the non-cognitive skills  hard work, dedication, sacrifice that will set you apart.";
Quote[20] ="In every failure a lot of good things will have happened, and we must acknowledge them";

var Q = Quote.length;
var whichQuote=Math.round(Math.random()*(Q-1));
function showQuote(){document.write(Quote[whichQuote]);}
showQuote();
Quote.splice(whichQuote, 1);
function firstRun() {
  setInterval(showQuote, 1000);
}

setTimeout(firstRun, 120 );

 */


const exercise9 = () => {
  function caesarCipher(cipherOrDecipher, givenMessage) {
    let newMessage = "";
    let listOfUpperChars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let listOfLowerChars = [..."abcdefghijklmnopqrstuvwxyz"];
    let offsetChar = 3;
    let previousIndex;
    let newIndex;
    for (let i = 0; i < givenMessage.length; i++) {
      if (listOfUpperChars.includes(givenMessage[i]) || listOfLowerChars.includes(givenMessage[i])) {
        previousIndex = listOfUpperChars.indexOf(givenMessage[i].toUpperCase());
        if (cipherOrDecipher.toUpperCase() == "CIPHER") {
          newIndex = previousIndex + offsetChar;
        } else if (cipherOrDecipher.toUpperCase() == "DECIPHER") {
          newIndex = previousIndex - offsetChar;
        }
        if (newIndex > listOfUpperChars.length - 1) {
          newIndex -= listOfUpperChars.length;
        } else if (newIndex < 0) {
          newIndex += listOfUpperChars.length;
        }
        if (listOfUpperChars.includes(givenMessage[i])) {
          newMessage += listOfUpperChars[newIndex];
        } else if (listOfLowerChars.includes(givenMessage[i])) {
          newMessage += listOfLowerChars[newIndex];
        } 
      } else {
        newMessage += givenMessage[i];
      }
    }
    return newMessage;
  }

  let desiredAction = "";
  let validDesiderdAction = false;
  let userSentence = "";
  while (!validDesiderdAction) {
    desiredAction = prompt(`Would you like to Cipher or to Decipher a message? (Answer C to cipher or D to decipher)`).toUpperCase();
    if (desiredAction == "C") {
      desiredAction = "CIPHER";
    } else if (desiredAction == "D") {
      desiredAction = "DECIPHER";
    }
    validDesiderdAction = desiredAction == "CIPHER" || desiredAction == "DECIPHER";
    if (!validDesiderdAction) {
      alert(`Sorry, but that is not a valid answer.`);
    }
  }
  if (desiredAction == "CIPHER") {
    userSentence = prompt(`Please inform the sentence you would like to cipher.`);
    alert(`The original sentence is: ${userSentence}\n\nThe ciphered sentence is: ${caesarCipher(desiredAction, userSentence)}`);
    console.log(`The original sentence is: ${userSentence}\n\nThe ciphered sentence is: ${caesarCipher(desiredAction, userSentence)}`);
  } else if (desiredAction == "DECIPHER") {
    userSentence = prompt(`Please inform the sentence you would like to decipher.`);
    alert(`The ciphered sentence is: ${userSentence}\n\nThe deciphered sentence is: ${caesarCipher(desiredAction, userSentence)}`);
    console.log(`The ciphered sentence is: ${userSentence}\n\nThe deciphered sentence is: ${caesarCipher(desiredAction, userSentence)}`);}
};

exercise9();