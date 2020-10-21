// let array=[];
let container=document.getElementById('container');
for(let i=0;i<20;i++){
  // array.push({index:i, name:"molly"});
  let newDiv=document.createElement("div");
  newDiv.className="box";
  newDiv.innerHTML = i;
  container.appendChild(newDiv);

}

let boxes = container.getElementsByClassName("box");

let button = document.getElementById('button');
button.addEventListener("click", ()=>{
  console.log(boxes[boxes.length-1]);
  let lastBox = boxes[boxes.length-1];
  container.removeChild(lastBox);
  container.prepend(lastBox)
})

// array.forEach((item)=>{
  // console.log(item);
  // let newDiv=document.createElement("div");
  // newDiv.className="box";
  // newDiv.innerHTML = item.index;
  // container.appendChild(newDiv);
// })
