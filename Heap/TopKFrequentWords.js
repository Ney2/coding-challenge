/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    return Array.from(
    words.reduce((acc, el) => acc.set(el, (acc.get(el) || 0) + 1), new Map())
  )
    .sort(
      ([wordA, occurenceA], [wordB, occurenceB]) =>
        occurenceB - occurenceA || wordA.localeCompare(wordB)
    )
    .slice(0, k)
    .map(([word]) => word)
};