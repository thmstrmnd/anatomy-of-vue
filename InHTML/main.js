var app = new Vue ({
    el:'#app',
    data: {
        product: 'Socks',
        image: 'socks.jpg',
        inStock: false,
        details: ["80% cotton", "20% polyester", "Gender Neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'socks.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'socks-2.jpg'
            }


        ],

        cart: 0,
    },

    methods: {
        addToCart: function() {
            this.cart += 1
        },

        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    },   

})