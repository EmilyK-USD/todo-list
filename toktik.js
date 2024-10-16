const n = Number(readline())
const toks = {}

for (let i = 0; i <n; i++){
    let [name,score] = readline().split(' ')
    score = Number(score)
    if(name in toks) toks[name]+=score
    else toks[name]=score
}
const max = Math.max(...Object.entries(toks))

for(const key of Object.keys(toks)){
    if(toks[key] == max){
        print(key);
        break;
    }
}