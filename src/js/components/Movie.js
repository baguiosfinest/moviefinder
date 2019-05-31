var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Movie = React.createClass({
    render: function(){
        
        var movie = this.props.movie;

        return(
           
            <div className="well">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img className="thumbnail img-responsive"
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                    </div>
                    <div className="col-sm-4">
                        <h4>{ movie.Title }</h4>
                        <p><strong>Year</strong>: {movie.Year}</p>
                        <p><strong>Type</strong>: {movie.Type}</p>
                        <p><strong>IMDB ID</strong>: {movie.imdbID}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    },

});

module.exports = Movie; 