var AppActions = require('../actions/AppActions');

module.exports = {
    searchMovies: function(movie){
        $.ajax({
            url: `http://www.omdbapi.com/?s=${movie}&apikey=d04b773b`,
            dataType: 'json',
            cache: false,
            success: function(data) {
                AppActions.receiveMovieResults(data.Search);
            }.bind(this),
            error: function(xhr, status, err){
                alert(err);
            }.bind(this)
        })
    }
} 