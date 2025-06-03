document.getElementById('button').addEventListener('click', function() {
    let currentYear = new Date().getFullYear();
    let birthYearInput = document.getElementById('year');
    let birthYear = parseInt(birthYearInput.value);
    let resultDiv = document.getElementById('result')
    if (isNaN(birthYear)) {
        alert('Введите год')
        return 
    }
    
    if (birthYear > currentYear){
        alert(`Год должен быть меньше ${currentYear}`)
        return
    }
    
    let age = currentYear - birthYear
    resultDiv.textContent = `Ваш возраст: ${age}`;
});
