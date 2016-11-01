import Model from 'ember-data/model';
 import attr from 'ember-data/attr';
 import { belongsTo} from 'ember-data/relationships';

export default Model.extend({


user: belongsTo('user' ,{async:true}),
fromdate: attr('date'),
todate: attr('date'),
days: attr('number'),
status: attr('string'),
comments: attr('string'),
versions:attr(),
editleave: attr('boolean', { defaultValue: false }),

});
