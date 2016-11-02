import Ember from 'ember';

export default Ember.Route.extend({


  model: function() {
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
},



  setupController: function(controller ,model) {
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



  },
});
