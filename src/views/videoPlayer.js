var VideoPlayerView = Backbone.View.extend({
  el: '.player',
  initialize: function() {
    // this.videoList = new Backbone.Collection("/src/data/exampleVideoData.js");
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.videos =  new Videos(window.exampleVideoData);
    let vid = this.videos;
      $('el').append(`<div>${this.videos.models[0]}</div>`)
      this.$el.html(this.template(this.videos.model.attributes))
      console.log('what is vidsss??', vid.attributes);
      // $('.video-player-details').html(this.videos.model)
    // }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
