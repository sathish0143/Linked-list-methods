//Find duplicates in an array
console.clear();
    let numRay = [1,2,3,1,2,3,4,5,6];
    let arr_size = numRay.length;
    for (let i = 0; i < arr_size; i++) {
        numRay[numRay[i] % arr_size]
            = numRay[numRay[i] % arr_size] + arr_size;
    }
    console.log("The repeating elements are : ");
    for (let i = 0; i < arr_size; i++) {
        if (numRay[i] >= arr_size * 2) {
            console.log(i );
        }
    }