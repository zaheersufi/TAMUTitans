const balanceDay = [0, 0, 0, 0];
let remPersonalBudget;
let remSchoolBudget;
let remFoodBudget;
let remMiscellaneousBudget;
let personal_in;
let school_in;
let food_in;
let mis_in;
let budgetDay;
let remainingBalance;
const data = {};

function updateBudgetInfo() {
  // Get money from inputs from the budget info and spent
  personal_in = parseFloat(document.getElementById("personal_in").value);
  school_in = parseFloat(document.getElementById("school_in").value);
  food_in = parseFloat(document.getElementById("food_in").value);
  mis_in = parseFloat(document.getElementById("mis_in").value);
  var moneyLimit = [personal_in, school_in, food_in, mis_in] 

  // If there is no input set value to 0
  for (let i = 0; i < 4; i++)
  {
    if (isNaN(moneyLimit[i]))
    {
      moneyLimit[i] = 0;
    }
  }

  // Find the budget per day
  budgetDay = {
    Personal: moneyLimit[0] / 30,
    School: moneyLimit[1] / 30,
    Food: moneyLimit[2] / 30,
    Miscellaneous: moneyLimit[3] / 30,
  };

  // Create variables
  let totalBalance = budgetDay.Personal + budgetDay.School + budgetDay.Food + budgetDay.Miscellaneous;
  remainingBalance = totalBalance; //money starting off with

  // Remaining budget
  remPersonalBudget = budgetDay.Personal;
  remSchoolBudget = budgetDay.School;
  remFoodBudget = budgetDay.Food;
  remMiscellaneousBudget = budgetDay.Miscellaneous;

  // Put values for remaining budget
  document.getElementById("remPersonalBudget").textContent = remPersonalBudget.toFixed(2);
  document.getElementById("remSchoolBudget").textContent = remSchoolBudget.toFixed(2);
  document.getElementById("remFoodBudget").textContent = remFoodBudget.toFixed(2);
  document.getElementById("remMiscellaneousBudget").textContent = remMiscellaneousBudget.toFixed(2);
  document.getElementById("remainingBalance").textContent = remainingBalance.toFixed(2);
}

function spend() {
    const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const date = document.getElementById("date").value;
  
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive amount.");
    return;
  }
  
  balanceDay[Object.keys(budgetDay).indexOf(category)] += amount;
  remainingBalance -= amount;

  const dates = Object.keys(data);
  const amounts = Object.values(data);


if(category === 'Personal')
  {
    remPersonalBudget -= amount;
    personal_in -= amount;
    if(date in data) {
      data[date][0] += amount;
    }
    else {
      
      data[date] = [amount, 0, 0, 0]
    }
  }
  else if(category === "School")
  {
    remSchoolBudget -= amount;
    if(date in data) {
      data[date][1] += amount;
    }
    else {
      data[date] = [0, amount, 0, 0]
    }
  }
  else if(category === "Food")
  {
    remFoodBudget -= amount;
    if(date in data) {
      data[date][2] += amount;
    }
    else {
      data[date] = [0, 0, amount, 0]
    }
  }
  else if(category === "Miscellaneous")
  {
    remMiscellaneousBudget -= amount;
    if(date in data) {
      data[date][3] += amount;
    }
    else {
      data[date] = [0, 0, 0, amount]
    }
  }
  const remainingBudget = budgetDay[category] - balanceDay[Object.keys(budgetDay).indexOf(category)];

  let resultMessage = "";

  if (remainingBudget >= 0) {
    resultMessage = `You spent $${amount.toFixed(2)} on ${category}. Congratulations, you're within your budget!`;
  } else {
    resultMessage = `You spent $${amount.toFixed(2)} on ${category}. You exceeded your budget by $${Math.abs(remainingBudget).toFixed(2)}.`;
  }

  document.getElementById("spendingResult").textContent = resultMessage;
  
  // Put values for remaining budget
  document.getElementById("remPersonalBudget").textContent = remPersonalBudget.toFixed(2);
  document.getElementById("remSchoolBudget").textContent = remSchoolBudget.toFixed(2);
  document.getElementById("remFoodBudget").textContent = remFoodBudget.toFixed(2);
  document.getElementById("remMiscellaneousBudget").textContent = remMiscellaneousBudget.toFixed(2);
  document.getElementById("remainingBalance").textContent = remainingBalance.toFixed(2);
}