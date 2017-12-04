
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('no-events-for-day', 'helper:no-events-for-day', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{no-events-for-day inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

