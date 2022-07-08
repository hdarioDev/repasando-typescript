let price = 20 // difiere number para toda su vida
let nickName = 'jaun' // tipo string
  //const stock = 2000 // const

  //mismas variables en diferentes archivos necesitas scope
  (() => {
    let nickName = 'dario'
  })()
