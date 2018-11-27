// export function fetchMissionUpdates(){
//   // let parser = new DOMParser()
//   // xmlDoc = parser.parseFromSTring(text,)
//
//   fetch("https://cors-anywhere.herokuapp.com/https://marsmobile.jpl.nasa.gov/rss/missionupdates.cfm?s=msl")
//     .then(res => res.text())
//     .then(str => ( new DOMParser().parseFromString(str, "text/xml") ))
//     .then(data => { console.log(data) })
// }
//
// export function fetchCuriosityLocations(){
//   fetch("https://mars.jpl.nasa.gov/msl-raw-images/locations.xml")
//   .then(res => res.text())
//   .then(str => ( new DOMParser().parseFromString(str, "text/xml") ))
//   .then(data => { debugger})
// }


export function fetchManifest(){
  return fetch("http://localhost:4000/manifest")
    .then(res=>res.json())
}

export function fetchJourney(){
  return fetch("http://localhost:4000/journey")
    .then(res=>res.json())
}
