import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{

    flipview: function() {
      Ember.$('.editjob').transition('fade');
      Ember.$('.viewjob').transition('fade');
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
