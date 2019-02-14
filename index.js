module.exports = (str, numberOfRainbows = 3) => {
  return `${`🌈`.repeat(numberOfRainbows)}${str}${`🌈`.repeat(numberOfRainbows)}`;
}