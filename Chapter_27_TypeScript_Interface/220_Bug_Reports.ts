interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduct: string[];
}

const bugReport1: BugReport = {
    id: 1,
    title: "TTACart",
    severity: "High",
    stepsToReproduct: ["Step1", "Step2"]
}

const bugReport2: BugReport = {
    id: 2,
    title: "Amazon",
    severity: "Medium",
    stepsToReproduct: ["Step1", "Step2"]
}

const bugReport3: BugReport = {
    id: 3,
    title: "Flipcart",
    severity: "Low",
    stepsToReproduct: ["Step1", "Step2"]
}