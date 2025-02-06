let exp = prompt("Enter your experience");  
let js = prompt("Do you know JS? (yes/no)");  
let eSalary = prompt("Enter your expected salary");  
let city = prompt("Enter your city"); // Ensuring 'city' is defined before using it  

// Checking conditions and providing reasons
if (exp < 2) {  
    console.log("You're Fired! Reason: Not enough experience.");  
} else if (js.toLowerCase() !== "yes") {  
    console.log("You're Fired! Reason: Lack of JavaScript knowledge.");  
} else if (!city || city.toLowerCase() !== "karachi") {  
    console.log("You're Fired! Reason: You are not from Karachi.");  
} else if (eSalary >= 100000) {  
    console.log("You're Fired! Reason: Expected salary is too high.");  
} else {  
    console.log("You're Hired!");
}