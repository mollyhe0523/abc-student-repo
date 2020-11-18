console.log("Hello")
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

rock.addEventListener("click",()=>{
  console.log("rock");
  window.location.href="/choice?word=rock";
})
paper.addEventListener("click",()=>{
  console.log("paper");
  window.location.href="/choice?word=paper";
})
scissor.addEventListener("click",()=>{
  console.log("scissor");
  window.location.href="/choice?word=scissor";
})
