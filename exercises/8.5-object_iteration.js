function swap(obj1) {
  const obj2 = {};
  for (const property in obj1) {
    obj2[obj1[property]] = property;
  }
  obj1 = obj2;
  return obj1;
}
