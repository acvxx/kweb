const factorial = n => {
    let num = 1;
    for(let i = n; i > 1; i--){
        num *= i;
    }
    return num
}

const permutation = (n, r) => {
    const x = factorial(n);
    const y = factorial(n-r);
    return x/y;
};

const combination = (n, r) => {
    const x = permutation(n,r);
    const y = factorial(r);
    return x/y;
};

const multiPermutation = (n, r) => (n ** r);

const multiCombination = (n, r) => {
    return combination(n+r-1, r);
};

module.exports = {
    factorial,
    permutation,
    combination,
    multiPermutation,
    multiCombination,
};
