window.addEventListener("DOMContentLoaded", (event) => {
  const playerXClick = function (box) {
    let clickedBox = document.getElementById(box);

    let xImage = document.createElement("img");
    xImage.setAttribute("src", "player-x.svg");
  };

  const playOClick = function(box){
      let clickedBox = document.getElementById(box);

      let oImage = document.createElement("img");
      oImage.setAttribute("src", "player-o.svg")
  }

  let i = 1;

  const clickFunction = function(){

    if(i % 2 !== 0){
        console.log("x click");
        console.log(i);
        i++
    }else{
        console.log("o click");
        i++;
    }
  }
  document.body.addEventListener("click", (event) => {
    clickFunction();

    playerXClick(event.target.id);
  });
});
