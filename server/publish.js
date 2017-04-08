Orgs = new Mongo.Collection('orgs');

Meteor.publish('orgs', function() {
  return Orgs.find({"isDeleted" : false});
});
