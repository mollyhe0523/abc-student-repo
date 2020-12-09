console.log("Yo what's up");

function getAllImg(){
  imgs=document.getElementsByTagName("img");
  console.log(imgs);
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].src="https://res.cloudinary.com/teepublic/image/private/s--95CZqlk---/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1471445514/production/designs/636999_1.jpg";
}
  ps=document.getElementsByTagName("p");
  console.log(ps);
  for (var i = 0; i < ps.length; i++) {
    ps[i].innerHTML="PEOPLE SHOULD NOT BE AFRAID OF THEIR GOVERNMENTS. GOVERNMENTS SHOULD BE AFRAID OF THEIR PEOPLE.";
}
  h1=document.getElementsByTagName("h1");
  console.log(h1);
  for (var i = 0; i < h1.length; i++) {
    h1[i].innerHTML="PEOPLE SHOULD NOT BE AFRAID OF THEIR GOVERNMENTS. GOVERNMENTS SHOULD BE AFRAID OF THEIR PEOPLE.";
  }
  h2=document.getElementsByTagName("h2");
  console.log(h2);
  for (var i = 0; i < h2.length; i++) {
    h2[i].innerHTML="PEOPLE SHOULD NOT BE AFRAID OF THEIR GOVERNMENTS. GOVERNMENTS SHOULD BE AFRAID OF THEIR PEOPLE.";
  }
  h3=document.getElementsByTagName("h3");
  console.log(h3);
  for (var i = 0; i < h3.length; i++) {
    h3[i].innerHTML="PEOPLE SHOULD NOT BE AFRAID OF THEIR GOVERNMENTS. GOVERNMENTS SHOULD BE AFRAID OF THEIR PEOPLE.";
  }
  h4=document.getElementsByTagName("h4");
  console.log(h4);
  for (var i = 0; i < h4.length; i++) {
    h4[i].innerHTML="PEOPLE SHOULD NOT BE AFRAID OF THEIR GOVERNMENTS. GOVERNMENTS SHOULD BE AFRAID OF THEIR PEOPLE.";
  }


}

function gotMessage(request,sender,sendResponse){
  console.log(request);
  getAllImg();
}

chrome.runtime.onMessage.addListener(gotMessage);
