var SearchView = Backbone.View.extend({
  el: '.search',
  
  events :  { 'click .btn' : 'clickSearch',
              'keyup input' : 'apiSearch',
    
  },
  clickSearch: function() {
    console.log('search button clicked');
    let query = this.$('input').val();
    this.collection.search(query);
    this.$('input').val('')
  },
  apiSearch: function(e) {
    if(e.keyCode === 13) {
      console.log('enter key pressed')
      let data = this.$('input').val();
      this.collection.search(data);
      this.$('input').val('')
    }
    
    
  },
  
  initialize: function() {
    this.on('click', this.render());
  },
  

  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')
  
});
