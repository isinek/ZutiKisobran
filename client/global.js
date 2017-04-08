Meteor.startup(function () {
    jQuery('section#searchbot > .searchbot_header').click(function () {
        jQuery('section#searchbot').toggleClass('closed');
    });
    jQuery('#searchbot .searchbot_chat_wrapper').animate({
        scrollTop: jQuery('#searchbot .searchbot_chat_wrapper .searchbot_chat').height()
    }, 1);
});