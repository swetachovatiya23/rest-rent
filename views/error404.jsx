const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
            <h1>HOME</h1>
          <div>
              <img src="/images/rr-kittens-pic1.jpeg" alt="we are sorry ! from:cute kittens" width="500" height="500"/>
             <div>
                Photo by <a href="https://unsplash.com/@theluckyneko">The Lucky Neko</a> on <a href="https://unsplash.com/photos/rplhB9mYF48">Unsplash</a>
                
                <p>Oops, sorry, we can't find this page!</p>
             </div>
          </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
      </Def>
              
          
    )
  }

module.exports = error404