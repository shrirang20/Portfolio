<template>
    <div class="nav">
        <a href="mailto:official.shriraang@gmail.com" class="mail">Gmail</a>
        <router-link to="/" class="images">Images</router-link>
        <img alt="flask logo" src="../assets/flask-outline.svg" class="flask">
        <i class="fa fa-th" aria-hidden="true"></i>
        <i class="fa-sharp fa-solid fa-braille"></i>
        <fa icon="braille" class="grid" />
    </div>

    <div class="name">
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

    <div class="dropdown">
        <label for="search" class="search">⌕</label>
        <input :class="isBoxActive ? 'box-active' : 'box'" @click="dropdownActive()" v-model="selectedQuestion"
            autocomplete="off" />
        <i class='bx bxs-microphone custom-mic'></i>

        <div class="questions" :class="showQuestions ? 'questions-active' : 'questions'" v-show="showQuestions">
            <div class="content">
                <ul>
                    <li v-for="question in Object.keys(questionsAnswers)" :key="question" @click="selectQuestion(question)">
                        <!-- @click="selectQuestion(question) -->
                        <div class="roow">
                            <div class="cell-1">
                                <fa :icon="['far', 'clock']" class="clock-icon"></fa>
                            </div>
                            <div class="cell-2">
                                <span class="question">{{ question }}</span>
                                <!-- <span class="question">{{ question }}</span> -->
                                <!-- /question/${encodeURIComponent(question)} -->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="isButtonActive ? 'button-active' : 'button'">
            <button class="search-btn" :class="isButtonActive ? 'search-btn' : 'search-btn-active'">Search about
                me</button>
            <button class="search-btn" :class="isButtonActive ? 'search-btn' : 'search-btn-active'">I'm Feeling
                Lucky</button>
        </div>
    </div>

    <div class="button">
        <button class="search-btn" :class="isButtonActive ? 'search-btn-active' : 'search-btn'">Search about me</button>
        <button class="search-btn" :class="isButtonActive ? 'search-btn-active' : 'search-btn'">I'm Feeling Lucky</button>
    </div>

    <div v-if="questionData">
        <component :is="answerComponentName"></component>
    </div>
</template>

<script>
import questionData from '@/questions.json';


export default {
    name: 'AboutPage',
    data() {
        return {
            showQuestions: false,
            selectedQuestion: '',
            questionsAnswers: {
                'Who is Shrirang Sapate?': 'My name is  Shrirang',
                'Where did Shrirang studied?': 'I am from India',
                'Why is Shrirang doing double bachleor\'s': 'My name is  Shrirang',
                'What are Shrirang\'s educational stats': 'I am from India',
                'What all projects Shrirang have completed?': 'My name is  Shrirang',
                'Do Shrirang have any project in Data Science?': 'My name is  Shrirang',
                'Does Shrirang have any work experience?': 'My name is  Shrirang',
                'Does Shrirang have Googliness': 'I am from India',
            },
            
            isBoxActive: false,
            isButtonActive: false,
            questionData:null,
        };
    },
    watch:{
        '$route.params.id':'loadAnswerComponent'
    },
    methods: {
        selectQuestion(question) {
            this.selectedQuestion = question;
            this.showQuestions = false;

            const output = questionData.find(q => q.question === question);
            console.log("output-about1:", output)
            if (output) {
                const selectedQuestionId = output.id
                console.log("output-about2:", output)
                console.log("SelectedQuestionId:", selectedQuestionId)
                this.$router.push(`/${selectedQuestionId}`);
            }

            // this.showModal = true;
        },

        loadAnswerComponent(){
            const questionId = parseInt(this.$route.params.id);
            const question = questionData.find(q => q.id === questionId);

            if(question){
                this.questionData = question;
            }
        },

        dropdownActive() {
            this.showQuestions = !this.showQuestions;
            this.isBoxActive = !this.isBoxActive;
            this.isButtonActive = !this.isButtonActive;
        },

    },
    created(){
        this.loadAnswerComponent();
    },
};
</script>

<style scoped>
.nav,
.images,
.mail {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
    font-size: 13px;
    font-family: 'arial', sans-serif;
    font-weight: 500;
    margin-top: 7px;
}

.images {
    margin-left: 1%;
    margin-right: 1%;
}

.images:hover {
    text-decoration: underline;
}

.mail:hover {
    text-decoration: underline;
}

.flask {
    display: flex;
    height: 23px;
    width: 23px;
    margin-right: 1%;
    margin-top: 7px;

}

.grid {
    display: flex;
    height: 23px;
    width: 23px;
    margin-right: 2%;
    margin-top: 7px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 13px;
    font-family: 'arial', sans-serif;
    font-weight: 500;
}

.custom-mic {
    font-size: 24px;
    color: #4285f4;
    /*transform: translateX(-200%);*/
    position: relative;
    z-index: 1;
    right: 2em;

}

.name {
    font-size: 70px;
    font-family: 'Open Sans Variable', sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 250px;
    font-weight: 600;
}

.search {
    font-size: 30px;
    /*transform: translateX(200%);*/
    position:relative;
    z-index: 1;
    left: 1.2em;
}

.box {
    min-width: 500px;
    height: 50px;
    border-radius: 30px;
    border: 2px solid #eeee;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 0%;
    /*margin-bottom: 20px;*/
    padding-left: 42px;
    box-shadow: none;
    outline: none;
}

.box:hover {
    /* New styles for the inputs on focus */
    box-shadow: 3px 3px 5px -2px #cacaca;
}

.button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    z-index: 1;
    /*border: 2px solid black;*/
}

.search-btn {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid transparent;
    font-size: 14px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 1%;
    margin-bottom: 20px;
    background-color: #f8f9fa;
    color: black;
}

.search-btn:hover {
    /* New styles for the buttons on hover */
    border: 2px solid #cacaca50;
}

.questions {
    position: relative;
    border: 1px solid #ccc;
    max-width: 500px;
    max-height: 200px;
    /* overflow-y: scroll; */
    margin-left: 50%;
    padding-left: 12px;
    background-color: #cccc;
    display: flex;
    justify-content: flex-start;
    transform: translateX(-50%);
    border-radius: 0 0 0px 0px;
    text-decoration: none;


}

.content {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow-y: auto;
    overflow-x: auto;
    margin-right: 50px;
    align-items: flex-start;
    margin: 12px;
}

.questions .content ul li:hover {
    background-color: #eee;

}

.content::-webkit-scrollbar {
    width: 10px;
    /* width of the entire scrollbar */
}

.content::-webkit-scrollbar-track {
    border-radius: 20px
}

.content::-webkit-scrollbar-thumb {
    border-radius: 20px;
    /* roundness of the scroll thumb */
}

.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.dropdown ul {
    list-style-type: none;
    padding: 5px;
}

.box-active {
    min-width: 500px;
    height: 50px;
    border: 2px solid #eeee;
    font-size: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-left: 0%;
    /* margin-bottom: 20px; */
    padding-left: 42px;
    box-shadow: none;
    outline: none;
    border-radius: 30px 30px 0 0;
    border-bottom: none;
    position: relative;
}

.questions-active {
    /* New styles for the active dropdown */
    position: relative;
    background-color: #ffffff;
    width: 500px;
    left: -3px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    /* border-bottom: none; */
    justify-content: flex-start;
    border: 2px solid #eeee;
    border-bottom: none;
}

.search-btn-active {
    /* New styles for the active buttons */
    display: none;
}

.button-active {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 20px;
    z-index: 1;
    border: 2px solid #eeee;
    width: 500px;
    margin-left: 50%;
    transform: translateX(-253px);
    border-radius: 0 0 30px 30px;
    height: 69px;
    background-color: white;
    border-top: none;
}

.clock-icon {
    margin-right: 10px;
    color: #c6c6c6;
    font-size: 14px;
}

.roow {
    display: flex;
    flex-direction: row;
}

.question {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.700);
}

/* For screens wider than 768px */
@media only screen and (min-width: 768px) {
    
    .nav {
      display: flex;
      /*justify-content: space-between;*/
      margin-top: 20px;
      justify-content: flex-end;
    }
  
    .name {
      margin-top: 12rem;
      text-align: center;
    }
  
    /*.search {
      margin-top: 0px;
    }
  
    .box {
      margin-top: 0px;
    }
  
    .questions {
      margin-left: 0px;
      transform: translateX(0px);
    }
  
    .button {
      margin-top: 0px;
    }*/
}

/* For screens between 576px and 768px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .nav {
      display: flex;
      margin-top: 20px;
      justify-content: flex-end;
    }
  
    .name {
      margin-top: 12rem;
      text-align: center;
    }
  
    /*.search {
      margin-top: 0px;
    }
  
    .box {
      margin-top: 0px;
    }
  
    .questions {
      margin-left: 0px;
      transform: translateX(0px);
    }
  
    .button {
      margin-top: 0px;
    }*/
  }
  
  /* For screens smaller than 576px */
  /*@media (min-width: 321px) and (max-width: 575px) {
    .nav {
      display: flex;
      margin-top: 20px;
      justify-content: flex-end;
    }
  
    .name {
      margin-top: 250px;
      text-align: center;
    }
  
   /* .search {
      margin-top: 0px;
    }
  
    .box {
      margin-top: 0px;
    }
  
    .questions {
      margin-left: 0px;
      transform: translateX(0px);
    }
  
    .button {
      margin-top: 0px;
    }
}

/* @media (max-width:320){
    .nav{
        display: flex;
        justify-content: flex-end;
    }

    .name{
        margin-top: 250px;
        text-align: center;
    }

} -*/

@media (min-width:443px) and (max-width:575px){

    .nav{
        display: flex;
        justify-content: flex-end;
    }
    .name{
        margin-top: 12rem;
        text-align: center;
        font-size: 50px ;
    }
    /*.search{
        transform: translate(15px);
        z-index: 1;
    }*/

    .box{
        min-width: 25rem;
        margin-left: 0%;
        transform: translateX(0px);
        padding-left: 12px;
        position: relative;
    }

    .box-active{
        min-width: 25rem;
        margin-left: 0%;
        transform: translateX(0px);
        padding-left: 12px;
        position: relative;
    }

    .custom-mic{
        /*transform: translateX(-150%);*/
        position: relative;
        left:-3rem;
    }

    .questions-active{
        position: relative;
        left: -0.2rem;
        max-width: 25rem;
        padding-left: 12px;
        
        /*transform: translateX(0px);
        transform: translateX(35px);*/

    }

    .button-active{
        position: relative;
        display: flex;
        left: 3.1rem;
        width: 25rem;
        justify-content: space-evenly;
        /*justify-content: center;
        align-items: center;
        margin-top:20px;
        margin-bottom: 20px;
        z-index: 1;
        border: 2px solid #eeee;
        width:300px;
        margin-left: 50%;
        transform: translateX(-150px);
        border-radius: 0 0 30px 30px;
        height: 69px;
        background-color: white;
        border-top:none;*/
    }
    .content{
        text-align: start;
    }
}
@media (min-width:362px) and (max-width:442px){

    .nav{
        display: flex;
        justify-content: flex-end;
    }
    .name{
        margin-top: 250px;
        text-align: center;
        font-size: 40px ;
    }
    /*.search{
        transform: translate(15px);
        z-index: 1;
    }*/

    .box{
        min-width: 20rem;
        margin-left: 0%;
        transform: translateX(0px);
        padding-left: 15px;
        position: relative;
    }

    .box-active{
        min-width: 20rem;
        margin-left: 0%;
        transform: translateX(0px);
        padding-left: 12px;
        position: relative;
    }

    .custom-mic{
        /*transform: translateX(-150%);*/
        position: relative;
        right:2em;
    }

    .questions-active{
        position: relative;
        left: -0.2rem;
        max-width: 20rem;
        padding-left: 12px;
        max-height:14rem;
        /*transform: translateX(0px);
        transform: translateX(35px);*/

    }
    .button-active{
        position: relative;
        display: flex;
        left: 5.6rem;
        width: 20rem;
    }
    
    .content{
        text-align: start;
    }

    .button-active .search-btn{
        width: 8rem;
        height: 3rem;
        font-size: 13px;
    }
}
@media (min-width:322px) and (max-width:361px){

    .nav{
        display: flex;
        justify-content: flex-end;
    }
    .name{
        margin-top: 12rem;
        text-align: center;
        font-size: 38px ;
    }
    /*.search{
        transform: translate(15px);
        z-index: 1;
    }*/

    .box{
        min-width: 19rem;
        left: -0.5rem;
        transform: translateX(0px);
        padding-left: 15px;
        position: relative;
    }

    .box-active{
        min-width: 19rem;
        left: -0.5rem;
        transform: translateX(0px);
        padding-left: 15px;
        position: relative;
    }

    .custom-mic{
        /*transform: translateX(-150%);*/
        position: relative;
        display: none;
    }

    .questions-active{
        position: relative;
        left: 0.05rem;
        max-width: 19rem;
        padding-left: 12px;
        
        /*transform: translateX(0px);
        transform: translateX(35px);*/

    }
    .button-active{
        position: relative;
        display: flex;
        left: 6.37rem;
        width: 19rem;
    }
    
    .content{
        text-align: start;
    }

    .button-active .search-btn{
        width: 8rem;
        height: 3rem;
        font-size: 13px;
    }
}
@media (max-width:321px){

    .nav{
        display: flex;
        justify-content: flex-end;
    }
    .name{
        margin-top: 12rem;
        text-align: center;
        font-size: 38px ;
    }
    /*.search{
        transform: translate(15px);
        z-index: 1;
    }*/

    .box{
        min-width: 17rem;
        left: -0.5rem;
        transform: translateX(0px);
        padding-left: 15px;
        position: relative;
    }

    .box-active{
        min-width: 17rem;
        left: -0.5rem;
        transform: translateX(0px);
        padding-left: 15px;
        position: relative;
    }

    .custom-mic{
        /*transform: translateX(-150%);*/
        position: relative;
        display: none;
    }

    .questions-active{
        position: relative;
        left: -0.5rem;
        max-width: 17rem;
        padding-left: 12px;
        
        /*transform: translateX(0px);
        transform: translateX(35px);*/

    }
    .button-active{
        position: relative;
        display: flex;
        left: 6.87rem;
        width: 17rem;
    }
    
    .content{
        text-align: start;
    }

    .search-btn{
        width: 8rem;
        height: 3rem;
        font-size: 13px;
    }
    .button-active .search-btn{
        width: 8rem;
        height: 3rem;
        font-size: 13px;
    }
}
/*@media (max-width:442px){

    .nav{
        display: flex;
        justify-content: flex-end;
    }
    .name{
        margin-top: 250px;
        text-align: center;
        font-size: 40px ;
    }
    /*.search{
        transform: translate(15px);
        z-index: 1;
    }*/

   /* .box{
        min-width: 300px;
        margin-left: 0%;
        transform: translateX(0px);
        padding-left: 12px;
    }

    .custom-mic{
        transform: translateX(-150%);
    }
}
@media (max-width:321px){

    .nav{
        display: flex;
        justify-content: flex-end;
    }
    .name{
        margin-top: 250px;
        text-align: center;
        font-size: 30px ;
    }
    /*.search{
        transform: translate(15px);
        z-index: 1;
    }*/

   /* .box{
        min-width: 200px;
        margin-left: 0%;
        transform: translateX(0px);
        padding-left: 12px;
    }

    .custom-mic{
        transform: translateX(-150%);
    }
}
*/

</style>