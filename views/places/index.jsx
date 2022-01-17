const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
          {/* H-thai-ml */}
        <h2>{place.name}</h2> 
        <p clasName="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} width="500" height="500" />
        <p clasName="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}
    


module.exports = index