Meteor.subscribe('hotels');
Hotels = new Mongo.Collection('hotels');

Template.searchbot.onCreated(function searchbotOnCreated() {
  this.messagesPool = new ReactiveVar([
    { message: 'Pozdrav!', isMe: true },
    { message: 'Dobro došli na tražilicu Žutog kišobrana.', isMe: true },
    { message: 'Kako Vam mogu pomoći?', isMe: true }
  ]);
  this.searchContext = new ReactiveVar({});
});

Template.searchbot.helpers({
    getMessagesPool() {
        return Template.instance().messagesPool.get();
    },
    getMessageClass(isMe) {
        return isMe ? 'me' : '';
    },
    getHotels() {
      console.log(Hotels.aggregate([{
          $lookup: {
            from: "rooms",
            localField: "_id",
            foreignField: "hotelId",
            as: "rooms"
          }
        },
        { $match: Template.instance().searchContext.get() }
      ]));
      return Hotels.aggregate([{
          $lookup: {
            from: "rooms",
            localField: "_id",
            foreignField: "hotelId",
            as: "rooms"
          }
        },
        { $match: Template.instance().searchContext.get() }
      ]);
    }
});

Template.searchbot.events = {
    'focus section#searchbot #searchbot_input.bling_bling': function () {
        jQuery('section#searchbot #searchbot_input.bling_bling').removeClass('bling_bling');
    },
    'keyup section#searchbot #searchbot_input': function (event, instance) {
        if (event.which === 13 && instance.find('#searchbot #searchbot_input').value.length) {
            var messages = Template.instance().messagesPool.get();
            var message = instance.find('#searchbot #searchbot_input').value;
            messages.push({ message: message, isMe: false });
            instance.find('#searchbot #searchbot_input').value = '';
            Template.instance().messagesPool.set(messages);
            jQuery('#searchbot .searchbot_chat_wrapper').animate({
                scrollTop: jQuery('#searchbot .searchbot_chat_wrapper .searchbot_chat').height()
            });
            var template = Template.instance();
            HTTP.call('POST', 'https://api.api.ai/v1/query?v=20170405', {
              headers: {
                'Authorization': 'Bearer ' + '0a91e287e38644d6b7aae220b8597bdf',
                'Content-Type': 'application/json; charset=utf-8'
              },
              data: {
                query: [message],
                lang: 'en',
                sessionId: new Date()
              }
            }, function(error, result) {
              if (!error) {
                var params = result.data.result.parameters;
                params = _.pick(params, 'adult', 'checkin-date', 'checkout-date', 'city_cro', 'price', 'room-facility', 'venue-facility', 'sort');
                var searchContext = template.searchContext.get();
                if (params.adult != '') {
                  searchContext.bedCount = params.adult;
                }
                if (params.city_cro != '') {
                  searchContext.city = params.city_cro;
                }
                if (params.price.length == 1) {
                  searchContext['"rooms.price"'] = '{$lt: ' + params.price[0] + '}';
                } else if (params.price.length == 2) {
                  searchContext['"rooms.price"'] = '{$gt: ' + params.price[0] + ', $lt: ' + params.price[1] + '}';
                }
                var tags = params['room-facility'].concat(params['venue-facility']);
                tags = _.map(tags, function (tag) {
                  return '"' + tag + '"';
                });
                tags = tags.join(', ');
                searchContext['"rooms.tags"'] = '{$in: [' + tags + ']}';
                console.log(searchContext);
              } else {
                console.log(error);
              }
            });
        }
    }
};
