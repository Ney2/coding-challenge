/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if (intervals.length == 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    var merged = [];
    for (var i = 0; i < intervals.length; i++) {
        var currentInterval = intervals[i];
        var lastInterval = merged[merged.length - 1];
        if (lastInterval && lastInterval[1] >= currentInterval[0]) {
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }
    return merged; 
};