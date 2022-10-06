/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let h = 0;
    for (let i = citations.length - 1; i >= 0; i--) {
        if (citations[i] >= citations.length - i) {
            h = citations.length - i;
        } else {
            break;
        }
    }
    return h;
};