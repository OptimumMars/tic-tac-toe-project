window.addEventListener("DOMContentLoaded", (event) => {
  const playerXClick = function (box) {
    let clickedBox = document.getElementById(box);

    // let xImage = document.createElement("img");
    // xImage.setAttribute("src", "player-x.svg");

    clickedBox.innerHTML = "<img src = './player-x.svg'>";
  };

  const playerOClick = function(box){
      let clickedBox = document.getElementById(box);

      let oImage = document.createElement("img");
      oImage.setAttribute("src", "player-o.svg");

      clickedBox.appendChild(oImage);
  }

  let i = 1;

  const clickFunction = function(boxID){

    if(i % 2 !== 0){
        console.log("x click");
        console.log(i);
        playerXClick(boxID);
        i++
    }else{
        console.log("o click");
        playerOClick(boxID);
        i++;
    }
  }

  document.body.addEventListener("click", (event) => {
    clickFunction(event.target.id);
  });
});
