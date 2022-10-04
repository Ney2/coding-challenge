var isValid = function(s) {
    var array = [];
    var map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            array.push(s[i]);
        } else {
            var last = array.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
    if (array.length !== 0) {
        return false;
    }
    return true;
}