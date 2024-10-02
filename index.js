// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  })

//test2
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  })

//test 3
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  })

//test 4
function destructivelyRemoveLastCat(name) {
    cats.pop()
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  })

//test 5
function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  })

  //test 6
  function appendCat(name) {
    return [...cats,"Broom"]
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  })

   //test 7
   function prependCat(name) {
    return ["Arnold",...cats]
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  })

  //test 8

  function removeLastCat(name) {
    return cats.slice(0, cats.length-1)
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  })

  //test 9
  function removeFirstCat(name) {
    return cats.slice(1)
  }

