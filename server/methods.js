Meteor.methods({
  'createOrg': function(org) {
    Orgs.insert(org)
  },
  'removeOrg': function(id) {
    Orgs.update({ _id: id }, { $set: { "isDeleted": true } });
  },
  'createHotel': function(hotel) {
    Hotels.insert(hotel)
  },
  'removeHotel': function(id) {
    Hotels.remove({ _id: id });
  }
});
