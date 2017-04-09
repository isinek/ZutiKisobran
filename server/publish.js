Orgs = new Mongo.Collection('orgs');

Meteor.publish('orgs', function() {
  return Orgs.find({"isDeleted" : false});
});

Hotels = new Mongo.Collection('hotels');

Meteor.publish('hotels', function() {
  return Hotels.find();
});
