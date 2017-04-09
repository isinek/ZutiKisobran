Template.hotelManagement.onCreated(function hotelManagementOnCreated() {
  this.tags = new ReactiveVar([]);
});

Template.hotelManagement.helpers({
  getTags() {
    return Template.instance().tags.get();
  },
});

Template.hotelManagement.events({
  'submit form': function(event){
    event.preventDefault();
    var name = event.target.name.value;
    org = {
      name: name,
      orgId: orgId,
      city: city,
      isDeleted: false
    };
    Meteor.call('createOrg', org);
    event.target.name.value = "";
  },

  'click .removeHotel': function(event){
    var selectedOrg = event.target.value;
    Meteor.call('removeHotel', selectedOrg);

  },

  'click .remove2Hotel': function(event){
    var selectedOrg = event.target.value;
    Meteor.call('remove2Hotel', selectedOrg);

  }
});
