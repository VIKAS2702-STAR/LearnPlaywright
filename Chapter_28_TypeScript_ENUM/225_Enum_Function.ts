enum SeverityLevels {
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High",
    CRITICAL = "Critical",
    BLOCKING = "Blocking"
}

console.log( SeverityLevels.HIGH );

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://prod.api.com"
}

console.log( Environment.Prod );