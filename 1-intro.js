// Global variables

const amount = 12;
if(amount < 10){
    console.log("small number");
}
else{
    console.log("large number")
}

console.log("Hey its my first node app ");
console.log(`Using the template string for the node app`);

const array = [10, 11, 12, 9, 8];// array of integers
console.log("before rearranging", array)

const newArray = (array) => {
    let len = array.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(array[j] > array[j + 1]){
                let temp;
                temp = array[j];
                array[i] = array[j + 1];
                array[j + 1] = temp;
            }
    }
}
return newArray;
}

console.log(newArray());