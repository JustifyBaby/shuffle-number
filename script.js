const $id = (id) => document.getElementById(id);

const l = [];
const shuffledList = [];

const incrementList = () => {
  const startInp = $id("start");
  const endInp = $id("end");
  const numStartInp = Number(startInp.value);
  const numEndInp = Number(endInp.value);

  for (let n = numStartInp; n <= numEndInp; n++) l.push(n);
};

const shuffle = () => {
  // result container
  while (l.length !== shuffledList.length) {
    const random = Math.floor(Math.random() * l.length);
    if (shuffledList.includes(l[random])) {
      // if include skip --> don't do anything, and go to head.
      continue;
    } else {
      // if passed add.
      shuffledList.push(l[random]);
    }
  }
};

const setArray = (where) => {
  // console.log(shuffledList);
  const current = $id("current");

  // console.log(current.innerText);

  if (current.innerText === "") {
    generate();
    return;
  }

  const index = parseInt(shuffledList.indexOf(parseInt(current.innerText)));
  // console.log(index);

  if (shuffledList[index + where]) {
    current.innerText = shuffledList[index + where];
  } else {
    return;
  }
};

$id("prev").addEventListener("click", () => {
  setArray(-1);
});

$id("next").addEventListener("click", () => {
  setArray(1);
});

const generate = () => {
  incrementList();
  shuffle();
  $id("current").innerText = shuffledList[0];
};
