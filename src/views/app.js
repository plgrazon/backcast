var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView().render();
    new VideoPlayerView({model: this.videos.at(0)}).render();
    new VideoListView({collection: this.videos, el: '.list'}).render();

    return this;
  },

  template: templateURL('src/templates/app.html'),

});