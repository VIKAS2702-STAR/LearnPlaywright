let testScore = 85;

switch ( true ) {
    case ( testScore >= 95 ):
        console.log( "Outstanding--Top Performer" );
        break;
    case ( testScore >= 85 ):
        console.log( "Excellent -- Above Expectation" );
        break;
    case ( testScore >= 70 ):
        console.log( "Good -- Meets Expectation" );
        break;
    case ( testScore >= 60 ):
        console.log( "Need Improvement" );
        break;
    default:
        console.log( "Unsatisfactory -- Require Improvement" );

}