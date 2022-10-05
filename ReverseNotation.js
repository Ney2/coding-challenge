/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    var stack = [];
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if (tokens[i] === "-") {
            var a = stack.pop();
            var b = stack.pop();
            stack.push(b - a);
        } else if (tokens[i] === "*") {
            stack.push(stack.pop() * stack.pop());
        } else if (tokens[i] === "/") {
            var a = stack.pop();
            var b = stack.pop();
            stack.push(parseInt(b / a));
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};