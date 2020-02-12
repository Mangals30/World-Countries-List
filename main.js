/*Declaration of global variables*/ 
const countriesDislay = document.querySelector('.coutries-container')
const noOfCount = document.querySelector('.no-of-count')
noOfCount.textContent = countries.length
const totalCountries = document.querySelector('#number')
const divError = document.querySelector('.error-message')
const inputSearch = document.querySelector('.country-search')
const searchMessage = document.querySelector('.search-message')
const searchButtons = document.querySelector('.search-buttons')
const startButton = document.querySelector('.starts-with')
const includeButton = document.querySelector('.includes')
let startClicked = 0
let includeClicked = 0
let total = 0
let sortClicked = 0
 /*Function to display the countries*/ 
const displayCountries = (country) =>{
    divError.textContent = ''
    const countryDiv = document.createElement('div')
    countryDiv.setAttribute('class','countryDiv')
    const name = document.createElement('p')
    name.setAttribute('class','country-name')
    name.textContent = country
    countryDiv.appendChild(name)
    countriesDislay.appendChild(countryDiv)
    total++
    totalCountries.textContent = total
}

/*Event listeners for the buttons*/ 
searchButtons.addEventListener('click',event => {
   const searchValue = inputSearch.value
   const value = event.target.className
    validateSearch(searchValue,value)
})

/*Function to display the error message*/ 
const errorMessage = () => {
    countriesDislay.textContent = ''
    divError.textContent = ''
    totalCountries.textContent = total
    let errorMessage = '*Please enter only alphabets'
    divError.textContent = errorMessage
    divError.style.color = 'red'
    
}

/*Function to display the countries starting with the search input*/ 
const displayStartCountries = searchValue => {
    countriesDislay.textContent = ''
    const startCountries = []
    const allCountries = [...countries]
    for(const country of allCountries) {
        if(country.toLowerCase().startsWith(searchValue.toLowerCase())) {
            startCountries.push(country)
        }
    }
    return startCountries
}

/*Function to display the countries which includes the search input*/ 
const displayIncludeCountries = searchValue => {
    countriesDislay.textContent = ''
    const startCountries = []
    const allCountries = [...countries]
    for(const country of allCountries) {
        if(country.toLowerCase().includes(searchValue.toLowerCase())) {
            startCountries.push(country)
        }
    }
    return startCountries
}

/*Function to sort the countries*/ 
const sortCountries = searchValue => {
    countriesDislay.textContent = ''
    const allCountries = [...countries]
    sortClicked++
    if(startClicked == 1) {
        const searchCountries = displayStartCountries(searchValue)
        if(sortClicked % 2 == 0) {
            searchCountries.sort()
        }
        else {
            searchCountries.sort().reverse()
        }
        for(const country of searchCountries) {
            displayCountries(country)
        }
    }
   else if(includeClicked == 1) {
        const searchCountries = displayIncludeCountries(searchValue)
        if(sortClicked % 2 == 0) {
            searchCountries.sort()
        }
        else {
            searchCountries.sort().reverse()
        }
        for(const country of searchCountries) {
            displayCountries(country)
        }

    }
    else {
        if(sortClicked % 2 == 0) {
            allCountries.sort()
        }
        else {
            console.log('I am called')
            allCountries.sort().reverse()
        }
        for(const country of allCountries) {
            displayCountries(country)
        }

    }
}

/*Function to validate the search*/
validateSearch = (searchValue,value) => {
    total = 0
    
    if (!searchValue.match(/^[A-Za-z\s]*$/)) {
        total = 0
        divError.style.display = 'block'
        errorMessage()
    }
    else {
        searchMessage.style.display = 'block'
        if(value == 'starts-with') {
            startButton.style.backgroundColor = 'green'
            includeButton.style.backgroundColor = '#7E63BE'
            startClicked = 1
            includeClicked = 0
            const searchCountries=displayStartCountries(searchValue)
            if(searchCountries.length == 0) {
                total =0
            }
            for(const country of searchCountries) {
                displayCountries(country)
            }
        }
        if(value == 'includes') {
            startButton.style.backgroundColor = '#7E63BE'
            includeButton.style.backgroundColor = 'green'
            startClicked = 0
            includeClicked = 1
            const searchCountries = displayIncludeCountries(searchValue)
            if(searchCountries.length == 0) {
                total =0
            }
            for(const country of searchCountries) {
                displayCountries(country)
            }

        }
        if((value == 'sort')||(value == 'fas fa-exchange-alt')) {
            sortCountries(searchValue)
        }
    }
    
   
}
 
/*Event listener for the input field*/
inputSearch.addEventListener('keyup',event => {
    total = 0
    searchMessage.style.display = 'block'
    if(inputSearch.value.length == 0) {
        const allCountries = [...countries]
        searchMessage.style.display = 'none'
        for(const country of allCountries) {
            displayCountries(country)
        }
    }
    if(startClicked == 1) {
        const searchCountries = displayStartCountries(inputSearch.value)
        if(searchCountries.length == 0) {
            total =0
        }
        for(const country of searchCountries) {
            displayCountries(country)
        }
    }
    if(includeClicked == 1) {
        const searchCountries = displayIncludeCountries(inputSearch.value)
        if(searchCountries.length == 0) {
            total =0
        }
        for(const country of searchCountries) {
            displayCountries(country)
        }
    }
    if((startClicked == 0) && (includeClicked ==0)) {
        searchMessage.style.display = 'none'
    }
})
    /* Home Page Loading */
countriesDislay.textContent = ''    
const allCountries = [...countries]
for (const country of allCountries) {  
  displayCountries(country)
}


