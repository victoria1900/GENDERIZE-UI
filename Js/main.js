const firstName = document.querySelector('.input');
const serverUrl = 'https://api.genderize.io';
const button = document.querySelector('.button');


button.addEventListener('click', function (event) {
    event.preventDefault();
    const firstNameInput = firstName.value;
    const url = `${serverUrl}?name=${firstNameInput}`;

    let promise = fetch(url);

    promise.then(
        function(result){
            console.log(result);
            return result.json();
        }
    ).then(
        function(result){
            console.log(result)
            alert(result.gender)
            return result
        }
    );

});




