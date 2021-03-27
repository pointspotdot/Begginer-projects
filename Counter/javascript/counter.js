let count = null;

function changeCount(){
    if ( count === null ) count = Math.floor( Math.random() * 10 );
    let element = document.getElementById( "count" );

    if ( count > 0 ){
        element.className = "positive";
    } else if ( count < 0 ){
        element.className = "negative";
    } else if ( count === 0 ){
        element.className = "";
    }
    element.textContent = count;
}

function handleCount( operation ){
    switch ( operation ) {
        case "increase":
            count++;
            break;
        case "decrease":
            count--;
            break;
        case "reset":
            count = 0;
            break;
        default:
            break;
    }
    changeCount();
}