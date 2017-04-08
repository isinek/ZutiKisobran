import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.searchbot.onCreated(function searchbotOnCreated() {
    this.messagesPool = new ReactiveVar([
        { message: 'Pozdrav!', isMe: true },
        { message: 'Dobro došli na tražilicu Žutog kišobrana.', isMe: true },
        { message: 'Kako Vam mogu pomoći?', isMe: true }
    ]);
});

Template.searchbot.helpers({
    getMessagesPool() {
        return Template.instance().messagesPool.get();
    },
    getMessageClass(isMe) {
        console.log(isMe);
        return isMe ? 'me' : '';
    },
});

Template.searchbot.events = {
    'focus section#searchbot #searchbot_input.bling_bling': function () {
        jQuery('section#searchbot #searchbot_input.bling_bling').removeClass('bling_bling');
    },
    'keyup section#searchbot #searchbot_input': function (event, currentTemplate) {
        if (event.which === 13 && currentTemplate.find('#searchbot #searchbot_input').value.length) {
            var messages = Template.instance().messagesPool.get();
            messages.push({ message: currentTemplate.find('#searchbot #searchbot_input').value, isMe: false });
            currentTemplate.find('#searchbot #searchbot_input').value = '';
            Template.instance().messagesPool.set(messages);
            jQuery('#searchbot .searchbot_chat_wrapper').animate({
                scrollTop: jQuery('#searchbot .searchbot_chat_wrapper .searchbot_chat').height()
            });
        }
    },
};  