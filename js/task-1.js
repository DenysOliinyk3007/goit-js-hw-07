const overall = document.querySelectorAll('.item')
const overallLength =overall.length

console.log('Number of categories: '+overallLength)

overall.forEach( (el) => {
    console.log('Category: '+el.querySelector('h2').textContent)
    console.log('Elements: '+el.querySelector('ul').querySelectorAll('li').length)
})