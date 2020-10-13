let rollD6 = Js.Math.random_int(1, 6);

let genRolls = (lower, upper) => {
  let rec aux = (n, acc) => {
    if (n < lower) {
      acc
    } else {
      aux(n-1, list{n, ...acc})
    }
  }
  aux(upper, {});
}
