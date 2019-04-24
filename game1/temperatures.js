const n = parseInt(readline()); // the number of temperatures to analyse
var result = 5526;
if (n==0) result=0;
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);
    if ((Math.abs(t)< Math.abs(result)) || ((Math.abs(t)== Math.abs(result))  && (t>result)) ){
        result = t;
    }
}
console.log(result);