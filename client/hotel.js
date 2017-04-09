Template.hotelManagement.onCreated(function hotelManagementOnCreated() {
  this.tags = new ReactiveVar([]);
});

Template.hotelManagement.helpers({
  getTags() {
    return Template.instance().tags.get();
  },
  getHotels() {
    return Hotels.find();
  }
});

Template.hotelManagement.events({
  'submit form': function(event){
    event.preventDefault();
    org = {
      name: event.target.name.value,
      stars: event.target.stars.value,
      city: event.target.city.value
    };
    Meteor.call('createHotel', org);
    event.target.name.value = "";
    event.target.stars.value = "";
    event.target.city.value = "";
  },
  'click .remove': function(event){
    event.preventDefault();
    var id = event.target.value;
    Meteor.call('removeHotel', id);
  }
});
