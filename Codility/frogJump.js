function solution(X, Y, D) {
  if (X === Y) {
    return 0;
  } else if (D >= (Y - X)) {
    return 1;
  } else {
    var jumps = parseInt((Y - X) / D);
    jumps += ((Y - X) % D > 0) ? 1 : 0;

    return jumps;
  }
}