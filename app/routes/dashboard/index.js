import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

  session: Ember.inject.service('session'),
  model: function() {

    ///////////////////////////   IF EMPLOYEE /////////////////////////
    if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){

      var route = this;

      return Ember.RSVP.hash({
        employees: this.store.findRecord('user' , this.get('session.data.authenticated.id') ,{reload :true}).catch(function(){
          route.notifications.addNotification({
            message: 'Employee Not Found !' ,
            type: 'error',
            autoClear: true
          });
          route.get('session').invalidate();
          route.transitionTo('login');

        }

      ),
      leaverolls: this.store.findAll('leaveroll' ,{reload: true}).then(function(leaverolls){
        return leaverolls.filter(function(item ){
          return item.get('user.id') == route.get('session.data.authenticated.id');
        });
      }),
      jobs: this.store.findAll('job',{reload: true}),
      // bids: this.store.findAll('bid',{reload: true}),

    });

  }
  ///////////////////////////   END OF IF EMPLOYEE /////////////////////////


  //////////////////////////////    IF ADMIN /////////////////////////////////////
  if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
    return Ember.RSVP.hash({
      leaverolls: this.store.findAll('leaveroll' ,{reload: true}).then(function(projects){
        return {
          pendingLeaves:  projects.filterBy('status', 'pending'),
          approvedLeaves:  projects.filterBy('status', 'approved'),
          rejectedLeaves:  projects.filterBy('status', 'rejected')
        };
      }),
      bids: this.store.findAll('bid' ,{reload: true})

    });

  }
  ////////////////////////////////////  END OF ADMIN //////////////////////////////
},



setupController: function(controller ,model) {

  ////////////////////////////////  IF ADMIN //////////////////////////////
  if(Ember.isEqual('Admin', this.get('session.data.authenticated.role'))){
    controller.set('isAdmin',true );
  }
  if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
    controller.set('isEmployee',true );
  }


  controller.set('leaverolls',model.leaverolls);
  controller.set('bids',model.bids);

  var quotes=[
    {quote:'If you don’t build your dream, someone else will hire you to help them build theirs.',author:'Dhirubhai Ambani'},
    {quote:'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',author:'Mark Caine'},
    {quote:'Great minds discuss ideas; average minds discuss events; small minds discuss people. ',author:'Eleanor Roosevelt '},
    {quote:' I have not failed. I’ve just found 10,000 ways that won’t work',author:'Thomas A. Edison '},
    {quote:' If you don’t value your time, neither will others. Stop giving away your time and talents. Value what you know & start charging for it.',author:' Kim Garst'},
    {quote:' A successful man is one who can lay a firm foundation with the bricks others have thrown at him.',author:' David Brinkley'},
    {quote:'No one can make you feel inferior without your consent. ',author:'Eleanor Roosevelt '},
    {quote:'Let him who would enjoy a good future waste none of his present. ',author:' Roger Babson'},
    {quote:'Live as if you were to die tomorrow. Learn as if you were to live forever. ',author:' Mahatma Gandhi'},
    {quote:' Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',author:'Mark Twain '},
    {quote:'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. ',author:'Vince Lombardi'},
    {quote:' Success is about creating benefit for all and enjoying the process. If you focus on this & adopt this definition, success is yours.',author:' Kelly Kim'},
    {quote:'I used to want the words "She tried" on my tombstone. Now I want "She did it".',author:'Katherine Dunham '},
    {quote:'It is our choices, that show what we truly are, far more than our abilities. ',author:' Jimmy J'},
    {quote:'You have to learn the rules of the game. And then you have to play better than anyone else. ',author:'Albert Einstein '},
    {quote:'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world. ',author:'Harriet Tubman '},
    {quote:'The successful warrior is the average man, with laser-like focus. ',author:'Bruce Lee '},
    {quote:' Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',author:'Dale Carnegie '}



  ];

  controller.set('quote', quotes[Math.floor(Math.random()*quotes.length)] );


  ///////////////////////////   END OF IF ADMIN ////////////////////////


  /////////////////////////// IF EMPLOYEE /////////////////////////////////

  if(Ember.isEqual('Employee', this.get('session.data.authenticated.role'))){
    var route = this;
    var employeeid = route.get('session.data.authenticated.id').toString();

    controller.set('employee',model.employees);
    controller.set('jobs',model.jobs);
    controller.set('leaves',model.leaverolls.sortBy('status'));


    controller.set('bids',
    model.jobs.forEach(function(job){

      job.get('bids').then(function(bids){

        var bidArray = [];
        bids.forEach(function(bid){
          bidArray.push(bid.get('user.id'));
        });

        if(bidArray.indexOf(employeeid) > -1){
          job.set('isApplicableText','Applied');
          job.set('isApplicable','disabled');
        }
        else {
          job.set('isApplicable','');
          job.set('isApplicableText','Apply');
        }

      });
    }));



  }
  ////////////////////////////  END OF IF EMPLOYEE ///////////////////////////


},


actions: {
  logout() {
    var route =this;
    route.get('session').invalidate();

    route.transitionTo('login');
  },


  reloadModel: function() {
    this.refresh();
  }
}




});
