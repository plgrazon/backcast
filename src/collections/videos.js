var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    this.fetch({
      data: {
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        videoEmbeddable: true,
        part: "snippet",
        q: query,
        type: 'video'
      }
    }); 
  },
  
  parse: function(response) {
    return response.items;
  }
});

////////////////////////////////////////////////////

// var Videos = Backbone.Collection.extend({

//   model: Video,
//   url: 'https://developers.google.com/youtube/v3/docs/search',
  
//   search: function(query) {
//     this.fetch(query);
//   },
  
//   fetch: function(input) {
//     Backbone.ajax({
//       maxResults: 5,
//       videoEmbeddable: true,
//       part: 'snippet',
//       key: window.YOUTUBE_API_KEY,
//       q: input,
//       type: 'video'
//     })
//   }
// })




// search function to fetch from youtube api.
// use ajax method
// query the string to search for
// max result = 5
// key api
// only emeddable