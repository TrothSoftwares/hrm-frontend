import Model from 'ember-data/model';

 import {belongsTo } from 'ember-data/relationships';

export default Model.extend({

employee: belongsTo('employee'),
job: belongsTo('job'), 

});
