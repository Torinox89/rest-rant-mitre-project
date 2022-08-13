const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          
          <main>
            <h1>{ data.place.name }</h1>
                       
          </main>
          <body>
          <div className="col-sm-6">
            <h4><img src={data.place.pic} alt={data.place.name} /></h4>
            </div>
            <div className="block">
            <h2>Rating</h2>
            <h4>Not Rated</h4>
            <h2>Description</h2>
            <h4> Located in {data.place.city}, {data.place.state}</h4>
          </div>
          <h2>Comments</h2>
          <h4>Not Comments yet</h4>
            
            
          </body>
        </Def>
    )
}

module.exports = show
