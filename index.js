/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const valueBtn = document.getElementById("value-btn")
const resultEl = document.getElementById("result")
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

valueBtn.addEventListener("click", function(){

    const rawValue = inputEl.value.trim()
    const value = Number(rawValue)

    if (rawValue === "" || isNaN(value) || value < 0) {
        resultEl.innerHTML = `
            <div>
                <p style="color: #ff4d4d; font-weight: bold;">
                    Please enter a valid, positive number!
                </p>
            </div>`
        return 
    }

    const feet = (value * 3.281).toFixed(3)
    const meter = (value / 3.281).toFixed(3)
    const gallon = (value / 3.785).toFixed(3)
    const liter = (value * 3.785).toFixed(3)
    const pound = (value * 2.205).toFixed(3)
    const kilogram = (value / 2.205).toFixed(3)

    let string = `
    <div class="result-card">
        <h2>Length(Meter/Feet)</h2>
        <p>${value} meters = ${feet} feet | ${value} feet = ${meter} meters</p>
    </div>
    <div class="result-card">
        <h2>Volume(Liters/Gallons)</h2>
        <p>${value} liters = ${gallon} gallons | ${value} gallons = ${liter} liters</p>
    </div>
    <div class="result-card">
        <h2>Mass(Kilograms/Pounds)</h2>
        <p>${value} kilos = ${pound} pounds | ${value} pounds = ${kilogram} kilos</p>
    </div>`

    resultEl.innerHTML = string


})

if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLightMode = document.body.classList.contains('light-mode');
  
  if (isLightMode) {
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

