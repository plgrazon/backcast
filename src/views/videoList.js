var VideoListView = Backbone.View.extend({
  el: '.list',
  container : '<div class=list></div>',
  initialize: function() {
  },
  // ONLY MODIFY THIS and nothing else.
  //we need to use this videolistview.js to pass each vid to videolistentry. 
  //videolistEntry will dynamically put each video into html
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this.collection, 'this should exist')
    
    this.collection.forEach(function(model) {
      new VideoListEntryView().render(model);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});