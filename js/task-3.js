const inp = document.querySelector('#name-input')
const out = document.querySelector('#name-output')

inp.addEventListener("input", (event) => {
    const value = event.currentTarget.value.trim()

    if (value !== ''){
        out.textContent = event.currentTarget.value;
    }
    else {out.textContent = 'Anonymous'}
  });