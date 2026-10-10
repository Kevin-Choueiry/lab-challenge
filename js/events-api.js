// events-api.js – data access module
// TODO: export an async function loadEvents(url = 'events.json') that fetches
// the JSON, throws an Error when !response.ok, and returns the array.

export async function loadEvents(Url='events.json'){
    const response= await fetch(Url);
    if(response.ok){
        return response.json();
    }
    throw new Error(`HTTP ${response.status} while loading ${Url}`);
}