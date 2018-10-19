/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var taytay = document.getElementById("name1");
taytay.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/


var djPos = document.getElementById("position2");
djPos.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var pikoAlias = document.getElementById("alias3");
pikoAlias.innerHTML = "Concatenation";



/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profElem = document.getElementsByClassName("profile");
profElem[0].innerHTML = "Purple rain, purple rain";


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

profElem[1].innerHTML = "“A goal is not always meant to be reached, it often serves simply as something to aim at.” "

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasElem = document.getElementsByClassName("alias");
aliasElem[2].innerHTML = "Frozone";
profElem[2].innerHTML = "HONEY....WHERES MY SUPER SUIT?????";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var peterName = document.createElement("div");
peterName.id = "name7";
peterName.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(peterName);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var alias8 = document.createElement("div");
alias8.id = " alias8";
alias8.innerHTML = "Old Man Riverwalk";
document.getElementById("aliasParent").appendChild(alias8);

//Final Boss
/*9. Create your own profile.*/

