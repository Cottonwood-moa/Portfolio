function tuto() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("first");
      resolve();
    }, 1000);
  });
}
function tuto2() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("second");
      resolve();
    }, 1000);
  });
}
const res = async () => {
  await tuto();
  await tuto2();
};

res();
