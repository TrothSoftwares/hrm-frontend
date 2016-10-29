import Ember from 'ember';

export default Ember.Component.extend({
   didInsertElement: function(){
  Ember.$('.menu .item').tab();

  Ember.$('.ui.accordion').accordion();
  Ember.$('.small.modal').modal();
 }
});
