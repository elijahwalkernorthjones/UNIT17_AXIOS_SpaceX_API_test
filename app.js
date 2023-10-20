async function getLaunches(){
    const res = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
    const ul = document.querySelector('#launches');

    for(let launch of res.data){
        const newLi = document.createElement('li')
        newLi.innerText = `Upcoming Launch : ${launch.name} --------- Rocket Model : ${launch.rocket}`;
        ul.append(newLi)
    }
}

// on button click, populate the launches as LI's
const btn = document.querySelector('#getLaunches');

btn.addEventListener('click', getLaunches)