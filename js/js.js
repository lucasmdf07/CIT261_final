const searchButton = document.querySelector('#searchSubmit');;
const searchInput = document.querySelector('#inputSearchBox');

searchButton.onclick = function (event) {
    event.preventDefault();

    const value = searchInput.value

    console.log('value: ', value);

}