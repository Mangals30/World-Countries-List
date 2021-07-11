const total = document.querySelector('.total')
const countriesGrid = document.querySelector('.countries-grid')
const message = document.querySelector('.message')
const status = document.querySelector('.status')
const inputWord = document.querySelector('.input-word')
const count = document.querySelector('.count')
const searchInput = document.querySelector('.search-input')
const searchIcon = document.querySelector('.search-icon')
const startingBtn = document.querySelector('.starting-word')
const includesBtn = document.querySelector('.search-word')
const sortBtn = document.querySelector('.sort')
let asc = 1
let sortClicked = false
let start = 0
let statusText = ''
let word = ''


total.textContent = countries.length

for (const country of countries) {
  createDiv(countries, country)
}
let obj = {
  countriesGrid,
  word,
  countries,
  message,
  status,
  statusText,
  inputWord,
  count,
  sortBtn,
  sortClicked,
  asc
}
searchInput.addEventListener('input', (e) => {
  obj.word = e.target.value
  obj.statusText = 'containing'
  searchWord(obj)
});
startingBtn.addEventListener('click', (e) => {
  e.preventDefault()
  start = 1
  createButtonStyle(startingBtn, includesBtn)
  obj.word = searchInput.value
  obj.statusText = 'starting with'
  searchWord(obj)
});
includesBtn.addEventListener('click', (e) => {
  e.preventDefault()
  start = 0
  createButtonStyle(includesBtn, startingBtn)
  obj.word = searchInput.value
  obj.statusText = 'containing'
  searchWord(obj)
});
searchIcon.addEventListener('click', (e) => {
  e.preventDefault()
  start = 0
  obj.word = searchInput.value
  obj.statusText = 'containing'
  searchWord(obj)
});
sortBtn.addEventListener('click', e => {
  e.preventDefault()
  if (start == 1) {
    obj.statusText = 'starting with'
  } else {
    obj.statusText = 'containing'
  }
  obj.word = searchInput.value
  obj.sortClicked = true
  searchWord(obj)
  if (obj.asc == 1) {
    obj.asc = 0
  } else {
    obj.asc = 1
  }
})