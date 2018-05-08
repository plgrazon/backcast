var VideoListEntryView = Backbone.View.extend({
  // el : '.video-list',
  events: {
    'click .video-list-entry-title' : 'handleClick'
  },
  // initialize: function() {
  //   // this.on('click', this.handleClick)
  //   // this.handleClick();
  // },
  handleClick: function() {
    this.model.select();
    console.log('fire on clicks, VideoListEntryView', new VideoPlayerView(this.model))
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes))
    return this;
  },
  template: templateURL('src/templates/videoListEntry.html')

});
