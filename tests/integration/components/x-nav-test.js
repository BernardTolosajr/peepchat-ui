import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-nav', 'Integration | Component | x nav', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#x-nav}}
      menutemplateblocktext
    {{/x-nav}}
  `);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'menutemplateblocktext');
});
