// function superbowlWin(array) {
//   let rings = array.find((array) => array.result === "W");
//   if (rings) {
//     return rings.year;
//   }
// }
// console.log(superbowlWin(record));

function superbowlWin(array) {
  let rings = array.find((array) => array.result === "W");
  if (rings) {
    return rings.year;
  }
}
console.log(superbowlWin(record));
