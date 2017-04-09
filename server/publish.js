Orgs = new Mongo.Collection('orgs');
Hotels = new Mongo.Collection('hotels');
Rooms = new Mongo.Collection('rooms');

Meteor.publish('orgs', function() {
  return Orgs.find({"isDeleted" : false});
});

Meteor.publish('hotels', function() {
  return Hotels.find();
});

Meteor.publish('rooms', function() {
  return Rooms.find();
});
