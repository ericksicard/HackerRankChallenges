/*
https://www.hackerrank.com/
Practice > Interview > Preparation Kit > Warm-up Challenges > Jumping on the Clouds
*/

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let vals = [...c];
    let jumps = 0;
    let i = 0;

    for ( i; i<vals.length; i++ ) {
        console.log(i, vals[i])
        if ( vals[i + 2] == 0 ) {
            jumps++;
            i += 1;
        }
        else if ( vals[i + 1] == 0 ) {
            jumps++;
        }
    }
    return jumps;
}
