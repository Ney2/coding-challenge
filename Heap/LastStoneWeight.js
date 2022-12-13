/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const stonesQueue = new MaxPriorityQueue();
    for (let i = 0; i < stones.length; i++) {
      stonesQueue.enqueue(stones[i]);
    }
    while (stonesQueue.size() > 1) {
      let y = stonesQueue.dequeue().element;
      let x = stonesQueue.dequeue().element;
      y = y - x;
      stonesQueue.enqueue(y);
    }
    return stonesQueue.dequeue().element;
  };