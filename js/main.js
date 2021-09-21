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
        console.log('the results from the giphy api is', result)

    }

    const fetchDataFromGiphy = async (searchText) =>  {
        let response = await fetch (`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=qINP93rA3n2zNbEOt8mbmfJwLOM9jh4P`)
        let result = await response.json()//decoding response as json
        //result is one big object, so everything inside result is like any other object key
        console.log(result)
        console.log('level 1 result.data is', result.data)

        let htmlString = '';
        let img = document.querySelector('img')

        for(let imageResult of result.data){
            console.log('imageResult  is', imageResult)
            console.log('imageId is', imageResult.id)
            console.log('imageTitle is', imageResult.title)
            console.log('imageURL is', imageResult.url)
            document.getElementById("search-results").innerHTML += "<img src='" + imageResult.images.downsized_large.url + "'> <br>"
        }
        console.log('final htmlstring is', htmlString)
        

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

