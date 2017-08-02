function Layer(element) {
    this.element = element;
    this.store = [];
}
 
Layer.prototype = {
    toggle: function(callback) {
        this.element.style.display = this.element.style.display === 'none' ? 'block' : 'none';
        if (callback) {
            callback.call(this);
        }
    },
    hide: function() {
        if (this.element.style.display = 'block') {
            this.element.style.display = 'none';
        }
    }
};