const arrayStats= [1, 2, 3, 4, 5]
function arrayStatistics(arr){
    const sam = arr.reduce((a,b)=> a+b)
    const average = sam/arrayStats.length
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return {
        average: average,
        sam: sam,
        min: min,
        max: max
    }
}
console.log(arrayStatistics(arrayStats))