jshint multistr:true

var text = "skdfjdsf ROse sdlkfjsdkfj \ ROSE dskfjdskf Rose KJDFKLJDSF \ kdsjfkd fjjfsj ksksk rose?";
myName = "Rose";
hits=[];

for (i=0; i < text.length; i++){
    if (myName[0] === text[i]){
        for (var j = 0; j < myName.length; j++){
            hits.push('Rose');
        }
    }
}
