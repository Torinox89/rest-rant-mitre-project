const React = require('react')
const Def = require('../default')

function show (data) {
  console.log(data)
    return (
        <Def>
          
          <main>
            <h1>{ data.place.name }</h1>
                       
          </main>
          <body>
          <div className="col-sm-6">
            <h4><img src={data.place.pic} alt={data.place.name} className="place-image"/></h4>
            </div>
            <div className="block">
            <h2>Rating</h2>
            <h4>Not Rated</h4>
            <h2>Description</h2>
            <h4> Located in {data.place.city}, {data.place.state}</h4>
          </div>
          <h2>Comments</h2>
          <h4>Not Comments yet</h4>
          <div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
          </a>    
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
          </form> 
             </div>
          </body>
        </Def>
    )
}

module.exports = show
