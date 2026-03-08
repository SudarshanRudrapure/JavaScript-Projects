let count = 0;

const countElement = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateCounter() {

  countElement.textContent = count;

  if(count > 0){
    countElement.style.color = "green";
  }
  else if(count < 0){
    countElement.style.color = "red";
  }
  else{
    countElement.style.color = "black";
  }

}

increaseBtn.addEventListener("click", function(){
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", function(){
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", function(){
  count = 0;
  updateCounter();
});