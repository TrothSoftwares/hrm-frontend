import Ember from 'ember';

export default Ember.Controller.extend({

  grossComputed: Ember.computed('employee.basic' , 'employee.houserentallowance','employee.adhoc','employee.transport','employee.misc','employee.statbonus','employee.provfund','employee.proftax','employee.incometax','employee.essp','employee.otherearningsnt' ,'employee.oncallshiftallowance',function() {
    return parseInt(this.get('employee.basic')) +
           parseFloat(this.get('employee.houserentallowance')) +
           parseFloat(this.get('employee.adhoc')) +
           parseFloat(this.get('employee.transport')) +
           parseFloat(this.get('employee.misc')) +
           parseFloat(this.get('employee.statbonus')) +
           parseFloat(this.get('employee.provfund')) +
           parseFloat(this.get('employee.proftax')) +
           parseFloat(this.get('employee.incometax')) +
           parseFloat(this.get('employee.essp')) +
           parseFloat(this.get('employee.otherearningsnt')) +
           parseFloat(this.get('employee.oncallshiftallowance')) ;


  }),

});
