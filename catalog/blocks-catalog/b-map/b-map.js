/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-map', {

    onSetMod : {

        'js' : function() {
            /* ... */
            console.log('init');
            console.log(this);
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();
