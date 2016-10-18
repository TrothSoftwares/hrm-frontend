import Ember from 'ember';

export default Ember.Controller.extend({




  salaryData:Ember.computed('employees',function(){
     return {





       labels: this.get('employees').mapBy('firstname'),
       datasets: [{
         label: "Salary",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
         data: this.get('employees').mapBy('gross')
       }]
     };
   }),












});
