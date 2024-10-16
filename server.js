
const [n,t] = readline().split(' ').map(Number)
const nums = readline().split(' ').map(Number)
let tot = 0
for(var i = 0; i < n; i++){
    tot+=nums[i]
    if(tot>t) break;
}
print(i)