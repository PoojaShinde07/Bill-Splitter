

const splitting = () => {
    let total = parseInt(document.querySelector('#total').value);
    let people = parseInt(document.querySelector('#people').value);
    let tipPercent = document.querySelector('#tipPercent');
    let tipCustom = document.querySelector('#tipCustom');

        if (tipPercent.value !== "") {  
          let calcPercent = parseInt(tipPercent.value)
          const totalWithTip = total + (calcPercent*total)/100;
          document.querySelector('#perPerson').innerHTML = (totalWithTip / people).toFixed(2);
        }
        else if (tipCustom.value !== "") {  
            let calcPercent = parseInt(tipCustom.value)
            const totalWithTip = (calcPercent +total);
            document.querySelector('#perPerson').innerHTML = (totalWithTip / people).toFixed(2);
        }  
        else {
          const result = total / people;
          document.querySelector('#perPerson').innerHTML = result.toFixed(2);
        }
   }
  
  document.querySelector('#addTip').addEventListener('click', (e) => {
    e.preventDefault();
    showTipInput();
  })
  
  const showTipInput = () => {
    const tipBtns = document.querySelector('#tipInput')
    if (tipBtns.style.display === "block") {
      tipBtns.style.display = "none"
    } else {
      tipBtns.style.display = "block"
    }
  }
  
  
  const splitBtn = document.querySelector('#splitBtn')
    splitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      splitting();
  })
  
  document.querySelector('#resetBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').reset();
    document.querySelector('#perPerson').innerHTML = "0"
  })
  