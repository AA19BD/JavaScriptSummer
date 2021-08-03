const title = document.querySelector(".title"); //.title->class
const changeColor = document.querySelector(".changeColor");
const nameList = document.querySelectorAll(".name-list li");

// title.style.color = "red";
// title.classList.add("change"); //add style using classlist in js

changeColor.addEventListener("click",()=>{//call-back function
  title.classList.toggle("change"); //add style using classlist in js
});

for (user of nameList) {
  user.addEventListener("click",function(){
    this.classList.toggle("red")
    // this.style.color = "red";
  });
}

const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");
const userList = document.querySelector(".user-list");

addListBtn.addEventListener("click",()=> {
  const newLi = document.createElement("LI");
//   newLi.innerHTML=listInput.value;
  const liContent = document.createTextNode(listInput.value);
  newLi.appendChild(liContent);
  userList.appendChild(newLi);

  listInput.value = "";
});
