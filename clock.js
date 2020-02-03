var clockTarget = document.getElementById("clock");


    function clock (){
        const date = new Date();
        
        const minutes = date.getMinutes();
        const hours= date.getHours();
        const seconds =date.getSeconds();
        clockTarget.innerText= 
        `${hours < 10 ?  `0${hours}` : hours  }:${minutes < 10 ? `0${minutes}`: minutes }` ;
    
    }
    
    function init ( ){
        clock();
        setInterval(clock, 1000);
}

init ();
