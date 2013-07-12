define( function (a) {
    return {
        'confirm': function (a) {
            var v = $(a).attr("placeholder");

            if ( $.trim($(a).val()) == "" || $.trim($(a).val()) == undefined ) {
                $(a).val(v);
            } else if ( $.trim($(a).val()) == $.trim(v) ) {
                $(a).val("");
            }
        },
        'hold': function (a) {
            $(a).on({
                'focus': function (){
                    this.confirm($(this));
                },
                'blur': function (){
                    this.confirm($(this));
                }
            });
        }
    }
});
