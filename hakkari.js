//readline() returns a string
//print, console, log

let s = readline()

//s ins a string
//const ar = s.split(" ")

let [nr,nc] = s.split(' ').map(Number)

//nr and nc are both numebrs atp because of .map
//nr = Number(nr)
//nc = parseInt(nc)


let mines = []
for (let r = 0; r < nr; r++){
    for (let c = 0; c < nc; c++){      
        if(line[r][c] == '*') mines.push([r+1,c+1])
    }
}

print(mines.length)

//for each loop
for(const[r,c] of mines){
    print(r,c)
}