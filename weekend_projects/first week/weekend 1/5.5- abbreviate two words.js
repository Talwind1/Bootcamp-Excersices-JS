function abbreviate(name) {
  let arrNames = name.split(" ");
  let abberName =
    arrNames[0][0].toUpperCase() + "." + arrNames[1][0].toUpperCase();
  return abberName;
}
