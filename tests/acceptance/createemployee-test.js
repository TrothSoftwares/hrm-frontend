import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'trothhr-front/tests/helpers/start-app';
import moduleForAcceptance from 'trothhr-front/tests/helpers/module-for-acceptance';
import { authenticateSession} from 'trothhr-front/tests/helpers/ember-simple-auth';


let application;

moduleForAcceptance('Acceptance | createemployee', {
  beforeEach() {
    application = startApp();
  },
  afterEach() {
    Ember.run(application, 'destroy');
  }
});




test('visiting /dashboard/newemployee', function(assert) {
authenticateSession(application);
visit('/newemployee');
  fillIn('input.firstname','Sabith');
  fillIn('input.lastname','Nazar');
  fillIn('input.email','sabith@gmail.com');
  fillIn('input.contact','977155214458');
  fillIn('select.selectdesignation','Developer');

   click('div.createEmployeeButton');





  andThen(function() {

   assert.equal(currentURL(), '/employees');
  });
});
