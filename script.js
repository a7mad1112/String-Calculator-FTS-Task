function add(...numbers) {
  return numbers.reduce((p, c) => (p += c), 0);
}

module.exports = add;
