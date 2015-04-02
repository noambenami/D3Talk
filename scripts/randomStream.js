/**
 * @param size Array cardinality
 * @param maxValue Maximum value of array elements
 * @constructor
 */
function RandomStream(size, maxValue) {

  maxValue = maxValue || 1;

  var self    = this;

  self.random = d3.random.normal(0, maxValue);
  self.data   = d3.range(size).map(self.random);

  self.update = function () {
    self.data.shift();
    self.data.push(self.random());
    return self.data;
  };

}