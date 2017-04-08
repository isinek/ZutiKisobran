import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.targetTemplate = new ReactiveVar('');
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  getTemplateName() {
    return Template.instance().targetTemplate.get();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    instance.targetTemplate.set('info');
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
