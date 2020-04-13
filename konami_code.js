const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

     document.body.addEventListener("keydown", (event) => {
      var index = 0
      const key = event.key
      var num = codes.length
      console.log('event', key);

      if (key === codes[index]) {

        if (index === num - 1) {
        alert('Congratulations!')

          index = 0;

        }
        console.log('index', index);
      index++
      return index

      } else  {
        index = 0;
      }

  })
}
