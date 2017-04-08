import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.main.onCreated(function mainOnCreated() {
  this.targetTemplate = new ReactiveVar('home');
});

Template.main.helpers({
  getTemplateName() {
    return Template.instance().targetTemplate.get();
  },
  setTemplate(template) {
    Template.instance().targetTemplate.set(template);
  },
});

Template.main.events({
  'click header nav span': function (event, instance) {
    instance.targetTemplate.set(event.target.dataset.page);
  },
});
