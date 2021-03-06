const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
             <form method="POST" action={`places/${data.id}?_method=PUT`}>
               <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input id="name" />
               </div>
               <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input id="pic"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">city</label>
                    <input id="city"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">state</label>
                    <input id="state"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">cuisines</label>
                    <input id="cuisines"/>
                </div>
                <a href={`places/${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                      </a>     
                </div>
        
            </form> 

            

          </main>
        </Def>
    )
}

module.exports = edit_form