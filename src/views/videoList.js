var VideoListView = Backbone.View.extend({
  // el: '.list',
  // events: {
  //   'click': this.render,
  //   'sync' : this.render
  // },
  // initialize: function() {
  //   // this.on('change', this.events, this)
    
  // },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());  
    this.$('.video-list').append(this.collection.map(function(video) {
      return new VideoListEntryView({model: video}).render().el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});