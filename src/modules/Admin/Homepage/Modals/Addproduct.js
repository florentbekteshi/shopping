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
      details: {
        title: null,
        price: 0,
        image: null,
      },
      errors: {
        title: false,
        price: false,
        image: false,
      }
     
    }
  },
  mounted() {
    this.details = [];
    if(this.row === undefined || this.row.length == 0) {
      console.log(this.editMode)
    } else {
      this.details = this.row
    }
  },
  
  methods: {
   
    addProduct() {

      if (this.details.title == null || this.details.title == '') {
        this.errors.title = true;
      } else {
        this.errors.title = false;
      }

      if (this.details.price == null|| this.details.price == '') {
        this.errors.price = true;
      }else{
        this.errors.price = false;
      }

      if(this.errors.title || this.errors.price) {
        return;
      }


      let array = [];
      if (localStorage.getItem('products') == null) {
        console.log('test')
      } else { 
        array = JSON.parse(localStorage.getItem('products'))
      }

      const imgPath = document.querySelector('#fileInput').files[0];
      const reader = new FileReader();

      const row = {
        title: this.details.title,
        price: this.details.price,
        image: '',
      }
      reader.addEventListener("load", function () {
          row.image = reader.result;
          array.push(row);
          localStorage.setItem('products', JSON.stringify(array))
      }, false);

      if (imgPath) {
          reader.readAsDataURL(imgPath);
      }

      this.$router.go();
    },
    editRow() {
      this.$emit('editRow', this.row) 
      this.$emit('toggleFunc');
    }
  },
}