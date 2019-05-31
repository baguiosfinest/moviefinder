let React = require('react');
let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStore');
var SearchForm = require('../components/SearchForm.js');
var MovieResults = require('../components/MovieResults.js');

function getAppState() {
    return {
        movies: AppStore.getMovieResults()
    }
}

let App = React.createClass({
    getInitialState: function() {
        return getAppState();
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    render : function(){
        if(this.state.movies == ''){
            var movieResults = '';
        }else {
            var movieResults = <MovieResults movies={this.state.movies} />;
        }
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <SearchForm />
                        {movieResults}
                    </div>
                </div>
            </div>
        );
    },
    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = App;