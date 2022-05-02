(function ($) {

    var WTCManager = {
        init: function () {
            this.cacheDom();
            this.bind();
        },

        cacheDom: function () {
            this.$wtcWrapper = $('.wp-text-counter-wrapper');
            this.inputel  = this.$wtcWrapper.find('textarea[name=wp-text-counter-element]');
            this.wordCountHolder  = this.$wtcWrapper.find('.wp-text-counter-words');
            this.charCountHolder  = this.$wtcWrapper.find('.wp-text-counter-characters');
        },

        bind: function () {
            this.inputel.on('blur', this.process);
        },

        process:function () {
            var $text = $(this).val();
            WTCManager.wordCountHolder.html( $text.wordCount() );
            WTCManager.charCountHolder.html( $text.charCount() );
        }
    }
    WTCManager.init();
}) (jQuery);