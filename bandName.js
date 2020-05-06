const bandName = (clothesColor, lastFood) => {
  const firstInitial = clothesColor[0];
  const secondInitial = lastFood[0];
  const firstInitialUpperCase = firstInitial.toUpperCase();
  const secondInitialUpperCase = secondInitial.toUpperCase();

  const bandName = `The ${firstInitialUpperCase}${clothesColor.substring(
    1
  )} ${secondInitialUpperCase}${lastFood.substring(1)}!`;

  return bandName;
};
console.log(bandName("white", "chili con Carne"));
console.log(bandName("pink", "bread and Butter"));
console.log(bandName("blue", "scramble Eggs"));
