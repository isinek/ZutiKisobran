Template.searchbot.onCreated(function searchbotOnCreated() {
  this.searchContext = new ReactiveVar({hotels: {}, rooms: {}});
  this.messagesPool = new ReactiveVar([
      { message: 'Dobro došli na tražilicu Žutog kišobrana.', isMe: true },
      { message: 'Kako Vam mogu pomoći?', isMe: true }
  ]);
  this.firstRow = new ReactiveVar(true);
});

Template.searchbot.helpers({
    getMessagesPool() {
        return Template.instance().messagesPool.get();
    },
    getMessageClass(isMe) {
        return isMe ? 'me' : '';
    },
    getHotels() {
      return Hotels.find(Template.instance().searchContext.get().hotels);
    },
    getRooms(hotelId) {
      var query = Template.instance().searchContext.get().rooms
      query.hotelId = hotelId;
      return Rooms.find(query);
    }
});

Template.searchbot.events = {
    'focus section#searchbot #searchbot_input.bling_bling': function () {
        jQuery('section#searchbot #searchbot_input.bling_bling').removeClass('bling_bling');
    },
    'keyup section#searchbot #searchbot_input': function (event, instance) {
        if (event.which === 13 && instance.find('#searchbot #searchbot_input').value.length) {
            var dots = jQuery(event.target).prev().find('span').first();
            dots.addClass('hidden');
            dots = dots.next();
            dots.removeClass('hidden');
            var messages = Template.instance().messagesPool.get();
            var message = instance.find('#searchbot #searchbot_input').value;
            messages.push({ message: message, isMe: false });
            instance.find('#searchbot #searchbot_input').value = '';
            Template.instance().messagesPool.set(messages);
            jQuery('#searchbot .searchbot_chat_wrapper').animate({
                scrollTop: jQuery('#searchbot .searchbot_chat_wrapper .searchbot_chat').height()
            });
            var template = Template.instance();
            var session = {};
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
                params = _.pick(params, 'adult', 'checkin-date', 'checkout-date', 'city_cro', 'price', 'room-facility', 'venue-facility', 'sort', 'star');
                var searchContext = template.searchContext.get();
                if (typeof params.star !== 'undefined' && params.star.length) {
                  searchContext.hotels.stars = parseInt(params.star[0]);
                }
                if (typeof params.city_cro !== 'undefined' && params.city_cro != '') {
                  searchContext.hotels.city = params.city_cro;
                }
                if (typeof params.adult !== 'undefined' && params.adult.length) {
                  searchContext.rooms.bedCount = params.adult;
                }
                if (typeof params.price !== 'undefined' && params.price.length == 1) {
                  searchContext.rooms.price = '{$lt: ' + params.price[0] + '}';
                } else if (typeof params.price !== 'undefined' && params.price.length == 2) {
                  searchContext.rooms.price = '{$gt: ' + params.price[0] + ', $lt: ' + params.price[1] + '}';
                }
                var tags = typeof params.price !== 'undefined' && params['room-facility'].concat(params['venue-facility']);
                if (tags.length > 0) {
                  searchContext.rooms.tags = {$in: tags};
                }
                console.log(searchContext);
                template.searchContext.set(searchContext);
              } else {
                console.log(error);
              }
              dots.addClass('hidden');  
            });
        }
    },
    'keypress section#searchbot #searchbot_input': function (event, instance) {
        var dots = jQuery(event.target).prev().find('span').first();
        dots.removeClass('hidden');
        setTimeout(function() {
          dots.addClass('hidden');
        }, 3000);
    }
};
