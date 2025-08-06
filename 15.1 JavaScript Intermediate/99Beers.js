//Just doing this for funsies, a lot of js videos which I am skimming through coz I know quite a bit of it
function NineNineBeers(){
    let count = 99;
    let bottleWord = "bottles";
    while(count>=1){
        if(count === 1){
            bottleWord = "bottle"
        }
        console.log(count + " " +  bottleWord + " of beer on the wall, " + count + " " + bottleWord + " of beer");
        count--;
        if(count === 0){
          bottleWord = "No more bottles";
          console.log("Take one down and pass it around, " + bottleWord + " of beer on the wall");
        }
        else{
          console.log("Take one down and pass it around, " + count + " " + bottleWord + " of beer on the wall");
        }
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall")
}

NineNineBeers();