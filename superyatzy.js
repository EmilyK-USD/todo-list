const freq = [0,0,0,0,0,0,0]
//const freq = {}
const [n,m] = readline().split(' ').map(Number)
//n = 5, m = 3
// const nums = [...Array(n)].map(_=>Number(readline()));

for(let i = 0; i < n; i++){
    let num = Number(readline())
    freq[num]++;
    if(freq[num] > freq[maxId])maxId = num;

}
if(freq[maxId]+m>=n) print('Ja')
else print('Nej')
