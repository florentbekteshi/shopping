import guestLayout from '@/layouts/Guest/indexGuest';


export default {
    components: { guestLayout},
    data() {
        return {
            showModalNew: false,
            product: [],
          


           
        }
    },
    mounted() {
        this.getProduct();
     
    },
    methods: { 



        toggleModalNew() {

            this.showModalNew = !this.showModalNew
        },
        getProduct() {
            let allProducts = JSON.parse(localStorage.getItem('products'))

            this.product = allProducts.filter(x => x.title == this.$route.params.name)[0] 
        },

        
        
    }
    
}