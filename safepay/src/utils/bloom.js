const { BloomFilter } = require("bloom-filters");

/*
  capacity: how many keys you expect in window
  errorRate: false positive probability
*/

const capacity = 10000;
const errorRate = 0.01;

// Correct formula to compute hash functions
const numHashes = Math.ceil(Math.log(2) * (capacity / Math.log(1 / errorRate)));
const size = Math.ceil((capacity * Math.log(errorRate)) / Math.log(1 / Math.pow(2, Math.log(2))));

const filter = new BloomFilter(size, numHashes);

module.exports = filter;
