module.exports = function reverse (n) {
  let nStr = n.toString();
  let numberReverse;

  if (nStr.length === 2) {
    return numberReverse = parseInt(nStr[1] + nStr[0]);
  }

  if (nStr.length === 3) {
    return numberReverse = parseInt(nStr[2] + nStr[1] + nStr[0]);
  }

  if (nStr.length === 4 && nStr[0] === '-') {
    return numberReverse = parseInt(nStr[3] + nStr[2] + nStr[1]);
  }
};
