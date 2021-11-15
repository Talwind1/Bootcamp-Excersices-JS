const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

function getName(arr) {
  const names = [];
  arr.forEach(function (person) {
    names.push(person.name);
  });
  return names;
}
console.log(getName(data));

function ageFilter(arr) {
  const people = [];
  arr.forEach(function (person) {
    let birthday = person.birthday;
    let yearOfBirth = birthday.slice(birthday.length - 4);
    if (yearOfBirth < 1990) people.push(person);
  });
  return people;
}

function foodFreq(arr){
    const foodFreq={};
    arr.forEach(function(person){
    person.favoriteFoods.forEach(function(itemFoods){
    itemFoods.forEach(function(food) {
        if(!foodFreq[food]) foodFreq[food]=1;
    else{
        foodFreq[food]++;
    }})})
    return foodFreq;
}
}
