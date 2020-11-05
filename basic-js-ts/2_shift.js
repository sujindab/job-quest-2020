let arr = ['john','jane','sarah','alex']


function shift(array,direction,position) {
    let box=array,ans
    // console.log("BOX ",box)
    if ( direction === 'left') {
        ans = box.concat(box.splice(0,position))
        console.log(ans)
    }
    else if ( direction === 'right') {
        ans = box.concat(box.splice(0,box.length-position))
        console.log(ans)
    }

}
shift([1,2,43,4,5,6,],'right',2)
// shift([1,2,43,4,5,6,],'left',3)
shift(arr,'right',2)
// shift(arr,'left',3)
// console.log("after concat ",a)
// console.log("after concat ",arr)
