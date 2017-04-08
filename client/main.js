import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.main.onCreated(function mainOnCreated() {
  this.targetTemplate = new ReactiveVar('home');
});

Template.main.helpers({
  getTemplateName() {
    return Template.instance().targetTemplate.get();
  },
});