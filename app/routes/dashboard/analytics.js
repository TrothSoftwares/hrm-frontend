import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    return Ember.RSVP.hash({
      attendances: this.store.findAll('attendance' ,{reload :true}),
      employees: this.store.findAll('employee' ,{reload :true})
    });
  },
  setupController: function(controller,model) {
    controller.set('attendances',model.attendances);
    controller.set('employees',model.employees);


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





    controller.set('attendanceData',{
    labels: [
        "0-25 %",
        "25-50%",
        "50-75%",
        "75-100%",

    ],
    datasets: [
        {
            data: [arr25.length,  arr50.length,arr75.length ,arr100.length],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FECE56",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FVCE56",
                "#FFCE56"
            ]
        }]
});






  },


});
