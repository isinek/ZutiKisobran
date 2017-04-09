Meteor.subscribe('hotels');
Hotels = new Mongo.Collection('hotels');

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
  	if(typeof event.target.dataset.page !== 'undefined') {
	    instance.targetTemplate.set(event.target.dataset.page);
	    jQuery(event.target.parentNode).find('.active').removeClass('active');
	    jQuery(event.target).addClass('active');
	}
  },
  'click header nav span.login': function (event, instance) {
  	console.log(event.target);
  	jQuery(event.target).next().toggleClass('hidden');
  },
});
