(() => {
  let prices = [1, 2, 3, 4, 5, 3, 2, 1, 2,]
  prices.push(10)//only numbres

  let newsValues = [12, 5, 34, 'hola', true]
  newsValues.push(false)

  let mixed: (number | string | boolean)[] = ['hola']
  mixed.push(true)
  mixed.push(22)

})()
