const n = Number(readline())
const stack = []
//push all numbers onto the stack
for (let i = 0; i < n; i++){
    stack.push(readline())
}
//print(stack)
//pop all numbers from the stack
while(stack.length > 0){
    print(stack.pop())
}