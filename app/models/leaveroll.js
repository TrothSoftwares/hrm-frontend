import Model from 'ember-data/model';
 import attr from 'ember-data/attr';
 import { belongsTo} from 'ember-data/relationships';

export default Model.extend({


employee: belongsTo('employee' ,{async:true}),
fromdate: attr('date'),
todate: attr('date'),
days: attr('number'),
status: attr('string'),
comments: attr('string'),
});
