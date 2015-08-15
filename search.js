jshint multistr:true

var text = "skdfjdsf ROse sdlkfjsdkfj \ ROSE dskfjdskf Rose KJDFKLJDSF \ kdsjfkd fjjfsj ksksk rose?";
var myName = "Rose";
var hits=[];

for (i=0; i < text.length; i++){
    if (myName[0] === text[i]){
        for (var i = 0; i < myName.length; i++){
            hits.push('Rose');
        }
    }
}
