const matrix = [
  [1,1,1,1,1],
  [1,1,1,1,0],
  [1,1,1,1,0],
  [1,1,1,1,0],
  [1,1,1,1,1]
]

function largestSquare( mtx ) {
  const cache = [...mtx]
  let result = 0;

  for ( let i = 0; i < mtx.length; i++ ) {
    for ( let j = 0; j < mtx[i].length; j++ ) {
      if ( mtx[i][j] > 0 ) {
        if ( i == 0 || j == 0 ) cache[i][j] = mtx[i][j]
        else cache[i][j] = 1 + Math.min( cache[i][j-1], cache[i-1][j], cache[i-1][j-1])
      }
      if ( cache[i][j] > result ) result = cache[i][j]
    }
  }

  return result;
} 

console.log( largestSquare(matrix) )
