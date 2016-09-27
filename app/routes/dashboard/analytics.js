import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    return Ember.RSVP.hash({
      attendances: this.store.findAll('attendance' ,{reload :true})
    });
  },
  setupController: function(controller,model) {
    controller.set('attendances',model.attendances);


    // var attes = model.attendances;

    var atteArray =[];

    model.attendances.forEach(function(atte){
      atteArray.push(atte.get('presentdaysPercentage'));
    });


    let arr25 = atteArray.filter(function(a){
      return a > 0 && a<=25;
    });


    var arr50 = atteArray.filter(function(a){
      return a > 25 && a<=50;
    });

    var arr75 = atteArray.filter(function(a){
      return a > 50 && a<=75;
    });

    var arr100 = atteArray.filter(function(a){
      return a > 75 && a<=100;
    });


    controller.set('chartData',    [{
      
      data: [{
        name: '0-25 %',
        y: arr25.length
      }, {
        name: '25-50 %',
        y: arr50.length,

      }, {
        name: '50-75 %',
        y: arr75.length,
      }, {
        name: '75-100 %',
        y: arr100.length
      }],
    }]);

  },


});
