// Bước 1: Sử dụng vòng lặp for (;;) in ra dãy số tự nhiên 0, 2, 4, 6, 8, 10
function geeks() {
  console.log("For (;;)");
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  // For of an array
  console.log("for...of");
  for (let i of ["Ha Noi", 20.32, 3000]) {
    console.log(i + " ");
  }
  // For in an object
  let obj = { name: "Peter", age: 25, salary: 3000 };
  console.log("for...in");
  for (let i in obj) {
    console.log(obj[i] + " ");
  }
}
geeks();
