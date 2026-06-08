/*Compare actual result with expected result and print test verdict.

Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials
*/

let expected = "Login Successful"
let actual = "Login Successful"
if ( expected === actual ) {
    console.log( "✅ Test Passed" )
} else {
    console.log( "❌ Test Failed" )
}

let expected1 = "Login Successful"
let actual1 = "Invalid Credentials"
if ( expected1 === actual1 ) {
    console.log( "✅ Test Passed" )
} else {
    console.log( "❌ Test Failed" )
}