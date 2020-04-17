const arr = [1,2,3];

// output >>> [1,2,4]

// condition = [0,1,2,3];

const add_one_to_number = (arr) => {
    if(arr[0] === 0 && [...new Set(arr)].length ===1) {
        return [1];
    } else {
        let index = 0;
        while(arr[index] === 0) {
            idx = arr.indexOf(arr[index]);
            arr.splice(idx, 1);
        }
        let s = '';
        for(let i=0;i<arr.length;i++) {
            s += arr[i];
        }
        arr.length = 0;
        let num = (parseInt(s)+1).toString();
        for(let i=0;i<num.length; i++) {
            arr.push(num[i]);
        }
        console.log('arr is', arr);
        return arr;
    }
}
add_one_to_number(arr);