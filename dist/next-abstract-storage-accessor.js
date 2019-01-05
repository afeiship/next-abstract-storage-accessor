(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxAbstractStorageAccessor = nx.declare('nx.AbstractStorageAccessor', {
    methods: {
      init: function(inTarget) {
        this.target = inTarget;
      },
      set: function(inKey, inValue) {
        this.target.setItem(inKey, inValue);
      },
      get: function(inKey) {
        return this.target.getItem(inKey);
      },
      remove: function(inKey) {
        this.target.removeItem(inKey);
      },
      clear: function() {
        this.target.clear();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractStorageAccessor;
  }
})();
