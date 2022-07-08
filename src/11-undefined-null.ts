(() => {
  //TypeScript
  let myVar = null; //Tipo any
  let otherVar = undefined; //Tipo any

  let myNull: null = null; // Tipo null
  let myUndefined: undefined = undefined; //Tipo undefined

  //usos de la vida real
  let myNumber: number | null = null;
  myNumber = 50;

  let myString: string | undefined = undefined;
  myString = "Hola TypeScript";

})()
