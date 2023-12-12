<template>
   
    <div v-if="loading" class="loading-indicator">
        <div class="spinner"></div>
        <span>Loading....</span><br>
        <span>please view in Desktop mode for better view</span>
    </div>
    <div v-else class="container">
        <iframe 
        class="dashboard" 
        src="https://lookerstudio.google.com/embed/reporting/91bdf505-5ace-4cc1-b2bd-69f43ff5e089/page/txrhD" 
        frameborder="0" 
        style="border:0" 
        allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: 'StatsPage',
    data(){
        return{
            loading: true,
        };
    },
    methods: {
        trackPageView(pagePath, pageTitle) {
            this.$gtag.pageview({
                page_path:pagePath,
                page_title:pageTitle})
        },
    },
    mounted(){
        setTimeout(() => {
            this.loading = false;
        }, 4000);
    },
    created() {
        this.trackPageView('/stats', 'Stats Page');
    },
   
}
</script>

<style scoped>

.loading-indicator {
    /* Style your loading indicator here */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-size: 24px;
    /* Add background/color/animations for better UI/UX */
}

.spinner{
    border: 4px solid rgba( 0, 0, 0, 0.1);
    border-top:4px solid #3498db;
    border-radius: 50%; 
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
}

@keyframes spin{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

.dashboard{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
        /*width="1600" 
        height="2000"*/

/*@media only screen and (max-width: 320px) {
    .dashboard{
        display:flex;
        height:380px !important;
    } 
}*/
</style>