<template>
    <div class="navbar">
        <div class="nav">

            <div class="header-logo">
                <!-- About me -->
                <span style="color:#4285f4;" data-v-c226fde6="">A</span>
                <span style="color:#ea4335;" data-v-c226fde6="">b</span>
                <span style="color:#fbbc05;" data-v-c226fde6="">o</span>
                <span style="color:#4285f4;" data-v-c226fde6="">u</span>
                <span style="color:#34a853;" data-v-c226fde6="">t</span>
                <span style="color:transparent;" data-v-c226fde6="">.</span>
                <span style="color:#4285f4;" data-v-c226fde6="">M</span>
                <span style="color:#ea4335;" data-v-c226fde6="">e</span>
               
            </div>

            <div class="dropdown-header">

                <input type="text" class='box-header' autocomplete="off" v-model="questionData.question" />
                <!-- <label for="search" class="search-header">⌕</label> -->
                <div class="icons">
                    <div class="seprator"> | </div>
                    <i class='bx bxs-microphone header-mic'></i>
                    <fa icon='magnifying-glass' class="search-header"></fa>
                </div>
            </div>
        </div>

        <div class="nav-header">
            <a href="mailto:official.shriraang@gmail.com" class="mail-header">Gmail</a>
            <router-link to="/about" class="images-header">Images</router-link>
            <img alt="flask-logo" src="../assets/flask-outline.svg" class="flask-header">
            <i class="fa fa-th" aria-hidden="true"></i>
            <i class="fa-sharp fa-solid fa-braille"></i>
            <fa icon="braille" class="grid-header" />
        </div>
    </div>
    
    <div class="nav-bar2">
        <div class="nav2-content">
            <span><fa icon='magnifying-glass' class="icons-subheader"></fa> All</span>
            <span><fa icon='image' class="icons-subheader"></fa> Images</span>
            <span><fa :icon="['fab', 'youtube']" class="icons-subheader"></fa> Videos</span>
            <span><fa icon='book-bookmark' class="icons-subheader"></fa> Books </span>
            <span><fa :icon="['far', 'newspaper']" class="icons-subheader"></fa> News </span>
            <span><fa icon='ellipsis-vertical' class="icons-subheader"></fa> More </span>
            <span style="margin-left: 100px; color:#5f6368"> Tools </span>

        </div>
    </div>
   
    <!-- <div v-if="questionData"> -->
        <!-- <div>{{ questionData.question }}</div> -->
        <!-- <div v-html="questionData.answer" class="heading"></div> -->
       
        <!-- <iframe width="1600" height="1200" src="https://lookerstudio.google.com/embed/reporting/91bdf505-5ace-4cc1-b2bd-69f43ff5e089/page/txrhD" frameborder="0" style="border:0" allowfullscreen></iframe> -->
        
        <!-- <div v-html="questionData.answer2" class="sub-heading"></div>
        <div v-html="questionData.answer3" class="content"></div>
        <router-link to="/about" v-html="questionData.answer1" class="content"></router-link> -->
    <!-- </div> -->
    <div>
        <h1>Hello Guys</h1>
        <div v-if="questionData">
            <p>Question ID: {{ questionData.id }}</p>
            <p>Question: {{ questionData.question }}</p>
            <p>Answer File: {{ questionData.answerFile }}</p>
            <router-link :to="{ name:'Answer', params: { id:questionData.id } }">
                <component :is="answerComponentName"></component>
            </router-link>
        </div>
    </div>
</template>

<script>
import questionData from '@/questions.json';


export default {
    name: 'QuestionPage',
    computed: {
        answerComponentName() {
            // const questionId = parseInt(this.$route.params.id);
            // const out = questionData.find((q) => q.id === parseInt(questionId));
            // return out;
            console.log("this.questionData:", this.questionData);
            console.log("this.questionData.answerFile:", this.questionData.answerFile);
            return this.questionData ? this.questionData.answerFile : null;
        }
    },
    data() {
        return {
            questionData: null
        };
    },
    methods:{
        loadAnswerComponent(){
            const questionId = parseInt(this.$route.params.id);
            this.questionData = questionData.find((q) => q.id === questionId);
            console.log("Loaded Question Data:", this.questionData);
        },
    },
    created() {
        this.loadAnswerComponent();
    },
    watch: {
        '$route.params.id': 'loadAnswerComponent'
    },
}
</script>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    margin-top: -10px;
}

.nav {
    /*border: 1px solid #6d6d6d;
    border-radius: 100px;*/
    padding-top: 30px;
}

.header-logo {
    font-size: 24px;
    font-weight: bold;
    margin-left: 72px;
    margin-right: 36px;
    height: 30px;
    width: 90px;
}

.dropdown-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.box-header {
    width: 692px;
    height: 46px;
    border: 1px solid #eee;
    box-shadow: 3px 3px 5px -2px #cacaca;
    border-radius: 30px;
    margin-left: 10px;
    padding-left: 18px;
    font-size: 17px;
    outline: none;
}

.box-header:hover {
    box-shadow: 2px 2px 6px 1px #cacaca;
}

.icons {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-111px);
}

.seprator {
    font-size: 24px;
    color: #cecece;
    font-weight: 100;
}

.search-header {
    color: royalblue;
    font-size: 18px;
    margin-left: 22px;
    transform: translateX(0px);
}

.header-mic {
    font-size: 20px;
    margin-left: 22px;
    transform: translateX(0px);
}

.nav-header {
    margin-top: 0px;
    margin-top: -10px;
    margin-right: 48px;
    display: flex;
    transform: translateX(-90px);
}


.images-header,
.mail-header {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
    font-size: 13px;
    font-family: 'arial', sans-serif;
    font-weight: 500;
    margin-top: 7px;
}

.images-header {
    margin-left: 24%;
    margin-right: 24%;
}

.images-header:hover {
    text-decoration: underline;
}

.mail-header:hover {
    text-decoration: underline;
}

.flask-header {
    display: flex;
    height: 23px;
    width: 23px;
    margin-right: 24%;
    margin-top: 5px;

}

.grid-header {
    display: flex;
    height: 23px;
    width: 23px;
    margin-right: 24%;
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 13px;
    font-family: 'arial', sans-serif;
    font-weight: 500;
}

.nav2-content{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 11%;
    font-size: 14px;;
    color: #5f6368;
}

.icons-subheader{
    color: #5f6368;
    font-size: 14px;
    margin-left: 22px;
}

.heading {
    color: #5f6368;
    font-size:30px;
    font-weight: 600;
}

.sub-heading {
    color: blue;
}

.content {
    color: green;
}
</style>