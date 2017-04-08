import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.subscribe('orgs');
Orgs = new Mongo.Collection('orgs');

Template.orgManagement.helpers({
  getOrgs() {
    return Orgs.find();
  }
});

Template.orgManagement.events({
  'submit form': function(event){
    event.preventDefault();
    var name = event.target.name.value;
    org = {
      name: name,
      isApproved: false,
      isDeleted: false
    };
    Meteor.call('createOrg', org);
    event.target.name.value = "";
  },
  'click .remove': function(event){
    var selectedOrg = event.target.value;
    Meteor.call('removeOrg', selectedOrg);
  }
});
