function check([f1, f2], [s1, s2]) {
  if (
    (f1 >= s1 && f1 <= s2) ||
    (f2 >= s1 && f2 <= s2) ||
    (f1 <= s1 && f2 >= s2) ||
    (s1 <= f1 && s2 >= f2)
  ) {
    console.log('Пересекаются');
  }
}

check([3, 4], [2, 2]);
