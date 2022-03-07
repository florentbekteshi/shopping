import modalAdd from '@/modules/Admin/Users/Modals/indexAdd';
import adminLayout from '@/layouts/Admin/indexAdmin';

export default {
    components: { modalAdd, adminLayout },
    props: ["user"],
    data() {
        return {
            showModalNew: false,
            users:[],
            editMode: false,
            rowEdit: [],
            lastIndex: false,
            error: [],
            indexOf: null

        }
    },
    mounted() {
        if(localStorage.getItem('users') == null) {
            console.log('Nuk ka usera')
        } else {
            this.users = JSON.parse(localStorage.getItem('users'))
        }
    },
    
    methods: {
        toggleModalNew() {
            this.editMode = false;
            this.rowEdit = []
            this.showModalNew = !this.showModalNew
        },
        toggleEditModal() {
            this.editMode = true;
            this.lastIndex = this.products = JSON.parse(localStorage.getItem('users'));
            this.showModalNew = !this.showModalNew;

        },
        addUser(row) {
            this.add.push(row);
        },
        editFunc(row) {
            this.users[this.indexOf] = row;
            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(this.users))
            this.$router.go();
        },
        deleteRow(key) {
            if (confirm('Are you sure u want to delete this user!')) {
                this.users.splice(key, 1);
                localStorage.removeItem("users");
                localStorage.setItem('users', JSON.stringify(this.users))
                this.users = JSON.parse(localStorage.getItem('users'))
            }
        },
    }
}