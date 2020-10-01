window.addEventListener("DOMContentLoaded", (event) => {
  const playerXClick = function (box) {
    let clickedBox = document.getElementById(box);
    
  };
  document.body.addEventListener("click", (event) => {
    // console.log(event.target.id);
    playerXClick(event.target.id);
  });
});
