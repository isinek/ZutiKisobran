import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

<<<<<<< HEAD
Template.main.onCreated(function mainOnCreated() {
  this.targetTemplate = new ReactiveVar('home');
});

Template.main.helpers({
=======
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.targetTemplate = new ReactiveVar('');
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
>>>>>>> cf812f9a6419aa0f79e11268ef96f09288c2c983
  getTemplateName() {
    return Template.instance().targetTemplate.get();
  }
});

<<<<<<< HEAD
Template.main.events({
});
=======
Template.hello.events({
  'click button'(event, instance) {
    instance.targetTemplate.set('info');
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
>>>>>>> cf812f9a6419aa0f79e11268ef96f09288c2c983
