import Ember from 'ember';




export default Ember.Component.extend({
   didInsertElement: function(){
  $('.menu .item').tab();
  $('.ui.accordion').accordion();
  $('.small.modal').modal();
 }
});
