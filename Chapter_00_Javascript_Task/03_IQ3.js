/*
Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score*/

let impact_score = 0;
if ( impact_score === 9 || impact_score === 10 ) {
    console.log( "Critical (block release)" )
} else if ( impact_score === 8 || impact_score === 7 ) {
    console.log( "High)" )
}
else if ( impact_score <= 6 && impact_score >= 4 ) {
    console.log( "Medium" )
}
else if ( impact_score <= 3 && impact_score >= 1 ) {
    console.log( "Low" )
} else {
    console.log( "Invalid score" )
}
