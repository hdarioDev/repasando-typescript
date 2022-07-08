(() => {
  let userId: string | number;

  userId = 10;
  userId = "10";

  function helloUser(id: string | number) {
    if (typeof id === "string") {
      console.log(id.toLowerCase())
    }
    console.log(`Hola usuario con el número de id ${id}`);
  }
  helloUser(10)

})()
