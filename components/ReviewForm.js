app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Deixa una valoració!</h3>
      <label for="name">Nom:</label>
      <input id="name" v-model="name">
  
      <label for="review">Comentari:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Valoració:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    
      <input class="button" type="submit" value="Submit">  
  
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
          alert('Review is incomplete. Please fill out every field.')
          return
        }
  
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,

  
        }
        this.$emit('review-submitted', productReview)
  
        this.name = ''
        this.review = ''
        this.rating = null

  
      }
    }
  })