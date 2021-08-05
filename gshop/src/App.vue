<template>
  <div class="content">
    <router-view />
  </div>
  <FooterGuide></FooterGuide>
</template>

<script>
  import FooterGuide from './components/FooterGuide'
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
      }
    },
    components: {
      FooterGuide
    },
    methods: {
      ...mapActions(['get_Address', 'get_Nav', 'get_Shops', 'get_Verify'])
    },
    mounted() {
      // console.log(this.$store.state);
      /*this.$store.dispatch('get_Address');
      this.$store.dispatch('get_Nav');
      this.$store.dispatch('get_Shops')*/
      this.get_Address();
      this.get_Nav();
      this.get_Shops();
      this.get_Verify()
    },
    created() {
      // console.log(this.$store.state);
      // this.$store.dispatch('get_Address');
      // this.$store.dispatch('get_Nav');
      // this.$store.dispatch('get_Shops')
    }
  }
</script>

<style lang="less">
  .content{
    padding: 45px 0 50px 0;

  }
</style>
