import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  time() {
    return faker.date.past().toISOString();
  },
  nuovi_positivi() {
    return faker.random.number();
  },
  variazione_totale_positivi() {
    return faker.random.number();
  },
});
