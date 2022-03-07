import guestLayout from '@/layouts/Guest/indexGuest';
export default {
    props: ["product"],
    components: { guestLayout },
    data() {
        return {
            products: []
        }
    },
    mounted() {
        if(localStorage.getItem('products') == null) {
            console.log('ska producte')
        } else {
            this.products = JSON.parse(localStorage.getItem('products'))
        }
    },
    
}