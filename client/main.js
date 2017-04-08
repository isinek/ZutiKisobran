import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.main.onCreated(function mainOnCreated() {
  this.targetTemplate = new ReactiveVar('home');
});

Template.main.helpers({
  getTemplateName() {
    return Template.instance().targetTemplate.get();
  }
});

Template.main.events({
  'click .navHome': function(event, instance) {
    event.preventDefault();
    instance.targetTemplate.set('home');
  },
  'click .navOrgManagement': function(event, instance) {
    event.preventDefault();
    instance.targetTemplate.set('orgManagement');
  },
  'click .navHotelManagement': function(event, instance) {
    event.preventDefault();
    instance.targetTemplate.set('hotelManagement');
  }
});
