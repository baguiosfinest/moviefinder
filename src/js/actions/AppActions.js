var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchMovies: function(movie){
        
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        });
    },

    receiveMovieResults: function(movies) {
        //console.log(movies);
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_MOVIES,
            movies: movies
        });
    }

}

module.exports = AppActions;