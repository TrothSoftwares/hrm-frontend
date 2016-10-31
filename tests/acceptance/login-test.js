import { test } from 'qunit';
import moduleForAcceptance from 'trothhr-front/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');
  fillIn('input.email_addr','admin@test.com');
  fillIn('input.password','password');
  click('button.submit');
    andThen(function() {
    assert.equal(currentURL(), '/employees' , 'Login Sucessful');
  });
});
