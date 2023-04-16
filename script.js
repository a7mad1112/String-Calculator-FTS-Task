function add(...args) {
  const negative = args.filter(n => n < 0);
  if (negative.length > 0) {
    throw new Error(`negatives not allowed: ${negative.join(" ")}`);
  }
  return args.reduce((acc, n) => acc + n, 0);
}

module.exports = add;