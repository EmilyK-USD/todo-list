const [n,y] = readline().split(' ').map(Number)



// const mario = new Set()
// for(let i = 0; i < y; i++){
//     mario.add(Number(readline()))
// }

const set = new Set([...Array(y)].map(_=>Number(readline())))

for(let i = 0; i < n; i++){
    if(!set.has(i)){
        print(i)
    }
}
print(`Mario got ${set.size} of the dangerous obstacles.`)