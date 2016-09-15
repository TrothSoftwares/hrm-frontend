import Ember from 'ember';

export default Ember.Controller.extend({

  chartOptions: {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Employees Attendance Percentage'
    },

  },


   chartData: [{

    data: [{
                  name: 'Microsoft Internet Explorer',
                  y: 56.33
              }, {
                  name: 'Chrome',
                  y: 24.03,
                  sliced: true,
                  selected: true
              }, {
                  name: 'Firefox',
                  y: 10.38
              }, {
                  name: 'Safari',
                  y: 4.77
              }, {
                  name: 'Opera',
                  y: 0.91
              }, {
                  name: 'Proprietary or Undetectable',
                  y: 0.2
              }],
  }],









});
