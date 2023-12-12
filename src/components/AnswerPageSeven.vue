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
                <input type="text" class='box-header' autocomplete="off" value="Does Shrirang have any work experience?" />
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
            <router-link to="#" class="images-header">Images</router-link>
            <img alt="flask-logo" src="../assets/flask-outline.svg" class="flask-header">
            <i class="fa fa-th" aria-hidden="true"></i>
            <i class="fa-sharp fa-solid fa-braille"></i>
            <fa icon="braille" class="grid-header" />
        </div>
    </div>
    <div class="nav-bar2">
        <div class="nav2-content">
            <span>
                <fa icon='magnifying-glass' class="icons-subheader"></fa> All
            </span>
            <span>
                <fa icon='image' class="icons-subheader"></fa> Images
            </span>
            <span>
                <fa :icon="['fab', 'youtube']" class="icons-subheader"></fa> Videos
            </span>
            <span>
                <fa icon='book-bookmark' class="icons-subheader"></fa> Books
            </span>
            <span>
                <fa :icon="['far', 'newspaper']" class="icons-subheader"></fa> News
            </span>
            <span>
                <fa icon='ellipsis-vertical' class="icons-subheader"></fa> More
            </span>
            <span style="margin-left: 100px; color:#5f6368"> Tools </span>

        </div>
    </div>
    <div class="section1">
        <div class="border"></div>
        <div class=" search-result">
            <div class="result">
                <!-- <h2>Indian Institute of Technology, Madras, and</h2>
        <h2>Rashtrasant Tukadoji Maharaj Nagpur University</h2> -->
                <li><b style=" background-color: #e5edff;">Data Science, Intern - Genik Research Instittue (August 2021-
                        January
                        2022)</b></li>
                <li><b style=" background-color: #e5edff;">Data Science, Trainee - Hiclousia Recruitment, IIT Madras
                        Research
                        Park (May 2022- November 2022)</b></li>
                <br>
                <small>Shrirang's journey encompasses immersive experiences, including research internships and practical
                    applications in Machine Learning and Data Science.
                    During his tenure at Genik Research Institute for 6 months, he delved into developing a predictive model
                    for
                    ecological preservation. Subsequently, his 6-month stint at Hiclousia Recruitment, IIT Madras Research
                    Park,
                    involved intensive hands-on work in Data Science applications. These experiences have notably
                    contributed to
                    his
                    expertise and proficiency in these fields.</small>
            </div>
            <div class="content">
                <router-link to="/shrirang-sapate/timeline" class="heading1">Know Shrirang Sapate</router-link>
                <!-- <div class="heading1">Know about Shrirang</div> -->
                <div class="slug">
                    <router-link to="/shrirang-sapate#timeline">https://know-about-shrirang-sapate.com <fa
                            icon='ellipsis-vertical' class="icons-subheader"></fa></router-link>
                    <!-- <span>https://know-about-shrirang-sapate.com <fa icon='ellipsis-vertical' class="icons-subheader"></fa></span> -->
                </div>
                <div class="context">Meet Shrirang Sapate, a trailblazing Data Science student at IIT Madras. From probing
                    the
                    depths of Astrophysics alongside NASA for three stellar years, he's now charting the frontiers of Data
                    Science.
                    He's not just crunching numbers; he's published a Machine Learning gem during an internship and ignited
                    campus
                    culture with his vibrant event leadership.</div>
            </div>

        </div>

        <div class="border"></div>
    </div>

    <div class="content">
        <router-link to="/shrirang-sapate" class="heading1">Know Shrirang Sapate</router-link>
        <!-- <div class="heading1">Know about Shrirang</div> -->
        <div class="slug">
            <router-link to="/shrirang-sapate">https://know-about-shrirang-sapate.com <fa icon='ellipsis-vertical'
                    class="icons-subheader"></fa></router-link>
            <!-- <span>https://know-about-shrirang-sapate.com <fa icon='ellipsis-vertical' class="icons-subheader"></fa></span> -->
        </div>
        <div class="context">Meet Shrirang Sapate, a trailblazing Data Science student at IIT Madras. From probing the
            depths of Astrophysics alongside NASA for three stellar years, he's now charting the frontiers of Data Science.
            He's not just crunching numbers; he's published a Machine Learning gem during an internship and ignited campus
            culture with his vibrant event leadership.</div>
    </div>

    <div class="content">
        <router-link to="/stats" class="heading1">Know Shrirang's Analytical insights</router-link>
        <!-- <div class="heading1">Know about Shrirang</div> -->
        <div class="slug">
            <router-link to="/stats">https://shrirang-sapate-analytics.com <fa icon='ellipsis-vertical'
                    class="icons-subheader"></fa></router-link>
            <!-- <span>https://know-about-shrirang-sapate.com <fa icon='ellipsis-vertical' class="icons-subheader"></fa></span> -->
        </div>
        <div class="context">Shrirang's analytics journey at IIT Madras showcased growth across nine pivotal phases. From
            engineering fundamentals to cultural leadership, he honed technical proficiency, research methodology, and
            visionary leadership, impacting peers and fostering community engagement.</div>
    </div>

    <div class="content">
        <a href="https://in.linkedin.com/in/shriraangsapaate" class="heading1">Shriraang Sapate</a>
        <div class="slug">
            <a href="https://in.linkedin.com/in/shriraangsapaate">https://in.linkedin.com/in/shriraangsapaate <fa
                    icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">Chennai, Tamil Nadu, India · Akord Music Society<br>
            I am a motivated Data Analyst with expertise in data science and application. I possess a strong background in
            developing machine learning models and ...</div>
    </div>

    <div class="content">
        <a href="https://arxiv.org/abs/2111.04003" class="heading1">Predictive Model for Gross Community Production Rate of
            ...</a>
        <div class="slug">
            <a href="https://arxiv.org/abs/2111.04003">https://arxiv.org > cs <fa icon='ellipsis-vertical'
                    class="icons-subheader"></fa></a>
        </div>
        <div class="context">by S Sapate · 2021 — ... Shrirang Sapate, Reenasree S, Vigneash M. Download a PDF of the paper
            titled Predictive Model for Gross Community Production Rate of Coral ...</div>
    </div>

    <div class="content">
        <a href="https://arxiv.org/pdf/2111.04003" class="heading1">Predictive Model for Gross Community Production Rate of
            ...</a>
        <div class="slug">
            <a href="https://arxiv.org/pdf/2111.04003">https://arxiv.org > pdf <fa icon='ellipsis-vertical'
                    class="icons-subheader"></fa></a>
        </div>
        <div class="context">by S Sapate · 2021 — ... Shrirang Sapate,. Reenasree S, Vigneash M. C. Page 2. 2. Anthropogenic
            activities like chemical pollution, industrial pollution, mechanical damage, nutrient ...</div>
    </div>

    <div class="content">
        <a href="https://www.ijser.org/researchpaper/Comparative-study-on-designs-of-air-propelled-rocket-for-achieving-higher-altitude.pdf"
            class="heading1">Comparative-study-on-designs-of-air-propelled-rocket-for- ...</a>
        <div class="slug">
            <a
                href="https://www.ijser.org/researchpaper/Comparative-study-on-designs-of-air-propelled-rocket-for-achieving-higher-altitude.pdf">https://www.ijser.org
                > researchpaper > Comparative-Stud... <fa icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">Shrirang Sapate [1], Vikram Londhe [2]. Abstract- Model rockets are essentially unguided models
            of a rocket that are a paramount mode to learn and simulate ...
        </div>
    </div>

    <div class="content">
        <a href="https://app.onlinedegree.iitm.ac.in/student/21F1002870" class="heading1">Shrirang Sapate - IIT Madras
        </a>
        <!-- <div class="heading1">Know about Shrirang</div> -->
        <div class="slug">
            <a href="https://app.onlinedegree.iitm.ac.in/student/21F1002870">https://app.onlinedegree.iitm.ac.in/student/21F1002870
                <fa icon='ellipsis-vertical' class="icons-subheader"></fa>
            </a>
            <!-- <span>https://know-about-shrirang-sapate.com <fa icon='ellipsis-vertical' class="icons-subheader"></fa></span> -->
        </div>
        <div class="context">Shrirang Sapate is a curious and dedicated individual with a strong academic background in
            Data
            Science. He enjoys listening & composing music, and believes in the importance of maintaining a healthy
            work-life balance..</div>
    </div>

    <div class="content">
        <a href="https://www.instagram.com/_shriraang_/" class="heading1">Shriraang Sapaate(@_shriraang_) • Instagram photos
            and...</a>
        <div class="slug">
            <a href="https://www.instagram.com/_shriraang_/">https://www.instagram.com > shrira... <fa
                    icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">
            914 Followers, 1,085 Following, 42 Posts - See Instagram photos and videos from shrirang (@shrirangswarge)
        </div>
    </div>

    <div class="content">
        <a href="https://www.youtube.com/watch?v=K-UkKcH79YI" class="heading1">Paradox Cultural Team | IIT Madras</a>
        <div class="slug">
            <a href="https://www.youtube.com/watch?v=K-UkKcH79YI">https://www.youtube.com > watch <fa
                    icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">
            Shrirang Sapate. 23. Subscribe. 23 subscribers. 1. Share. Save. Report. Comments. 2:45·Go to channel. IIT Madras
            Hostel Willkommen'14 150 sec Short Film ...
        </div>
    </div>

    <div class="content">
        <a href="https://www.iitmbs.org/societies/akord" class="heading1">Akord Music Society - IIT Madras BS Students</a>
        <div class="slug">
            <a href="https://www.iitmbs.org/societies/akord">https://www.iitmbs.org > socities > akord <fa
                    icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">
            Core team. Shrirang Sapate. 21f1002870@ds.study.iitm.ac.in. quick links. Student ... All rights reserved © 2023
            IIT Madras BS Students Community Website ...
        </div>
    </div>

    <div class="content">
        <a href="https://study.iitm.ac.in/ds/" class="heading1">IIT Madras Degree Program in Data Science and ...</a>
        <div class="slug">
            <a href="https://study.iitm.ac.in/ds/">https://study.iitm.ac.in > ... <fa icon='ellipsis-vertical'
                    class="icons-subheader"></fa></a>
        </div>
        <div class="context">
            IIT Madras, India's top technical institute, welcomes you to the world's first 4-year Bachelor of Science (BS)
            Degree in Data Science and Applications with ...
            <br>Academics page · Admissions · Academic Calendar · About IITM
        </div>
    </div>

    <div class="content">
        <a href="https://conf1.ncra.tifr.res.in/event/4/registrations/participants" class="heading1">Modern Engineering
            Trends in Astronomy - 2019 - Indico NCRA</a>
        <div class="slug">
            <a href="https://conf1.ncra.tifr.res.in/event/4/registrations/participants">https://conf1.ncra.tifr.res.in >
                registrations > participants <fa icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">
            Shrirang, Sapate, Natskies observatory. Shuvam, Bosana, IIIT BANGALORE. Shyama, Narendranath, Indian space
            research organisation. Somashekar, Ramaiah, Raman ...
        </div>
    </div>

    <div class="content">
        <a href="https://ja.wikipedia.org/wiki/AT2018cow" class="heading1">AT2018cow</a>
        <div class="slug">
            <a href="https://ja.wikipedia.org/wiki/AT2018cow">https://ja.wikipedia.org > wiki <fa icon='ellipsis-vertical'
                    class="icons-subheader"></fa></a>
        </div>
        <div class="context">
            Sapate, Shrirang (2018年7月21日). “AT 2018 COW - the mysterious Supernova”. Natskies Observatory. 2019年2月8日閲覧。
            Anderson, Paul Scott (2018年7月1日) ...
        </div>
    </div><br>

    <!-- <div class='content'>Lorem Ipsum is simply dummy text...</div> -->
</template>

<script>
export default {
    name: 'AnswerPageSeven',
    methods: {
        trackPageView(pagePath, pageTitle) {
            this.$gtag.pageview({
                page_path:pagePath,
                page_title:pageTitle})
        },
    },
    created() {
        this.trackPageView('/7', 'AnswerPageSeven');
    },
}
</script>

<style scoped>
@media (max-width:2560px) {

    .result {
        display: flex;
        flex-direction: column;
        width: 38rem !important;
        position: relative;
        top: 0rem;
    }

    .search-result{
        left: 2.5rem ;
        position: relative;
        top: 1rem;
    }
}

@media (max-width:1440px) {

    .result {
        display: flex;
        flex-direction: column;
        width: 38rem !important;
        position: relative;
        top: 0rem;

    }
    .search-result{
        left: -0.7rem ;
        position: relative;
        top: 1rem;
    }
}
@media (max-width:1024px) {

    .result {
        display: flex;
        flex-direction: column;
        width: 35rem !important;
        position: relative;
        top: 0rem;

    }
    .search-result{
        left: -2rem ;
        position: relative;
        top: 1rem;
    }
}

@media (max-width:768px) {

    .result {
        display: flex;
        flex-direction: column;
        width: 35rem !important;
        position: relative;
        top: -3rem;
    }
    .search-result{
        left: -3rem ;
        position: relative;
        top: 1rem;
    }
}

@media (max-width:425px) {

    .result {
        display: flex;
        flex-direction: column;
        width: 21rem !important;
        position: relative;
        top: -3rem;
        font-size: 18px !important;
    }
    .search-result{
        left: -2rem ;
        position: relative;
        top: 1rem;
    }
}

@media (max-width:375px) {

    .result {
        display: flex;
        width: 19rem !important;
        font-size: 18px !important;
    }
    .search-result{
        left: -1.5rem ;
        position: relative;
        top: 1rem;
    }
}

@media (max-width:320px) {

    .result {
        display: flex;
        width: 17rem !important;
        font-size: 18px;
    }
}

.section1 {
    display: flex;
    flex-direction: column;
}


.search-result {
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    margin-left: 7%;
}

.result {
    margin-left: 12%;
    /*margin-right: 65rem;*/
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 500;
    font-family: sans-serif;
    color: #202124;
    text-align: justify;
    line-height: 24px;
    display: flex;
    flex-direction: column;
}

.result h2 {
    font-size: 24px;
    font-family: sans-serif;
}

.result small {
    /*background-color: #E5EDFF;*/
    padding: 3px;
}

.result li {
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.result li b {
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
}

.content {
    display: flex;
    flex-direction: column;
    margin-left: 12%;
    margin-top: 1%;
    margin-bottom: 1%;
    width: 600px;
    overflow: hidden;
    align-items: flex-start;
}

.content a {
    text-decoration: none;
    color: #1a0dab;
}

.content a:hover {
    cursor: pointer;
    text-decoration: underline;
}

.context {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 15px;
    text-align: justify;
}

.heading1 {
    font-size: 22px;
    font-weight: 500;
    font-family: sans-serif;
    color: #1a0dab;
    float: left;
    margin-right: 10px;
    text-align: left;
}

.heading1:hover {
    text-decoration: underline;
}

.slug {
    color: #4d5156;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
}

.slug a {
    text-decoration: none;
    color: #4d5156;
}

.slug:hover {
    text-decoration: underline;
}

.photo {
    display: flex;
    flex-direction: row;
    margin-left: 12%;
    cursor: pointer;
}

.image-container {
    width: 266px;
    height: auto;
    overflow: hidden;
    border-top-left-radius: 42px;
    border-bottom-left-radius: 42px;
}

.photo1 {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
}

.photo1:hover {
    transform: scale(1.2);
}

.column-2 {
    display: flex;
    flex-direction: column;
}

.image-container-2 {
    border: 1px solid white;
    border-top-right-radius: 42px;
    width: 350px;
    height: 185px;
    overflow: hidden;
}

.photo2 {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
}

.photo2:hover {
    transform: scale(1.2);
}

.image-container-3 {
    border: 1px solid white;
    border-bottom-right-radius: 42px;
    width: 350px;
    height: 215px;
    overflow: hidden;
}

.photo3 {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
}

.photo3:hover {
    transform: scale(1.2);
}

.image-container-5 {
    display: none;
}


.image-container-4 {
    border: 1px solid #ededed;
    width: 200px;
    height: 230px;
    overflow: hidden;
    border-top-right-radius: 42px;
    border-top-left-radius: 42px;
    margin-left: 5px;
    margin-right: 2px;
    padding: 0px;
    overflow: hidden;
}

.photo4 {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
}

.photo4:hover {
    transform: scale(1.2);
}

.context-card {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 14px;
    text-align: left;
    margin-top: -90px;
    margin-left: 5px;
    margin-right: 2px;
    padding: 9px;
    width: 200px;
    height: 258px;
    border: 1px solid #ededed;
    border-bottom-right-radius: 42px;
    border-bottom-left-radius: 42px;
    background: #e5edff;
    z-index: 1;
}


.row1 {
    display: flex;
    flex-direction: row;
}

.cards {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 1%;
    margin-right: 0%;
    margin-top: 5px;
    background-color: #E5EDFF;
    border-radius: 30px;
    padding: 20px;
    height: 192px;
}

.card2 {
    display: flex;
    flex-direction: column;
}

.age {
    font-size: 15px;
    font-weight: 500;
    font-family: sans-serif;
    color: #202124;
    float: left;
    text-align: left;
    background-color: #E5EDFF;
    line-height: 16px;
    cursor: pointer;
}

.age-value {
    font-size: 18px;
    font-weight: 500;
    font-family: sans-serif;
    color: #202124;
    float: left;
    margin-right: 5px;
    text-align: center;
    padding: 11px 12px;
    background-color: #E5EDFF;
    /* line-height: 16px; */
    /* border-radius: 100px; */
    /* padding-bottom: 10px; */
    cursor: pointer;
    margin-left: 2px;
    margin-top: 93px;
    min-width: 95px;
}

.cards-video {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 1%;
    margin-right: 0%;
    margin-top: 5px;
    background-color: #E5EDFF;
    border-radius: 30px;
    padding: 0px;
    height: 192px;
}

.video {
    width: 282px;
    height: 315px;
    margin: 0px;
    border-radius: 30px;
}

.border {
    margin-top: 30px;
    border-top: 1px solid #dadce0;
    margin-left: 12%;
    margin-right: 24%;
}

.subheader {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 12%;
    margin-right: 10%;
    margin-top: 30px;
}

.name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0%;
    margin-right: 0%;
    margin-top: 0px;
}

.heading {
    font-size: 28px;
    font-weight: 500;
    font-family: sans-serif;
    color: #202124;
    float: left;
    margin-right: 16px;
    text-align: left;
}

.side-tabs {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
}

.overview,
.Stats,
.Videos {
    font-size: 14px;
    font-weight: 500;
    font-family: sans-serif;
    color: #202124;
    float: left;
    margin: 14px 0 6px 8px;
    text-align: left;
    padding: 11px 19px;
    background-color: #E5EDFF;
    line-height: 16px;
    /*border: 1px solid; #4285f4;*/
    border-radius: 100px;
    padding-bottom: 10px;
    cursor: pointer;
    text-decoration: none;
}

.overview:hover,
.Stats:hover,
.Videos:hover {
    background-color: #c7dbff;
}

@media (max-width:320px) {
    .navbar {
        display: flex !important;
        flex-direction: column !important;
        width: 10rem;
    }

    .nav {
        width: 1rem;
    }

    .header-logo {
        display: flex;
        position: relative;
        left: -2rem;
        font-size: 30px !important;
        text-align: center;
    }

    .dropdown-header {
        position: relative;
        left: -4.6rem;
        height: 5rem;

    }

    .box-header {
        position: relative;
        max-width: 19rem;
        font-size: 14px !important;
        max-height: 2rem;
        left: 0.1rem;
    }

    .icons {
        display: none !important;
    }

    .nav-header {
        display: none !important;

    }

    .nav-bar2 {
        display: flex !important;
        flex-direction: column !important;
        width: 19rem;
        position: relative;
        left: 0rem;
        overflow: scroll;
        top: -1rem;
    }

    .nav-bar2::-webkit-scrollbar {
        width: 1rem;
        /* width of the entire scrollbar */
    }

    .nav-bar2::-webkit-scrollbar-track {
        border-radius: 1px
    }

    .nav-bar2::-webkit-scrollbar-thumb {
        border-radius: 1px;
        /* roundness of the scroll thumb */
    }

    .nav2-content {
        font-size: 13px !important;
    }

    .nav2-content .icons-subheader {
        font-size: 13px !important;
        position: relative;
        left: -0.7rem;
        margin-bottom: 0.2rem;
    }

    .nav2-content span {
        display: flex !important;
        flex-direction: column !important;
        position: relative;
        margin-right: 1rem;
        left: -1rem;
    }

    .border {
        position: relative;
        left: -1.1rem;
        width: 20rem;
        top: -3rem;
    }

    .subheader {
        display: flex !important;
        flex-direction: column !important;
        margin-left: 0rem !important;
        margin-right: 0rem !important;
        margin-top: 0rem !important;
        position: relative;
        top: -2rem;
    }

    .name {
        margin-top: 0rem;
        position: relative;
        left: 1.3rem;

    }

    .heading {
        font-size: 20px;
    }

    .sub-heading {
        font-size: 13px;
    }

    .photo {
        display: flex !important;
        flex-direction: row !important;
        margin-left: 1rem !important;
        cursor: pointer;
        position: relative;
        top: -2rem;
        width: 19rem;
        height: 10rem;
        overflow-x: scroll;
    }

    .image-container {
        border-radius: 0rem;
    }

    .column-2 {
        display: flex !important;
        flex-direction: row !important;
        height: 10rem;
        width: 33rem;

    }

    .image-container-2 {
        border-radius: 0rem;
        height: auto;
        width: 16rem;
    }

    .photo2 {
        height: auto;
        width: 16rem;
    }

    .image-container-3 {
        height: auto;
        width: 12.5rem;
        border-bottom-right-radius: 0rem;
    }

    .photo3 {
        height: auto;
        width: 12.5rem;
    }

    .image-container-5 {
        display: flex !important;
        flex-direction: row !important;
        height: auto;
        width: 15rem;
    }

    .photo5 {
        height: 8.5rem;
        width: 14rem;
    }

    .card2 {
        display: none;
    }

    .data {
        display: none;
    }


    .content {
        position: relative;
        top: -2rem;
        width: 16rem;
    }

    .heading1 {
        font-size: 20px;
    }

    .slug {
        font-size: 13px;
    }

    .slug .icons-subheader {
        margin-left: 0.5rem;
    }

}

@media (min-width:321px) and (max-width:375px) {
    .navbar {
        display: flex !important;
        flex-direction: column !important;
        width: 10rem;
    }

    .nav {
        width: 1rem;
    }

    .header-logo {
        display: flex;
        position: relative;
        font-size: 30px !important;
        text-align: center;
        margin-left: 3.5rem !important;
    }

    .dropdown-header {
        position: relative;
        left: -3.5rem;
        height: 5rem;

    }

    .box-header {
        position: relative;
        max-width: 20rem;
        font-size: 15px !important;
        max-height: 2rem;
        left: 0.1rem;
    }

    .icons {
        display: none !important;
    }

    .nav-header {
        display: none !important;

    }

    .nav-bar2 {
        display: flex !important;
        flex-direction: column !important;
        width: 21rem;
        position: relative;
        left: 1rem;
        overflow: scroll;
        top: -1rem;
    }

    .nav-bar2::-webkit-scrollbar {
        width: 1rem;
        /* width of the entire scrollbar */
    }

    .nav-bar2::-webkit-scrollbar-track {
        border-radius: 1px
    }

    .nav-bar2::-webkit-scrollbar-thumb {
        border-radius: 1px;
        /* roundness of the scroll thumb */
    }

    .nav2-content {
        font-size: 14px !important;
    }

    .nav2-content .icons-subheader {
        font-size: 14px !important;
        position: relative;
        left: -0.7rem;
        margin-bottom: 0.2rem;
    }

    .nav2-content span {
        display: flex !important;
        flex-direction: column !important;
        position: relative;
        margin-right: 1rem;
        left: -1rem;
    }

    .border {
        position: relative;
        left: -1.1rem;
        width: 20rem;
        top: -3rem;
    }

    .subheader {
        display: flex !important;
        flex-direction: column !important;
        margin-left: 1rem !important;
        margin-right: 0rem !important;
        margin-top: 0rem !important;
        position: relative;
        top: -2rem;
    }

    .name {
        margin-top: 0rem;
        position: relative;
        left: 1.3rem;

    }

    .heading {
        font-size: 20px;
    }

    .sub-heading {
        font-size: 13px;

    }

    .photo {
        display: flex !important;
        flex-direction: row !important;
        margin-left: 2rem !important;
        cursor: pointer;
        position: relative;
        top: -2rem;
        width: 19rem;
        height: 10rem;
        overflow-x: scroll;
    }

    .image-container {
        border-radius: 0rem;
    }

    .column-2 {
        display: flex !important;
        flex-direction: row !important;
        height: 10rem;
        width: 33rem;

    }

    .image-container-2 {
        border-radius: 0rem;
        height: auto;
        width: 16rem;
    }

    .photo2 {
        height: auto;
        width: 16rem;
    }

    .image-container-3 {
        height: auto;
        width: 12.5rem;
        border-bottom-right-radius: 0rem;
    }

    .photo3 {
        height: auto;
        width: 12.5rem;
    }

    .image-container-5 {
        display: flex !important;
        flex-direction: row !important;
        height: auto;
        width: 15rem;
    }

    .photo5 {
        height: 8.5rem;
        width: 14rem;
    }

    .card2 {
        display: none;
    }

    .data {
        display: none;
    }


    .content {
        position: relative;
        top: -2rem;
        width: 18.5rem;
    }

    .heading1 {
        font-size: 19px;
    }

    .slug {
        font-size: 13px;
        text-align: left;
    }

    .slug .icons-subheader {
        margin-left: 0.5rem;
    }

}

@media (min-width:376px) and (max-width:425px) {
    .navbar {
        display: flex !important;
        flex-direction: column !important;
        width: 10rem;
    }

    .nav {
        width: 1rem;
    }

    .header-logo {
        display: flex;
        position: relative;
        left: -1rem;
        font-size: 35px !important;
        text-align: center;
    }

    .dropdown-header {
        position: relative;
        left: -2.6rem;
        height: 5rem;

    }

    .box-header {
        position: relative;
        max-width: 21rem;
        font-size: 16px !important;
        max-height: 2rem;
        left: 0.1rem;
    }

    .icons {
        display: none !important;
    }

    .nav-header {
        display: none !important;

    }

    .nav-bar2 {
        display: flex !important;
        flex-direction: column !important;
        width: 24rem;
        position: relative;
        left: 1rem;
        overflow: scroll;
        top: -1rem;
    }

    .nav-bar2::-webkit-scrollbar {
        width: 1rem;
        /* width of the entire scrollbar */
    }

    .nav-bar2::-webkit-scrollbar-track {
        border-radius: 1px
    }

    .nav-bar2::-webkit-scrollbar-thumb {
        border-radius: 1px;
        /* roundness of the scroll thumb */
    }

    .nav2-content {
        font-size: 13px !important;
    }

    .nav2-content .icons-subheader {
        font-size: 13px !important;
        position: relative;
        left: -0.7rem;
        margin-bottom: 0.2rem;
    }

    .nav2-content span {
        display: flex !important;
        flex-direction: column !important;
        position: relative;
        margin-right: 1rem;
        left: -1rem;
    }

    .border {
        position: relative;
        left: -1rem;
        width: 20rem;
        top: -3rem;
    }

    .subheader {
        display: flex !important;
        flex-direction: column !important;
        margin-left: 1.5rem !important;
        margin-right: 0rem !important;
        margin-top: 0rem !important;
        position: relative;
        top: -2rem;
    }

    .name {
        margin-top: 0rem;
        position: relative;
        left: 1.3rem;

    }

    .heading {
        font-size: 20px;
    }

    .sub-heading {
        font-size: 13px;
    }

    .photo {
        display: flex !important;
        flex-direction: row !important;
        margin-left: 2.5rem !important;
        cursor: pointer;
        position: relative;
        top: -2rem;
        width: 19rem;
        height: 10rem;
        overflow-x: scroll;
    }

    .image-container {
        border-radius: 0rem;
    }

    .column-2 {
        display: flex !important;
        flex-direction: row !important;
        height: 10rem;
        width: 33rem;

    }

    .image-container-2 {
        border-radius: 0rem;
        height: auto;
        width: 16rem;
    }

    .photo2 {
        height: auto;
        width: 16rem;
    }

    .image-container-3 {
        height: auto;
        width: 12.5rem;
        border-bottom-right-radius: 0rem;
    }

    .photo3 {
        height: auto;
        width: 12.5rem;
    }

    .image-container-5 {
        display: flex !important;
        flex-direction: row !important;
        height: auto;
        width: 15rem;
    }

    .photo5 {
        height: 8.5rem;
        width: 14rem;
    }

    .card2 {
        display: none;
    }

    .data {
        display: none;
    }


    .content {
        position: relative;
        top: -2rem;
        width: 21rem;
    }

    .heading1 {
        font-size: 20px;
    }

    .slug {
        font-size: 13px;
    }

    .slug .icons-subheader {
        margin-left: 0.5rem;
    }

}

@media (min-width:426px) and (max-width:768px) {
    .navbar {
        display: flex !important;
        flex-direction: column !important;
        width: 10rem;
    }

    .nav {
        width: 1rem;
    }

    .header-logo {
        display: flex;
        position: relative;
        left: 8.5rem;
        font-size: 40px !important;
        text-align: center;
    }

    .dropdown-header {
        position: relative;
        left: -0.65rem;
        height: 7rem;
    }

    .box-header {
        position: relative;
        max-width: 36rem;
        font-size: 16px !important;
        max-height: 3rem;
        left: 0.5rem;
    }

    .icons {
        display: none !important;
    }

    .nav-header {
        display: none !important;

    }

    .nav-bar2 {
        display: flex !important;
        flex-direction: column !important;
        width: 41rem;
        position: relative;
        left: 1rem;
        overflow: scroll;
        top: -2rem;
    }

    .nav-bar2::-webkit-scrollbar {
        width: 1rem;
        /* width of the entire scrollbar */
    }

    .nav-bar2::-webkit-scrollbar-track {
        border-radius: 1px
    }

    .nav-bar2::-webkit-scrollbar-thumb {
        border-radius: 1px;
        /* roundness of the scroll thumb */
    }

    .nav2-content {
        font-size: 14px !important;
    }

    .nav2-content .icons-subheader {
        font-size: 14px !important;
        position: relative;
        left: -0.7rem;
        margin-bottom: 0.2rem;
    }

    .nav2-content span {
        display: flex !important;
        flex-direction: column !important;
        position: relative;
        margin-right: 1rem;
        left: -1rem;
    }

    .border {
        position: relative;
        left: -1rem;
        width: 36rem;
        top: -4rem;
    }

    .subheader {
        display: flex !important;
        flex-direction: column !important;
        margin-left: 2.5rem !important;
        margin-right: 0rem !important;
        margin-top: 0rem !important;
        position: relative;
        top: -2rem;
    }

    .name {
        margin-top: 0rem;
        position: relative;
        left: 0.3rem;

    }

    .heading {
        font-size: 20px;
    }

    .sub-heading {
        font-size: 13px;
    }

    .photo {
        display: flex !important;
        flex-direction: row !important;
        margin-left: 3rem !important;
        cursor: pointer;
        position: relative;
        top: -2rem;
        width: 37rem;
        height: 10rem;
        overflow-x: scroll;
    }

    .photo::-webkit-scrollbar {
        width: 1rem;
        /* width of the entire scrollbar */
    }

    .photo::-webkit-scrollbar-track {
        border-radius: 1px
    }

    .photo::-webkit-scrollbar-thumb {
        border-radius: 1px;
        /* roundness of the scroll thumb */
    }

    .image-container {
        border-radius: 0rem;
    }

    .column-2 {
        display: flex !important;
        flex-direction: row !important;
        height: 10rem;
        width: 33rem;

    }

    .image-container-2 {
        border-radius: 0rem;
        height: auto;
        width: 16rem;
    }

    .photo2 {
        height: auto;
        width: 16rem;
    }

    .image-container-3 {
        height: auto;
        width: 12.5rem;
        border-bottom-right-radius: 0rem;
    }

    .photo3 {
        height: auto;
        width: 12.5rem;
    }

    .image-container-5 {
        display: flex !important;
        flex-direction: row !important;
        height: auto;
        width: 15rem;
    }

    .photo5 {
        height: 8.5rem;
        width: 14rem;
    }

    .card2 {
        display: none;
    }

    .data {
        display: none;
    }


    .content {
        position: relative;
        top: -3rem;
        width: 35rem;
    }

    .heading1 {
        font-size: 20px;
    }

    .slug {
        font-size: 13px;
    }

    .slug .icons-subheader {
        margin-left: 0.5rem;
    }

}

@media (min-width:769px) and (max-width:1024px) {


    .header-logo {
        display: flex;
        position: relative;
        font-size: 27px !important;
        text-align: center;
        justify-content: center;
        top: 0.3rem;
    }

    .box-header {
        position: relative;
        max-width: 33rem;
        font-size: 16px !important;
        max-height: 3rem;
    }

    /*.icons{
        display:none !important;
    }*/

    .nav-header {
        position: relative;
        position: relative;
        top: 0.5rem;
    }

    .photo {
        display: flex !important;
        flex-direction: row !important;
        /* margin-left: 3rem !important; */
        cursor: pointer;
        position: relative;
        /* top: -2rem; */
        width: 71rem;
        /* height: 10rem; */
        overflow-x: scroll;
    }

    .image-container {
        width: 11rem;
        height: 19rem;
        display: flex;
    }

    /*========================================================================================================================*/

    .column-2 {
        display: flex !important;

    }

    .image-container-2 {
        border-radius: 0rem;
        height: auto;
        width: 18rem;
    }

    .photo2 {
        height: auto;
        width: 17rem;
        border-top-right-radius: 42px;
    }

    .image-container-3 {
        height: 10rem;
        width: 18rem;
        border-bottom-right-radius: 0rem;
    }

    .photo3 {
        height: 10rem;
        width: 17rem;
        border-bottom-right-radius: 42px;
    }

    .card2 {
        display: flex;
        height: 19rem;
    }

    .image-container-4 {
        display: flex;
        height: 15rem;
        width: 11rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    .photo4 {
        display: flex;
    }

    .context-card {
        display: flex;
        width: 11rem;
        height: 10rem;
        overflow: hidden;
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }

    .cards {
        display: flex;
        height: 8rem;
        width: 9rem;
    }

    .age-value {
        display: flex;
        margin-top: 3rem !important;
    }

    .cards-video {
        display: flex;
        height: 10.5rem;
    }

    .content {
        position: relative;
        width: 35rem;
    }



    /*.nav-bar2{
        display: flex !important;
        flex-direction: column !important;
        width: 41rem;
        position: relative;
        left: -1rem;
        overflow: scroll;
        top:-2rem;
    }    

    .nav-bar2::-webkit-scrollbar {
        width: 1rem;
        
    }    
    
    .nav-bar2::-webkit-scrollbar-track {
        border-radius: 1px
    }    
    
    .nav-bar2::-webkit-scrollbar-thumb {
        border-radius: 1px;
       
    }    

    .nav2-content{
        font-size: 14px !important;
    }    

    .nav2-content .icons-subheader{
        font-size: 14px !important;
        position: relative;
        left: -0.7rem;
        margin-bottom:0.2rem;
    }    

    .nav2-content span{
        display: flex !important;
        flex-direction: column !important;
        position:relative;
        margin-right:1rem;
        left:-1rem;
    }    

    .border{
        position: relative;
        left: -1rem;
        width: 36rem;
        top:-4rem;
    }    

    .subheader{
        display: flex !important;
        flex-direction: column !important;
        margin-left: 2.5rem !important;
        margin-right: 0rem !important;
        margin-top: 0rem !important;
        position: relative;
        top:-2rem;
    }    

    .name{
        margin-top: 0rem;
        position: relative;
        left: 0.3rem;
    
    }    

    .heading{
        font-size:20px;
    }    

    .sub-heading{
        font-size: 13px;
    }    


    .photo::-webkit-scrollbar {
        width: 1rem;
        
    }    
    
    .photo::-webkit-scrollbar-track {
        border-radius: 1px
    }    
    
    .photo::-webkit-scrollbar-thumb {
        border-radius: 1px;
       
    }    
    
    .image-container-5{
        display: flex !important;
        flex-direction: row !important;
        height: auto;
        width: 15rem;
    }

    .photo5{
        height: 8.5rem;
        width: 14rem;
    }


    .heading1{
        font-size: 20px;
    }

    .slug{
        font-size: 13px;
    }

    .slug .icons-subheader{
        margin-left:0.5rem;
    }

    .context{

    }*/
}



/*-------------------------------------------------------------------------HEADER START---------------------------------------------------------*/
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

.nav2-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 11%;
    font-size: 14px;
    ;
    color: #5f6368;
}

.icons-subheader {
    color: #5f6368;
    font-size: 14px;
    margin-left: 22px;
}


/*---------------------------------------------------------------------------HEADER END---------------------------------------------------------*/</style>
