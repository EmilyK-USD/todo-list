const n = Number(readline()) //n is the number of costumes
//javascript we use an object to count frequency
const freq = {}

for(let i = 0; i < n; i++){
    const s = readline()
    if (s in freq) freq[s]++;
    else freq[s] = 1
}

//reduce. small n we can use the spread operator
//for(const [k,v] of Object.entries(freq)){
    //print('key',k,'val',v)
//}

const min = Math.min(...Object.values(freq))
let ar = []
for(const [name,val] of Object.entries(freq)){
    if (val == min) ar.push(name)
}
ar.sort()
print(ar.join('\n'))