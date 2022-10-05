/**
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ")") {
            var temp = "";
            while (stack[stack.length - 1] !== "(") {
                temp += stack.pop();
            }
            stack.pop();
            for (var j = 0; j < temp.length; j++) {
                stack.push(temp[j]);
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join(""); 
};