document.getElementById("verifier").addEventListener("click",function(){let points=0;
let moyenne=parseFloat(document.getElementById("moyenne").value);if(moyenne>=10.51 && moyenne<=11.50){points +=2;}else if(moyenne>=11.51 && moyenne<=13.50){points+=3;}
else if(moyenne>=13.51){points+=5;}
let scolarite=parseInt(document.getElementById("scolarite").value);if(scolarite===3){points+=5;}else if(scolarite===4){points+=3;}else if(scolarite===5){points+=0;}
let sexe = document.getElementById("sexe").value;if(sexe==="F"){points+=1;}if(document.getElementById("handicap").checked){points+=2}if(document.getElementById("orphelin").checked){points+=2;}
if(document.getElementById("scientifique").checked){points+=2;}
let resultText ="";
if(points>=7){resultText= "Félicitations !,vous avez droit à la bourse entière plus (trousseau: 35000 F)";}else if(points===6){resultText="Vous avez droit à une demi-bourse plus (trousseau: 35000 F)";}
else {resultText="Désolé, vous n\'avez pas droit à la bourse. (trousseau: 35000 F obligatoire)";}
document.getElementById("result").textContent=resultText;document.getElementById("n").textContent="Vous avez "+points+"points";
});