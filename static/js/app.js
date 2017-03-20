new Vue({
  el: '#items',

  data: {
    item: { name: '', price: '', description: '', quantity:'', dateavailable: '' },
    items: []
  },

  ready: function () {
    this.fetchItems();
  },
  
  
  computed: {
	    validation: function () {
	      return {
	        name: !!this.item.name.trim(),
	        price: !!this.item.price.trim(),
	        quantity: !!this.item.quantity.trim(),
	      }
	    },
	    isValid: function () {
	      var validation = this.validation
	      return Object.keys(validation).every(function (key) {
	        return validation[key]
	      })
	    }
	  },

  methods: {

    fetchItems: function () {
      var items = [];
          this.$set('items', items);
    },

    addItem: function () {
    	if (this.isValid) {
            this.items.push(this.item);
      }
    },

    deleteItem: function (index) {
      if (confirm('Are you sure you want to delete?')) {
            this.items.splice(index, 1);
      }
    }
  }
});