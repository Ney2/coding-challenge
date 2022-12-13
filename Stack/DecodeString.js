/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
   for (let i = 0; i < s.length; i++) {
     if (s[i] === ']') {
       let pattern = ''
       let c = stack.pop()
       while (c !== '[') {
         pattern = c + pattern
         c = stack.pop()
       }
       let numStr = ''
       let num = stack.pop()
       while (/[0-9]/.test(num)) {
         numStr = num + numStr
         num = stack.pop()
       }
       stack.push(num)
       let str = ''
       for (let j = 0; j < parseInt(numStr, 10); j++) {
         str += pattern
       }
       stack.push(str)
     } else {
       stack.push(s[i])
     }
   }
   return stack.join('') 
 };