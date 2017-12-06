
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-in-date-array', 'helper:is-in-date-array', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{is-in-date-array inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

