//1.lookup window on page load event handler
//2.add a click event handler to the search button
//3.get the search term the user typed
//4.call/fetch from the GIPHY API
/*5.once the results are back, 
a)console log out the results and try to figure out the data points that we need 
b)loop over the results 
c) display the results/Update the UI-->*/

window.addEventListener('load', (event) => {
    console.log('page is fully loaded')
    console.log('write the code here')

    const displayData =  (result)  => {
        console.log('the data from the giphy api is', data)

    }

    const fetchDataFromGiphy = async (searchText) =>  {
        let response = await fetch('https://api.giphy.com/v1/gifs/search?q=$(searchText)&api_key=qINP93rA3n2zNbEOt8mbmfJwLOM9jh4P')
        let data = await response.json()
        console.log(data)

        displayData(result)
    }

    document.getElementById('search-button').addEventListener('click', () => {
        console.log('button has been clicked!')

        let searchText = document.getElementById('search-text').value 
        console.log('the search text is', searchText)
        document.getElementById('search-text').value = ""

        fetchDataFromGiphy(searchText)
    })
})

