var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({collection: this.videos, model: this.videos.at(0)}).render();
    new VideoPlayerView({model: this.videos.at(0), collection: this.videos}).render();
    new VideoListView({collection: this.videos, model: this.videos.at(0), el: '.list'
   }).render();

    return this;
  },

  template: templateURL('src/templates/app.html'),

});