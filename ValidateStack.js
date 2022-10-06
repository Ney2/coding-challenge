/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0;
    for (let j = 0; j < pushed.length; j++) {
        stack.push(pushed[j]);
        while (stack.length && stack[stack.length - 1] == popped[i]) {
            stack.pop();
            i++;
        }
    }
    return stack.length == 0;  
};