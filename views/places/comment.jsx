const React = require('react')
const Def = require('../default.jsx')

function comment () {
return(
<def>
    <main>
    <h1>Edit Place</h1>
              <form method="POST" action={`/places/${data.id}?_method=PUT`}>
              <div className="row">
                  <div className="form-group col-sm-6">
                      <label htmlFor="name">Author</label>
                      <input 
                          className="form-control" 
                          id="name" 
                          name="name" 
                          value={data.place.name} 
                      required />
                  </div>
              </div>
              <div className="row">
                  <div className="form-group col-sm-6">
                      <label htmlFor="content">Content</label>
                      <input className="form-control" id="content" name="content" 
                      value={data.place.pic}  />
                     
                  </div>
              </div>
                <div className="form-group">
                  <label htmlFor="starRating">Star rating</label>
                  <input className="form-control" id="starRating" name="starRating" 
                  value={data.place.city} />
                </div>
                <div className="form-group">
                  <label htmlFor="state">Rant</label>
                  <input className="form-control" id="state" name="state"
                  value={data.place.state}  />
                </div>
               
                </div>
                <input className="btn btn-primary" type="submit" value="Add a Comment" />
              </form>         
    </main>


</def>

)





}

module.exports = comment