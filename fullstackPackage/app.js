const moneyLimitMonth = [900, 900, 900, 900];
const budgetDay = {
  Personal: moneyLimitMonth[0] / 30,
  School: moneyLimitMonth[1] / 30,
  Food: moneyLimitMonth[2] / 30,
  Miscellaneous: moneyLimitMonth[3] / 30,
};
const balanceDay = [0, 0, 0, 0];

function updateBudgetDisplay() {
  document.getElementById("personalBudget").textContent = budgetDay.Personal.toFixed(2);
  document.getElementById("schoolBudget").textContent = budgetDay.School.toFixed(2);
  document.getElementById("foodBudget").textContent = budgetDay.Food.toFixed(2);
  document.getElementById("miscellaneousBudget").textContent = budgetDay.Miscellaneous.toFixed(2);
}

function spend() {
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive amount.");
    return;
  }
  
  balanceDay[Object.keys(budgetDay).indexOf(category)] += amount;
  const remainingBudget = budgetDay[category] - balanceDay[Object.keys(budgetDay).indexOf(category)];

  let resultMessage = "";

  if (remainingBudget >= 0) {
    resultMessage = `You spent $${amount.toFixed(2)} on ${category}. Congratulations, you're within your budget!`;
  } else {
    resultMessage = `You spent $${amount.toFixed(2)} on ${category}. You exceeded your budget by $${Math.abs(remainingBudget).toFixed(2)}.`;
  }

  document.getElementById("spendingResult").textContent = resultMessage;
  updateBudgetDisplay();
}

updateBudgetDisplay();
