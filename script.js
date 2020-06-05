function responseHandler(response){
    response.json().then( function(json) {
        for (let i=0;i<json.length;i++) {
            let ji = json[i];
            let isActive = '';
            if (ji.active) {isActive = 'Active'} else {isActive = 'Inactive'};
            let training = function(arr){
                let list = '';
                for (let j = 0; j<arr.length; j++) {
                    if (j!==arr.length-1) { 
                        list += arr[j] + ', '
                    } else {
                        list += arr[j]
                    }
                }
                return list
            }

            container.innerHTML += `
            <div class='astronaut'>
                <div class='bio'>
                    <h3>${ji.firstName} ${ji.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${ji.hoursInSpace}</li>
                        <li>${isActive}</li>
                        <li>Formal Training: ${training(ji.skills)}</li>
                    </ul>
                </div>
                <img class='avatar' src='${ji.picture}'>
            </div>`
        }
    })
}

window.addEventListener('load', function(){
    const container = document.querySelector('#container');
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(responseHandler)


})