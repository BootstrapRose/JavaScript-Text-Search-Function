// jshint multistr:true

var text = "skdfjdsf ROse sdlkfjsdkfj ROSE dskfjdskf Rose KJDFKLJDSF kdsjfkd fjjfsj ksksk rose? Rose";
var myName = "Rose";
var hits=[];

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (var j = i; j < (myName.length + i); j++){
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
