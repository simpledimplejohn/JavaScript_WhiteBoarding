const Array = (n) => {
  const matrix = []
  for (let i = 0; i < n; i++) {
    matrix.push([]) //push an empty array
    
    for (let j = 0; j < n; j++) {
      matrix[i].push(0) //note we are pushing i not j
    }
  }
  console.log(matrix)
}

Array(1)