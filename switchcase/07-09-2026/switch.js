// ==========================================
// 🔀 JavaScript Switch-Case Examples
// ==========================================

// 1. Basic Switch Case: Day of the Week
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid Day";
}

console.log("Day:", dayName);

// 2. Case Grouping / Fall-Through Example
let day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday 💼");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend! 🎉");
        break;
    default:
        console.log("Invalid day input");
}

// 3. Range Checking using switch(true)
let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = "A+";
        break;
    case score >= 80:
        grade = "A";
        break;
    case score >= 70:
        grade = "B";
        break;
    default:
        grade = "F";
}

console.log("Grade:", grade);
