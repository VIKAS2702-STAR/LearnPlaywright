import { BASE_URL as bul_util, formatTestName } from "../utils.js";
import { BASE_URL as bul_testutil, formatUpperCaseString } from "../testutils.js";

console.log( bul_util ); // Output: https://api.staging.com
console.log( bul_testutil ); // Output: https://app.vwo.com
console.log( formatUpperCaseString( "Login Page" ) ); // Output: TC_LOGIN PAGE