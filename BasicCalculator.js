/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    let stack = [];
    let num = 0;
    let sign = '+';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i]) && s[i] != ' ') {
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if (isNaN(s[i]) || i == s.length - 1) {
            if (sign == '+') {
                stack.push(num);
            } else if (sign == '-') {
                stack.push(-num);
            } else if (sign == '*') {
                stack.push(stack.pop() * num);
            } else if (sign == '/') {
                stack.push(parseInt(stack.pop() / num));
            }
            sign = s[i];
            num = 0;
        }
    }
    let ret = 0;
    while (stack.length) {
        ret += stack.pop();
    }
    return ret;   
};