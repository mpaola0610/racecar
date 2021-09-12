const getData = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0,7)
}

const DOM_Elements = {
    driver_list : '.driver-list'
}

const create_list = ( position, name, nationality, points ) => {
    const html = `<a href = "#" class="list-group-item list-group-item-action list-group-item-light" > position: ${position} name: ${name} nationality: ${nationality} points: ${points} </a>`;
    document.querySelector(DOM_Elements.driver_list).insertAdjacentHTML('beforeend', html)
}


const load_data = async () => {
    const drivers = await getData();

    drivers.forEach( element => create_list(element.position, element.Driver.givenName, element.Driver.nationality, element.points))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.driver_list).innerHTML = "";

}