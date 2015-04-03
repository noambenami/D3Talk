/**
 * @param size Array cardinality
 * @param maxValue Maximum value of array elements
 * @constructor
 */
function SimpleStream(size, maxValue) {

  maxValue = maxValue || 1;

  var self    = this;
  self.data   = d3.range(size);

  self.update = function () {
    self.data.shift();
    self.data.push(Math.floor(Math.random() * maxValue));
    return self.data;
  };

}