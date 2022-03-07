
export default {

  data() {
    return {
      data: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    login() {
      if (localStorage.getItem('users') == null) {
        alert('Ska user')
      } else {
        let users = JSON.parse(localStorage.getItem('users'));

        let check = users.filter(x => x.email == this.data.email && x.password == this.data.password)

        console.log(check)
        if (check.length > 0) {
          this.$router.push({ name: 'user' })
        } else {
          alert('Kyqja ne faqe behet vetem per admina')
          
        }
      }
    }
  }

};
