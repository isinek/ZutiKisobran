import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.subscribe('orgs');
Orgs = new Mongo.Collection('orgs');

Template.hello.onCreated(function helloOnCreated() {
  this.targetTemplate = new ReactiveVar('');
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  getTemplateName() {
    return Template.instance().targetTemplate.get();
  },
  getOrgs() {
    return Orgs.find();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    instance.targetTemplate.set('info');
  },
  'submit form': function(event){
      event.preventDefault();
      var name = event.target.name.value;
      org = {
        name: name
      };
      Meteor.call('createOrg', org);
      event.target.name.value = "";
  }

});
