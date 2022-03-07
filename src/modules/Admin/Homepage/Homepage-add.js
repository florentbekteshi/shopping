import modalAddproduct from '@/modules/Admin/Homepage/Modals/indexAddproduct';
import adminLayout from '@/layouts/Admin/indexAdmin';

export default {
    components: { modalAddproduct, adminLayout },
    props: ["product"],
    data() {
        return {
            showModalNew: false,
            editMode: false,
            rowEdit: [],
            lastIndex: false,
            error: [],
            add: [
                
            ],
            products: [],
            indexOf: null
        }
    },
    mounted() {
        if(localStorage.getItem('products') == null) {
            console.log('ska producte')
        } else {
            this.products = JSON.parse(localStorage.getItem('products'))
        }
        this.products = JSON.parse(localStorage.getItem('products'))
    },
    methods: {
        toggleModalNew() {
            this.editMode = false;
            this.rowEdit = []
            this.showModalNew = !this.showModalNew
        },
        toggleEditModal() {
            this.editMode = true;
            this.lastIndex = this.products = JSON.parse(localStorage.getItem('products'));
            this.showModalNew = !this.showModalNew;

        },
        addProduct(row) {
            this.add.push(row);
        },
        editFunc(row) {
            this.products[this.indexOf] = row;
            localStorage.removeItem('products');
            localStorage.setItem('products', JSON.stringify(this.products))
            this.$router.go();
        },
        deleteRow(key) {
            if (confirm('Are you sure u want to delete this user!')) {
                this.products.splice(key, 1);
                localStorage.removeItem("products");
                localStorage.setItem('products', JSON.stringify(this.products))
                this.products = JSON.parse(localStorage.getItem('products'))
            }
        },
    }
}