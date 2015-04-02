/**
 * @param size Array cardinality
 * @param range Maximum value of array elements
 * @constructor
 */
function RandomStream(size, range) {
  var self = this;
  var step = 2;
  // Init the array with a simple seed
  self.data = d3.range(0, size * step, step);

  self.update = function () {
    self.data.shift();
    self.data.push(Math.floor(Math.random() * range));
    return self.data;
  }

}