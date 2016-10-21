import Ember from 'ember';

export default Ember.Controller.extend({


actions:{
  printPage:function(){
    window.print();
  }
}


});
