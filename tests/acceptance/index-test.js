import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('checking trend nuovi positivi ', async function (assert) {
    let nation_data = this.server.createList('nation', 2);
    await visit('/');
    assert.equal(this.element.querySelector('#trend-nuovi-positivi svg').class, 'text-success');
  });
});
