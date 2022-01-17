const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
    <div class="home-pic">
      <img src="/images/rr-breakfast-pic1.jpeg" alt="fruits for breakfast" width="800" height="500"/>
      <div class="source-name">
        Photo by <a href="https://unsplash.com/@brookelark">Brook Lark</a> on <a href="https://unsplash.com/photos/W9OKrxBqiZA">Unsplash</a>
      </div>
    </div><br></br>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}

module.exports = home