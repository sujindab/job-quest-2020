function secondMax(array) {
    let arr,pop;
    pop=[...new Set(array)];
    if (pop.length===0) {
        console.log("Error!")

    }else if (pop.length===1){
        console.log(array[0])
    }
    else{
        arr= pop.sort(function(a, b){return b-a})
        console.log(arr[1])
    }
    
    
}

secondMax([2, 3, 4, 5])
secondMax([9, 2, 21, 21])
secondMax([4, 4, 4, 4])
secondMax([4123])
secondMax([])