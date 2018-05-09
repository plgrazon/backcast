var Video = Backbone.Model.extend({
  initialize: function(video) {
    console.log('this should be defined', video)
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
