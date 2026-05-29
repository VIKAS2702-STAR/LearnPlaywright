// Template Literal

//let firstname = "Prrammod";
//let fullname = `Hi ${ firstname } Dutta`;
//console.log( fullname );


let firstname = "Viikkaass";
let fullname = `Hi ${ firstname } Prajapati`;
console.log( fullname );

//const env = "staging";
//const userId = 12345;
//const apiUrl = `https://api-${ env }.tekion.com/users/${ userId }`;
//console.log( apiUrl );

let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${ env }.tekion.com/users/${ userId }`;
console.log( apiUrl );

//Playwright

const rowIndex = 3;
const columnName = "email";
await page.locator( `[data-row="${ rowIndex }"][data-col="${ columnName }"]` ).click();

//Logs

const testName = "Login Test";
const status = "Failed";
const duration = 2.3;
console.log( `[${ status }]${ testName }completed in${ duration }s` );

//Screenshot

const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot( { path: `screenshot/${ testCase }_${ timestamp }.png` } );

const userName = "Vikas";
const role = "admin";
const playload = `{
"user": = "${ userName }",
"role": = "${ role }",
"timestamp": = "${ new Date().toISOString() }"
}`;
console.log( playload );
