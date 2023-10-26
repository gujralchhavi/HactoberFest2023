const fib = n => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

const countWays = s =>{
    return fib(s + 1);
}

var climbStairs = function(n) {
    let arr = [0,1,2,3];
    for(let i = 4; i <= n; i++){
        arr[i] = arr[ i - 1] + arr[i - 2];
    }
    return arr[n];
};

const climbStairs2 = n => {
    return resolve(n, []);
}

const resolve = (n, memory) => {
    if(memory[n]) return memory[n];
    if(n < 0) return 1;
    if(n == 0) return 1;
    let result = resolve(n - 1, memory) + resolve(n - 2, memory);
    memory[n] = result;
    return result;
}


