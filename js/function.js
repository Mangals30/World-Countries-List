const createButtonStyle = (primary, secondary) => {
  primary.style.background = '#581cb8'
  secondary.style.background = '#895be6'
}

const sortCountries = (sortBtn, asc, resultCountries) => {
  if (asc == 1) {
    sortBtn.innerHTML = '<i class="fas fa-sort-alpha-down"></i>'
    sortBtn.style.background = '#895be6'
    resultCountries.sort()
  }
  if (asc == 0) {
    sortBtn.innerHTML = '<i class="fas fa-sort-alpha-up"></i>'
    sortBtn.style.background = '#581cb8'
    resultCountries.sort()
    resultCountries.reverse()
  }
  return resultCountries
}

const getResultCountries = (statusText, countries, word, sortBtn, sortClicked, asc) => {
  let resultCountries = []
  if (statusText == 'containing') {
    resultCountries = countries.filter(country => country.toLowerCase().includes(word.toLowerCase()))
  } else {
    resultCountries = countries.filter(country => country.toLowerCase().startsWith(word.toLowerCase()))
  }
  if (sortClicked) {
    resultCountries = sortCountries(sortBtn, asc, resultCountries)
  }
  return resultCountries
}

const getMessage = (resultCountries, message, status, inputWord, count, statusText, word) => {
  message.style.display = 'block'
  status.textContent = statusText
  inputWord.textContent = word
  count.textContent = resultCountries.length
}
const createDivStyle = (resultCountries, countriesGrid) => {
  if (resultCountries.length < 5) {
    /*countriesGrid.style.display = 'flex'
    countriesGrid.style.justifyContent = 'center'
    countriesGrid.style.alignItems = 'center'
    countryDiv.style.width = 'fit-content'
    countryDiv.style.height = 'fit-content'*/
    //countriesGrid.style.display = 'grid'
    countriesGrid.style.gridTemplateColumns = `repeat(${resultCountries.length},1fr)`
  } else {
    countriesGrid.style.display = 'grid'
  }
}
const createDiv = (resultCountries, country) => {
  const countryDiv = document.createElement('div')
  countryDiv.className = 'country'
  const para = document.createElement('h3')
  para.textContent = country
  countryDiv.appendChild(para)
  countriesGrid.appendChild(countryDiv)
  createDivStyle(resultCountries, countriesGrid)
}

const searchWord = (obj) => {
  const {
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
  } = obj
  countriesGrid.innerHTML = ''
  let resultCountries = getResultCountries(statusText, countries, word, sortBtn, sortClicked, asc)
  if (word.trim().length == 0) {
    message.style.display = 'none'
  } else {
    getMessage(resultCountries, message, status, inputWord, count, statusText, word)
  }


  for (const country of resultCountries) {
    createDiv(resultCountries, country)
  }
}