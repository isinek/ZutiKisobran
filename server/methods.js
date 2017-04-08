Meteor.methods({
  'createOrg': function(org) {
    Orgs.insert(org)
  }
});
