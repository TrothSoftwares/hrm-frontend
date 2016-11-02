import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'trothhr-front/tests/helpers/start-app';
import moduleForAcceptance from 'trothhr-front/tests/helpers/module-for-acceptance';
import { authenticateSession} from 'trothhr-front/tests/helpers/ember-simple-auth';


let application;

moduleForAcceptance('Acceptance | login', {
  beforeEach() {
    application = startApp();
  },
  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('viewing customers', function(assert) {
    authenticateSession(application);

visit('/employees');
    andThen(function() {

     assert.equal(currentURL(), '/employees');
    });
 });
