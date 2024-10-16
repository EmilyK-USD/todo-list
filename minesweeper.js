//nr, nc, nmines

const[r,c,mines] = readline().split(' ').map(Number)

//readline reads in a string of user input
//split splits a string into an array
//map applies a fuction to every element in the array and returns the resulting array
//r c and mines are now numebrs

//2D array of dots

let dots = []
for (let i = 0; i < r; i++){
    dots.push([]);
    for(let j = 0; j < c; j++){
        dots[i].push('.')
    }
}

//dots is now a 2d grid of only dots
//for loop over mine
for(let i = 0; i < mines; i++){
    let[x,y] = readline()
    x = Number(x) -1;
    y = Number(y) -1;
    dots[x][y] = '*'
}

for(let i = 0; i < r; i++){
    print(dots[i].join(''))
}