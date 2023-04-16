function add(strNumbers) {
  return (sum = strNumbers
    .split(",")
    .slice(0, 2)
    .reduce((p, c) => (p += +c), 0));
}

module.exports = add;
