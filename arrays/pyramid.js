function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

function reversePyramid(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }

    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

pyramid(5);
console.log();
reversePyramid(5);
