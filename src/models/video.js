var Video = Backbone.Model.extend({
  // dont touch this.
  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId, 'title', video.snippet.title);
    // this.set('title', video.snippet.title)
  },

  select: function() {
    this.trigger('select', this);
  }

});
