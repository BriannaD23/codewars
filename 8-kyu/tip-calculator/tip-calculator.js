function calculateTip(amount, rating) {
  let tips = {
    'terrible' : 0,
      'poor': .05,
       'good' : .1,
        'great':.15,
        'excellent':.2,
  }
​
  rating = rating.toLowerCase();
​
  return rating in tips? Math.ceil(amount * tips[rating]) : "Rating not recognised"
​
​
}