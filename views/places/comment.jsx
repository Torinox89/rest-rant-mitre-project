const React = require('react')
const Def = require('../default.jsx')

function comment () {
return(
  <def>
        <main>
          <h1>Gor your Own Rant or Rave?</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
              <div className="form-group col-sm-6">
                <label htmlFor="author">Author</label>
                  <input 
                    className="form-control" 
                    id="author" 
                    name="author" 
                    value={data.comment.author} 
                    required
                  />
              </div>
                                
              <div className="form-group col-sm-6">
                <label htmlFor="content">Content</label>
                <input 
                    className="form-control" 
                    id="content" 
                    name="content" 
                    value={data.comment.content}
                />
                  
              </div>
              <div className="form-group">
                <label htmlFor="starRating">Star rating</label>
                <input 
                    className="form-control" 
                    id="starRating" 
                    name="starRating" 
                    value={data.comment.stars}
                />
              </div>
              <div className="form-group">
                <label htmlFor="rant">Rant</label>
                <input 
                className="form-control" 
                id="rant" name="rant"
                value={data.comment.rant}
                />
              </div>                                          
              <input className="btn btn-primary" type="submit" value="Add a Comment"/>
            </form>         
        </main>

    </def>
)

}

module.exports = comment