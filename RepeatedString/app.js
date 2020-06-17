/*
https://www.hackerrank.com/
Practice > Interview > Preparation Kit > Warm-up Challenges > Repeated String
*/

function repeatedString(s, n) {
    //How many time the string can be repeated within limit n
    let repeats = Math.floor(n / s.length);
  //Count of a's because the repetions of the whole string
  let count = 0;
  //Number of string elements to complete the limit n
  let strInclusion = n % s.length;
  //Count of a's included because the remain to complete the limit n
  let countR = 0;
  
  for ( let i = 0; i < s.length; i++) {
      if( s[i] == 'a' ) {
        count++;
      if ( i < strInclusion ) {
          countR++;
      }
    }
  }
  return (count * repeats) + countR;
}