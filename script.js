function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function solveA(A, B){
    return A+B;
}
function solveB(A, B){
    return A-B;
}
function solveC(A, B){
    return A*B;
}

function solveCs(A, B){
    return A/B;
}

function solveD(A, B){
    const sqrtA = Math.sqrt(A);
    const roundedSqrtA = Math.round(sqrtA);
    const closestSquare = roundedSqrtA * roundedSqrtA;
    return closestSquare;
}

function solveE(A, B){
    if(isPrime(B)) return B;

    let lower = B - 1;
    let upper = B + 1;

    while (true) {
        if (isPrime(lower) && isPrime(upper)) return lower + ", " + upper;
        if (isPrime(lower)) return lower;
        if (isPrime(upper)) return upper;
        lower--;
        upper++;
    }
}

function solveF(A, B){
    while (B !== 0) {
        const temp = B;
        B = A % B;
        A = temp;
    }
    return A;
}

function solveG(A, B){
    const gcf = solveF(A, B);
    return (A * B) / gcf;
}

function solveGy(A, B){
    return Math.round(B/A*100);
}

function solveH(A, B){
    return Math.round(A/B*100);
}

function solveI(A, B){
    const C = 180 - (A + B);
    if (C <= 0) return "Nincs ilyen háromszög";
    return C;
}

function solveJ(A, B){
    if(A >= 180 || B >= 180) return "Nincs ilyen trapéz";
    return (180-A) + ", " + (180-B);
}

function solveK(A, B){
    return "K = " + 2*(A+B) + " cm , T = " + A*B + " cm2";
}

function solveL(A, B){
    return A*B/2;
}

function solveM(A, B){
    return 2*A + 3*B;
}

function solveN(A, B){
    return 0.5*A - 2.5*B;
}

function solveNy(A, B){
    const PI = 3.14;
    return "K = " + 2*A*PI + " cm, T = " + A*A*PI + " cm2 feltételezve, hogy (Pi = 3.14)";
}

function solveO(A, B){
    return "A = " + 6*B*B + " cm2, V = " + B*B*B + " cm3";
}

function solveP(A, B){
    const nums = [2, 3, 4, 5, 6, 9, 10, 25, 100];
    const num = A * Math.pow(10, B.toString().length) + B;
    const divisors = [];
    for (let n in nums){
        if (num % n == 0) divisors.push(n);
    }
    if(divisors.length == 0) return "Egyikkel sem osztható";
    return divisors.join(', ');
}

function solveQ(A, B){
    return B*100 - A*10;
}

function solveR(A, B){
    return B*24*60 - A*60;
}

function solveS(A, B){
    return A/1000 + B/100;
}

function solveSz(A, B){
    return B*10000 - A*100;
}

function solveT(A, B){
    return "A = " + (2*A*A + 4*A*B) + " cm2, V = " + A*A*B + " cm3";
}

function solveTy(A, B){
    const divisors = [];
    for (let i = 1; i <= A; i++){
        if ( A % i === 0) {
            divisors.push(i);
        }
    }
    return divisors.join(", ");
}

function solveU(A, B){
    const primeDivisors = [];
    for (let i = 0; i*i <= B; i++){
        if (B % i === 0 && isPrime(i)){
            primeDivisors.push(i);
        }
    }
    if (isPrime(B)) {
        primeDivisors.push(B);
    }
    return primeDivisors.join(', ');
}

function solveX(A, B){
    const gcf = solveF(A, B);
    return A/gcf + "/" + B/gcf;
}

function solveY(A, B){
    return A/B;
}

function solveV(A, B){
    const l = B.toString().length;
    const pow10 = Math.pow(10, l);
    return solveX(A*pow10+B, pow10);
}

function solveW(A, B){
    return (A+B)/2;
}

function solveZ(A, B){
    return 112 / (A+B) + " (Ne feledd az ellenőrzést!)";
}

function solveZs(A, B){
    return "f(" + B + ") = " + (3*B-8);
}

const letters = ['a', 'b', 'c', 'cs', 'd', 'e', 'f', 'g', 'gy', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ny', 'o', 'p', 'q', 'r', 's', 'sz', 't', 'ty', 'u', 'x', 'y', 'v', 'w', 'z', 'zs']
const functions = [solveA, solveB, solveC, solveCs, solveD, solveE, solveF, solveG, solveGy, solveH, solveI, solveJ, solveK, solveL, solveM, solveN, solveNy, solveO, solveP, solveQ, solveR, solveS, solveSz, solveT, solveTy, solveU, solveX, solveY, solveV, solveW, solveZ, solveZs];

function solve() {
    // Get the values from the input fields
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);

    let solution = "";

    for (let i = 0; i < functions.length; i++){
        solution += letters[i] + ") " + functions[i](num1, num2) + "\n";
    }


    // Display the result
    document.getElementById('result').innerText = solution;
}
