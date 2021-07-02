let characterOneName="King";
let characterOnePoints=100;
let characterTwoName="Yoshimitsu";
let characterTwoPoints=100;

function displayCharacter(){
    document.getElementById("info-c1").innerHTML=`<p><b>Name: </b> ${characterOneName} </p>
    <p><b>Points: </b> ${characterOnePoints}`;
}
displayCharacter();

function displayCharacter2(){
    document.getElementById("info-c2").innerHTML=`<p><b>Name: </b> ${characterTwoName} </p>
    <p><b>Points: </b> ${characterTwoPoints}`;

}

displayCharacter2();

function attack(){
    document.getElementById("console").innerHTML=`<p>Attacking...</p>`;
    //discount points from the character
    var newPoints2=characterTwoPoints-20;
    //conditional statement
    if(newPoints2<=0){
        document.getElementById("console").innerHTML=`<p>G A M E    O V E R </p>`;
        document.getElementById("btn-attack2").style.display="none";
    }else{

    }
    //update the variable
    characterTwoPoints=newPoints2;
    //update the display
    displayCharacter2();
}

function attack2(){


    document.getElementById("console").innerHTML=`<p>Attacking...</p>`;
    //discount points from the character
    var newPoints=characterOnePoints-20;
    //conditional statement
    if(newPoints<=0){
        document.getElementById("console").innerHTML=`<p>G A M E    O V E R </p>`;
        document.getElementById("btn-attack").style.display="none";
    }else{

    }
    //update the variable
    characterOnePoints=newPoints;
    //update the display
    displayCharacter();
}



