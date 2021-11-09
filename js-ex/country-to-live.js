//live in a country that speaks English, has less
//than 50 million people and is not an island

function countryToLiveIn(language, isIsland, population, country) {
  if (language === "English" && !isIsland && population < 50000000) {
    console.log(`You should live in ${country}.`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}
