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





    var salaryArray=[];
    model.employees.forEach(function(empl){
      salaryArray.push(empl.get('gross'));
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



controller.set('salaryData',{
  labels: model.employees.mapBy('firstname'),
  datasets: [{
    label: "Salary",
    backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
     fillColor: "rgba(220,220,220,0.2)",
     strokeColor: "rgba(220,220,220,1)",
     pointColor: "rgba(220,220,220,1)",
     pointStrokeColor: "#fff",
     pointHighlightFill: "#fff",
     pointHighlightStroke: "rgba(220,220,220,1)",
    data: model.employees.mapBy('gross')
  }]
});






  },


});
