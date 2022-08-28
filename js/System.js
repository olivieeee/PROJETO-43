class System{

    constructor(){
//this.button3 = createButton('verificar');
//this.button3.position(100, 350);
//this.button3.style('background', 'lightgrey')

    }


    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else
            return false
    }

}
