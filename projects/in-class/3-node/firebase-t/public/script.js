console.log("hi");

let socket = io();
let namebox = document.getElementById('name');
let chatbox = document.getElementById('chat');
let messagebox = document.getElementById('message');
let sendbutton = document.getElementById('send');
let usercount = document.getElementById("usercount");

sendbutton.addEventListener("click",()=>{
  console.log("click");
  let name=namebox.value.trim();
  if (name ==""){
    name="anonymous";
    namebox.value = "";
  }
  let message = messagebox.value.trim();
  if (message != ""){
    let data = {name:name, message: message};
    socket.emit('message-from-one',data);
    console.log(data);
  }
  messagebox.value = "";
})

function updateUserCount (data){
  let count = data.count;
  usercount.innerHTML = count-1;
}

socket.on("message-to-all",(data)=>{
  console.log(data);
  let name= data.name;
  let message = data.message;
  appendMessage(name,message);
})

function appendMessage(name,message){
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = "<span class = 'sender'>"+name+":</span> "+message;
  li.appendChild(p);
  chatbox.appendChild(li);
  chatbox.scrollTop = chatbox.scrollHeight;
}

socket.on('new-user-count',(data)=>{
  updateUserCount(data);
})

socket.on('archival-data',(data)=>{
  let keys=Object.keys(data);
  for(let i=0; i<keys.length; i++){
    let key = keys[i];
    let datapoint = data[key];
    appendMessage(datapoint.name,datapoint.message);
  }
})

messagebox.addEventListener("keyup",(event)=>{
  if (event.keyCode == 13){
    sendbutton.click();
  }
})
