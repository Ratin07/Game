let btn = document.querySelector("#button");

btn.addEventListener("click", function(){
  let h1 = document.querySelector("h2");
  let randomcolor = getRandomColor();
  h1.innerText = '"THIS ONE IS GOOD!"';
  h1.style.color = randomcolor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomcolor;

  div.style.color = "black";

  console.log(randomcolor);
  console.log("color updated")
});

let button = document.querySelector("#btn");
button.addEventListener("click",  function(){
  alert('Great Now if you want to explore more go to "learn.microsoft.com"')
})

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);


    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}
