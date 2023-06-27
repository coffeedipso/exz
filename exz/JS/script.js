
let mes=document.querySelector('.mes');

const user1 = document.querySelector('.name1');
const user2 = document.querySelector('.name2');

let userActive = user1;

const form = document.querySelector("form");
form.addEventListener("submit", Send);


function Choice1() {
  userActive = user1;
}

function Choice2() {
  userActive = user2;
}

function Send(event)
{
    event.preventDefault()
    const input = document.getElementById("textt");
  const messageText = input.value.trim();
  input.value = "";
  let Messages;

  const Message = document.createElement("span");
  Messages = document.querySelector(".mes");
// let chatContainer=document.querySelector('.chatcontainer');
// let SendText=document.querySelector('.name1Text');
// let newtext=mes.innerHTML+=SendText.value+'<br>';
// SendText.value=''
if (userActive === user1) {
    Message.classList.add("choice1")
  } else {
    Message.classList.add("choice2")
  }
  Message.textContent = messageText;
  Messages.appendChild(Message);
} 

// function Choice1(){
//     document.getElementsByClassName("mes")[0].classList.remove("choice1");
//     document.getElementsByClassName("mes")[0].classList.add("choice2");
// }

// function Choice2(){
//     document.getElementsByClassName("mes")[0].classList.remove("choice2");
//     document.getElementsByClassName("mes")[0].classList.add("choice1");
// } 


