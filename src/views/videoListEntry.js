// var VideoListEntryView = Backbone.View.extend({
//   el : '.video-list',

//   render: function() {
//     this.$el.html(this.template(this.model.attributes));
//     this.videos =  new Videos(window.exampleVideoData);
//     console.log(this.videos)
//     return this;
//   },

//   template: templateURL('src/templates/videoListEntry.html')

// });

////////////////////////////////////////////////////////////////

var VideoListEntryView = Backbone.View.extend({
  el : '.video-list',
  
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

      console.log('this is a vid', this.model);
      $('.video-list').append(this);

    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
