Meteor.methods({
  'createOrg': function(org) {
    Orgs.insert(org)
  },
  
  'removeOrg': function(id) {
    Orgs.remove({ _id: id });
  },
  
  'remove2Org': function(id) {
    Orgs.update({ _id: id }, 
    	{
    		$set: { "isDeleted": true}
    	});
  },

  'createHotel': function(hotel) {
    Hotels.insert(hotel)
  },
  
  'removeHotel': function(id) {
    Hotels.remove({ _id: id });
  },
  
  'remove2Hotel': function(id) {
    Hotels.update({ _id: id }, 
    	{
    		$set: { "isDeleted": true}
    	});
  }

});
