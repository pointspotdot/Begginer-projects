function changeColor(){
    console.log('here');
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById( "changeable" ).style.backgroundColor = randomColor;
    document.getElementById( "colorId" ).textContent = randomColor;
}