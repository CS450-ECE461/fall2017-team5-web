import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bill-pay-setup-sidebar', 'Integration | Component | bill pay setup sidebar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bill-pay-setup-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bill-pay-setup-sidebar}}
      template block text
    {{/bill-pay-setup-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
