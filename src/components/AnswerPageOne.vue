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

                <input type="text" class='box-header' autocomplete="off" value="Who is Shrirang Sapate?" />
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

    <div class="border"></div>
    <div class="subheader">
        <div class="name">
            <div class='heading'>Shrirang Sapate</div>

            <div class='sub-heading'>Student at IIT Madras <fa icon='ellipsis-vertical' class="icons-subheader"></fa>
            </div>
        </div>
        <div class="side-tabs">
            <div class="overview">Overview</div>
            <router-link to="/stats" class="Stats">Stats</router-link>
            <a href="https://www.youtube.com/@shrirangsapate" class="Videos">Videos</a>
            <!-- <div class="Videos">Videos</div> -->
        </div>
    </div>

    <div class="photo">
        <div class="image-container">
            <img alt="Shriraang" class="photo1" src="../assets/Stage2.png">
        </div>
        <div class="column-2">
            <div class="image-container-2">
                <img alt="Speech" class="photo2" src="../assets/Speech.png">
            </div>
            <div class="image-container-3">
                <img alt="Diploma" class="photo3" src="../assets/Diploma.png">
            </div>
            
        </div>
        <div class="image-container-5">
            <img alt="Shrirang-Stage" class="photo5" src="../assets/1.png">
        </div>
        <div class="card2">
            <div class="image-container-4">
                <img alt="Diploma" class="photo4" src="../assets/Shrirang-Sapate.png">
            </div>
            <div class="context-card">I am a student at IIT Madras. I am currently pursuing my Masters in Computer Science
                and Engineering. I am a part of the Computer Vision and Image Processing Lab at IIT Madras. I am working on
                the project "Deep Learning for Autonomous Driving..."</div>
        </div>

        <div class="data">
            <div class="row1">
                <div class="cards">
                    <div class="age">Age</div>
                    <div class="age-value">28 years</div>
                </div>
                <div class="cards">
                    <div class="age">Birthdate</div>
                    <div class="age-value">20thSept</div>
                </div>
            </div>
            <div class="row2">
                <div class="cards-video">
                    <iframe class="video" src="https://www.youtube.com/embed/mXXXjrfZsEM?si=Ni3LOnGUTyEoHjuc"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>

    </div>
    <div class="border"></div>

    <div class="content">
        <div class="heading1">Know about Shrirang</div>
        <div class="slug">
            <span>https://know-about-shrirang-sapate.com <fa icon='ellipsis-vertical' class="icons-subheader"></fa></span>
        </div>
        <div class="context">I am a student at IIT Madras. I am currently pursuing my Masters in Computer Science and
            Engineering. I am a part of the Computer Vision and Image Processing Lab at IIT Madras. I am working on the
            project "Deep Learning for Autonomous Driving". I am also working on the project "Deep Learning for Autonomous
            Driving".</div>
    </div>

    <div class="content">
        <a href="https://in.linkedin.com/in/shriraangsapaate" class="heading1">Shriraang Sapate</a>
        <div class="slug">
            <a href="https://in.linkedin.com/in/shriraangsapaate">https://in.linkedin.com/in/shriraangsapaate <fa icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">Chennai, Tamil Nadu, India · Akord Music Society<br>
            I am a motivated Data Analyst with expertise in data science and application. I possess a strong background in developing machine learning models and ...</div>
    </div>

    <div class="content">
        <a href="https://arxiv.org/abs/2111.04003" class="heading1">Predictive Model for Gross Community Production Rate of ...</a>
        <div class="slug">
            <a href="https://arxiv.org/abs/2111.04003">https://arxiv.org > cs <fa icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">by S Sapate · 2021 — ... Shrirang Sapate, Reenasree S, Vigneash M. Download a PDF of the paper titled Predictive Model for Gross Community Production Rate of Coral ...</div>
    </div>

    <div class="content">
        <a href="https://arxiv.org/pdf/2111.04003" class="heading1">Predictive Model for Gross Community Production Rate of ...</a>
        <div class="slug">
            <a href="https://arxiv.org/pdf/2111.04003">https://arxiv.org > pdf <fa icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">by S Sapate · 2021 — ... Shrirang Sapate,. Reenasree S, Vigneash M. C. Page 2. 2. Anthropogenic activities like chemical pollution, industrial pollution, mechanical damage, nutrient ...</div>
    </div>

    <div class="content">
        <a href="https://www.ijser.org/researchpaper/Comparative-study-on-designs-of-air-propelled-rocket-for-achieving-higher-altitude.pdf" class="heading1">Comparative-study-on-designs-of-air-propelled-rocket-for- ...</a>
        <div class="slug">
            <a href="https://www.ijser.org/researchpaper/Comparative-study-on-designs-of-air-propelled-rocket-for-achieving-higher-altitude.pdf">https://www.ijser.org > researchpaper > Comparative-Stud... <fa icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">Shrirang Sapate [1], Vikram Londhe [2]. Abstract- Model rockets are essentially unguided models of a rocket that are a paramount mode to learn and simulate ...
        </div>
    </div>

    <div class="content">
        <a href="https://www.instagram.com/_shriraang_/" class="heading1">Shriraang Sapaate(@_shriraang_) • Instagram photos and...</a>
        <div class="slug">
            <a href="https://www.instagram.com/_shriraang_/">https://www.instagram.com > shrira... <fa icon='ellipsis-vertical' class="icons-subheader"></fa></a>
        </div>
        <div class="context">
            914 Followers, 1,085 Following, 42 Posts - See Instagram photos and videos from shrirang (@shrirangswarge)
        </div>
    </div>

    <!-- <div class='content'>Lorem Ipsum is simply dummy text...</div> -->
</template>

<script>
export default {
    name: 'AnswerPageOne',
}
</script>

<style scoped>
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

.content a:hover{
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

.image-container-5{
    display:none;
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
    height: 236px;
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

.video{
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

@media (max-width:328px) {
    .navbar{
        display: flex !important;
        flex-direction: column !important;
        width:10rem;
    }
    .nav{
        width: 1rem;
    }
    .header-logo{
        display: flex;
        position: relative;
        left: -2rem;
        font-size: 30px !important;
        text-align: center;
    }

    .dropdown-header{
        position:relative;
        left:-4.6rem;
        height: 5rem;
    
    }

    .box-header{
        position: relative;
        max-width: 19rem;
        font-size: 16px !important;
        max-height: 2rem;
        left: 0.1rem;
    }

    .icons{
        display:none !important;
    }

    .nav-header{
        display: none !important;
        
    }

    .nav-bar2{
        display: flex !important;
        flex-direction: column !important;
        width: 19rem;
        position: relative;
        left: 0rem;
        overflow: scroll;
        top:-1rem;
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

    .nav2-content{
        font-size: 13px !important;
    }

    .nav2-content .icons-subheader{
        font-size: 13px !important;
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
        left: -1.1rem;
        width: 20rem;
        top:-3rem;
    }

    .subheader{
        display: flex !important;
        flex-direction: column !important;
        margin-left: 0rem !important;
        margin-right: 0rem !important;
        margin-top: 0rem !important;
        position: relative;
        top:-2rem;
    }

    .name{
        margin-top: 0rem;
        position: relative;
        left: 1.3rem;
    
    }

    .heading{
        font-size:20px;
    }

    .sub-heading{
        font-size: 13px;
    }

    .photo{
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
    .image-container{
        border-radius:0rem;
    }

    .photo1{

    }

    .column-2{
        display: flex !important;
        flex-direction: row !important;
        height: 10rem;
        width: 33rem;

    }

    .image-container-2{
        border-radius:0rem;
        height: auto;
        width: 16rem;
    }

    .photo2{
        height: auto;
        width: 16rem;
    }

    .image-container-3{
        height: auto;
        width: 12.5rem;
        border-bottom-right-radius: 0rem;
    }

    .photo3{
        height: auto;
        width: 12.5rem;
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

    .card2{
        display:none;
    }

    .data{
        display: none;
    }


    .content{
        position: relative;
        top: -2rem;
        width: 16.5rem;
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

    }
}

@media (min-width:329px) and (max-width:425px){
    .navbar{
        display: flex !important;
        flex-direction: column !important;
        width:10rem;
    }
    .nav{
        width: 1rem;
    }
    .header-logo{
        display: flex;
        position: relative;
        left: -2rem;
        font-size: 30px !important;
        text-align: center;
    }

    .dropdown-header{
        position:relative;
        left:-4.6rem;
        height: 5rem;
    
    }

    .box-header{
        position: relative;
        max-width: 19rem;
        font-size: 16px !important;
        max-height: 2rem;
        left: 0.1rem;
    }

    .icons{
        display:none !important;
    }

    .nav-header{
        display: none !important;
        
    }

    .nav-bar2{
        display: flex !important;
        flex-direction: column !important;
        width: 19rem;
        position: relative;
        left: 0rem;
        overflow: scroll;
        top:-1rem;
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

    .nav2-content{
        font-size: 13px !important;
    }

    .nav2-content .icons-subheader{
        font-size: 13px !important;
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
        left: -1.1rem;
        width: 20rem;
        top:-3rem;
    }

    .subheader{
        display: flex !important;
        flex-direction: column !important;
        margin-left: 0rem !important;
        margin-right: 0rem !important;
        margin-top: 0rem !important;
        position: relative;
        top:-2rem;
    }

    .name{
        margin-top: 0rem;
        position: relative;
        left: 1.3rem;
    
    }

    .heading{
        font-size:20px;
    }

    .sub-heading{
        font-size: 13px;
    }

    .photo{
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
    .image-container{
        border-radius:0rem;
    }

    .photo1{

    }

    .column-2{
        display: flex !important;
        flex-direction: row !important;
        height: 10rem;
        width: 33rem;

    }

    .image-container-2{
        border-radius:0rem;
        height: auto;
        width: 16rem;
    }

    .photo2{
        height: auto;
        width: 16rem;
    }

    .image-container-3{
        height: auto;
        width: 12.5rem;
        border-bottom-right-radius: 0rem;
    }

    .photo3{
        height: auto;
        width: 12.5rem;
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

    .card2{
        display:none;
    }

    .data{
        display: none;
    }


    .content{
        position: relative;
        top: -2rem;
        width: 16.5rem;
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

    }
}
@media (min-width:426px) and (max-width:768px){
    .navbar{
        display: flex !important;
        flex-direction: column !important;
        width:10rem;
    }
    .nav{
        width: 1rem;
    }
    .header-logo{
        display: flex;
        position: relative;
        left: -2rem;
        font-size: 30px !important;
        text-align: center;
    }

    .dropdown-header{
        position:relative;
        left:-4.6rem;
        height: 5rem;
    
    }

    .box-header{
        position: relative;
        max-width: 19rem;
        font-size: 16px !important;
        max-height: 2rem;
        left: 0.1rem;
    }

    .icons{
        display:none !important;
    }

    .nav-header{
        display: none !important;
        
    }

    .nav-bar2{
        display: flex !important;
        flex-direction: column !important;
        width: 19rem;
        position: relative;
        left: 0rem;
        overflow: scroll;
        top:-1rem;
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

    .nav2-content{
        font-size: 13px !important;
    }

    .nav2-content .icons-subheader{
        font-size: 13px !important;
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
        left: -1.1rem;
        width: 20rem;
        top:-3rem;
    }

    .subheader{
        display: flex !important;
        flex-direction: column !important;
        margin-left: 0rem !important;
        margin-right: 0rem !important;
        margin-top: 0rem !important;
        position: relative;
        top:-2rem;
    }

    .name{
        margin-top: 0rem;
        position: relative;
        left: 1.3rem;
    
    }

    .heading{
        font-size:20px;
    }

    .sub-heading{
        font-size: 13px;
    }

    .photo{
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
    .image-container{
        border-radius:0rem;
    }

    .photo1{

    }

    .column-2{
        display: flex !important;
        flex-direction: row !important;
        height: 10rem;
        width: 33rem;

    }

    .image-container-2{
        border-radius:0rem;
        height: auto;
        width: 16rem;
    }

    .photo2{
        height: auto;
        width: 16rem;
    }

    .image-container-3{
        height: auto;
        width: 12.5rem;
        border-bottom-right-radius: 0rem;
    }

    .photo3{
        height: auto;
        width: 12.5rem;
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

    .card2{
        display:none;
    }

    .data{
        display: none;
    }


    .content{
        position: relative;
        top: -2rem;
        width: 16.5rem;
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

    }
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