import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.subscribe('orgs');
Orgs = new Mongo.Collection('orgs');

Template.main.onCreated(function mainOnCreated() {
  this.targetTemplate = new ReactiveVar('home');
});

Template.main.helpers({
  getTemplateName() {
    return Template.instance().targetTemplate.get();
  },
  getOrgs() {
    return Orgs.find();
  }
});

Template.main.events({
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

Template.main.events({
});
