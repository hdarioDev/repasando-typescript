(() => {
  type UserID = string | boolean | number;

  let dynamicVar: UserID = "300";
  dynamicVar = true
  function helloUser(userId: UserID) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
  }

  //literal types
  // let shirtSize: "S" | "M" | "L" | "XL";
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;

  shirtSize = "M"; //CORRECTO
  shirtSize = "S"; //CORRECTO
  shirtSize = "qwrty"; //ERROR. No está en las opciones.
  shirtSize = "SS"; //ERROR. Letra de más.
  shirtSize = "m"; //ERROR. Está en minúscula.

})()
