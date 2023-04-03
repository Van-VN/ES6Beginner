const inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 },
];

console.log(
  inventory
    .filter((item) => item.type === "machine")
    .reduce((pre, cur) => {
      return pre + cur.value;
    }, 0)
);
