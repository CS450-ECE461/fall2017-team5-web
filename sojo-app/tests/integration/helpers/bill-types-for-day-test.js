
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bill-types-for-day', 'helper:bill-types-for-day', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{bill-types-for-day inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

