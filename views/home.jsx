const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
<main>
    <h1>REST-Rant</h1>
   <div>
      <img src="/images/brenda-godinez-frutis-crystal.jpg" alt="fruit-crystal" />
   <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
   </div>
   </div>
</main>
    <a href="/places">
       <button className="btn-primary">Places Page</button>   
        </a>    
   </Def> 
        )
}

module.exports = home






