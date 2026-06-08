/*Problem: Given the percentage of test cases passed in a CI build, 
report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)*/

let test_pass_percent = 100
if ( test_pass_percent === 100 ) {
    console.log( "Green Build" )
} else if ( test_pass_percent >= 90 && test_pass_percent <= 99 ) {
    console.log( "Stable (investigate failures)" )
} else if ( test_pass_percent >= 70 && test_pass_percent <= 89 ) {
    console.log( "Unstable)" )
} else if ( test_pass_percent <= 70 ) {
    console.log( "Broken Build (block deployment)*" )
}
