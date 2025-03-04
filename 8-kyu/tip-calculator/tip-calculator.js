function calculateTip(amount, rating) {
    let lowerCaseRating = rating.toLowerCase();
​
    let tip;
​
    if (lowerCaseRating === "excellent") {
        tip = Math.ceil(amount * 0.20); 
    } else if (lowerCaseRating === "great") {
        tip = Math.ceil(amount * 0.15); 
    } else if (lowerCaseRating === "good") {
        tip = Math.ceil(amount * 0.10); 
    } else if (lowerCaseRating === "poor") {
        tip = Math.ceil(amount * 0.05); 
    } else if (lowerCaseRating === "terrible") {
        tip = 0;
    } else {
        return "Rating not recognised"; 
    }
​
    return tip;
}
​