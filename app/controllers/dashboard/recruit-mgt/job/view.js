import Ember from 'ember';

export default Ember.Controller.extend({


  isSaveButtonDisabled: Ember.computed( 'job.header'   ,  function() {
    if( Ember.isEmpty(this.get('job.header'))
  ){return 'disabled';}
  else{return '';}
  }),

  actions:{

    flipview: function() {
      $('.editjob').transition('fade');
      $('.viewjob').transition('fade');
    },

    saveJob:function(){
      var controller = this;

      controller.get('job').save().then(function(){
        controller.notifications.addNotification({
          message: 'Saved !' ,
          type: 'success',
          autoClear: true
        });
      });
    },

    deleteJob:function(){
      var controller = this;

      controller.get('job').destroyRecord().then(function(){
        controller.notifications.addNotification({
          message: 'Deleted !',
          type: 'success',
          autoClear: true
        });

        controller.transitionToRoute('dashboard.recruit-mgt.index');
      });
    },

  }
});
