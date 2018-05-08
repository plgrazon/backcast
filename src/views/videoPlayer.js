var VideoPlayerView = Backbone.View.extend({
  el: '.player',
  initialize: function() {
    console.log('what is this', this)
    this.listenTo(this.collection, 'select', this.handle);
  },
  handle: function(selected) {
    this.model = selected;
    this.render(); 
  },
  render: function() {
    let attributes = this.model.attributes;
    this.$el.html(this.template(attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
