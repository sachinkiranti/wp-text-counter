(function ($) {

    var WTCManager = {
        init: function () {
            this.cacheDom();
            this.bind();
        },

        cacheDom: function () {
            this.$wtcWrapper = $('.wp-text-counter-wrapper');
            this.inputel  = this.$wtcWrapper.find('textarea[name=wp-text-counter-element]');
            this.button  = this.$wtcWrapper.find('#wp-text-counter-btn');
            this.wordCountHolder  = this.$wtcWrapper.find('.wp-text-counter-words');
            this.charCountHolder  = this.$wtcWrapper.find('.wp-text-counter-characters');
        },

        bind: function () {
            this.button.on('click', this.process);
        },

        process:function () {
            var $text = WTCManager.inputel.val();
            WTCManager.wordCountHolder.html( $text.wordCount() );
            WTCManager.charCountHolder.html( $text.charCount() );
        }
    }
    WTCManager.init();
}) (jQuery);