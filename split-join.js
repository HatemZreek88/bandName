const thingsWeDid = [
  "relocated",
  "bought a truck",
  "skateboarding",
  "swimming",
  "moved a lot of stuff",
  "traveled",
  "taking care of a baby",
  "nothing worth mentioning",
  "went to Budapest",
  "nothing",
  "a lot of sports",
  "what holiday",
  "played video games",
  "gardening",
  "jogging",
  "went to Palma",
];

// join
const joinedThings = thingsWeDid.join("\n");

console.log(joinedThings);

// split
const splitThings = joinedThings.split("\n");

console.log("splitThings before:\n", splitThings);

// Accumulator pattern
const arrayOfArrays = [];

for (let i = 0; i < splitThings.length; i++) {
  const splitElement = splitThings[i].split(" ");

  const capitalizedWord = [];

  for (let j = 0; j < splitElement.length; j++) {
    capitalizedWord.push(
      splitElement[j][0].toLocaleUpperCase() + splitElement[j].substring(1)
    );
  }

  // push each of these new arrays into an outer one
  arrayOfArrays.push(capitalizedWord);
}

console.log("arrayOfArrays after:\n", arrayOfArrays);
