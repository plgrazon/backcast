var VideoPlayerView = Backbone.View.extend({
  el: '.player',
  initialize: function() {
    // this.render();
    this.listenTo(this.collection, 'select', this.handle)
  },
  handle: function(selected) {
    console.log('videoPlayer should fire..')
    this.model = selected;
    this.render(); 
  },
  render: function() {
    // console.log('this is in VideoPlayer, and should fire on clicks', this.model)
    let attributes = this.model.attributes;
    this.$el.html(this.template(attributes))
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
