export default {
  props: {
    row: {
      required: true
    },
    editMode: {
      required: true
    },

  },
  
    data() {
      return {
        data: {
          username: null,
          email: null,
          password: null,
        },
        errors:{
          username: false,
          email: false,
          password: false,
        }
      }
    },
    mounted() {
      this.data = [];
      if(this.row === undefined || this.row.length == 0) {
        console.log(this.editMode)
      } else {
        this.data = this.row
      }
    },
  
    methods: {
      addUser() {
        if (this.data.username == null || this.data.username == '') {
          this.errors.username = true;
        } else {
          this.errors.username = false;
        }
  
        if (this.data.email == null|| this.data.email == '') {
          this.errors.email = true;
        }else{
          this.errors.email = false;
        }
        
        if (this.data.password == null || this.data.password == '') {
          this.errors.password = true;
        }else{
          this.errors.password = false;
        }
       
       
        if(this.errors.username || this.errors.email || this.errors.password) {
          return;
        }
  
        let array = [];
        if(localStorage.getItem('users') == null) {
          console.log('test')
        } else {
          array = JSON.parse(localStorage.getItem('users'))
        }
  
        const row = {
          username: this.data.username,
          email: this.data.email,
          password: this.data.password,
        }
        array.push(row);
        localStorage.setItem('users', JSON.stringify(array))
  
        console.log(JSON.parse(localStorage.getItem('users'))) 

        this.$router.go();
      },
      editRow() {
        this.$emit('editRow', this.row) 
        this.$emit('toggleFunc');
      }
      
    
    },
  }
  