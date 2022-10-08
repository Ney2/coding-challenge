/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let longestStringLength = 0,
        startOfWindow = 0,
        currentPosition = 0;
    let characterSet = new Set();
    while (currentPosition < s.length) {
        if (characterSet.has(s[currentPosition])) {
            characterSet.delete(s[startOfWindow++]);
        } else {
            characterSet.add(s[currentPosition++]);
            longestStringLength = Math.max(
                longestStringLength,
                characterSet.size
            );
        }
    }

    return longestStringLength;
};