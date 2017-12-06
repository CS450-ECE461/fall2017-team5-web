import { test } from 'qunit';
import moduleForAcceptance from 'sojo-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

/*test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  }); */

  test ('log in a user', function (assert) {
    visit ('/login');
    fillIn ('#ember422', 'ember-sojo-frontend');
    fillIn ('#ember423', 'ember-sojo-frontend')
    click ('button.submit');
    assert.equal (currentURL (), '/')
  });

//});
