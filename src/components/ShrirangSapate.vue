<template>
  <div class="home">
    <router-link to="/" class="logo">
      <span style="color:#4285f4;">P</span>
      <span style="color:#ea4335;">O</span>
      <span style="color:#fbbc05;">R</span>
      <span style="color:#34a853;">T</span>
      <span style="color:#4285f4;">F</span>
      <span style="color:#ea4335;">O</span>
      <span style="color:#fbbc05;">L</span>
      <span style="color:#4285f4;">I</span>
      <span style="color:#34a853;">O</span>
    </router-link>
    <div class="nav">
      <router-link to="/home">Home</router-link> ||
      <router-link to="/stats">Shrirang's Analytical Journey</router-link>
      <a href="mailto:official.shriraang@gmail.com" class="mail">Contact</a>
      <!-- <a href="https://drive.google.com/file/d/1aO4J3kvFOUW_kS3NxSfHWU8zAGQGEUhr/view?usp=sharing" class="mail">Download Resume</a> -->
    </div>
  </div>

  <div class="img-content-container">
    <div class="side-img">
      <img src="../assets/Shriraang.png" alt="Image" class="circular-image">
    </div>
    <div class="wrapper">
      <div class="title">
        <div class="content" :class="{ showLine2: showLine2 }">
          <span class="msg" v-if="isTyping">{{ line1 }}</span>
          <span class="msg2" :class="{ showMsg2: showLine2 }">{{ line2 }}</span>
        </div>
      </div>
      <div class="content">
        <p>
          Hey there, I'm Shrirang Sapate, currently pursuing Data Science at IIT Madras. My journey has been quite a
          ride—I began with an engineering stint in Electronics and Telecommunication before immersing myself in the
          captivating world of Astrophysics. Collaborating with the prestigious NASA Space Museum, I delved into thrilling
          research projects involving Rocketry design and Radio Astronomy over three impactful years.<br>
          <br>
          Transitioning into Data Science, I've been on a quest for knowledge and experience. I delved into the
          intricacies of Machine Learning, even publishing a paper on it during one of my internships. One of the defining
          experiences
          was at the Research Park startup, where I gained invaluable insights into product development, honed my skills
          in Data Science, and learned the art of crafting a compelling pitch.<br>
          <br>
          But hey, life isn't just about academics and work, right? I've been deeply involved in shaping the cultural
          fabric here at IIT Madras. From spearheading the first-ever society in our degree program to orchestrating some
          of the
          most significant cultural events, including managing a colossal team of 1100-plus individuals for our annual
          fest, I've found immense joy and fulfillment in leading and fostering a vibrant community.<br>
          <br>
          Overall, I'm passionate about learning, exploring the frontiers of technology, and making an impact beyond the
          realms of textbooks and lectures.
        </p>
        <div class="download">

          <a class="btn btn-primary mail"
            href="https://drive.google.com/file/d/1aO4J3kvFOUW_kS3NxSfHWU8zAGQGEUhr/view?usp=sharing"
            role="button">Download
            Shrirang's Resume</a>
          <router-link to="/stats" class="btn btn-primary mail" role="button">
            Analytics about Shrirang's
          </router-link>
        </div>
      </div>
    </div>

  </div>
  <div class="title-timeline">
    <h2>Shrirang's Skills</h2>
  </div>
  <div class="skills">
    <div class="primary-skills">
      <img src="../assets/python.png" alt="python" class="python" title="Python" @mouseover="showImageTitle">
      <img src="../assets/excel.png" alt="excel" class="excel" title="excel" @mouseover="showImageTitle">
      <img src="../assets/MySQL.png" alt="MySQL" class="MySQL" title="MySQL" @mouseover="showImageTitle">
      <img src="../assets/scikitlearn.png" alt="scikitlearn" class="scikitlearn" title="scikitlearn"
        @mouseover="showImageTitle">
      <img src="../assets/NumPy.svg" alt="NumPy" class="NumPy" title="NumPy" @mouseover="showImageTitle">
      <img src="../assets/Pandas.png" alt="Pandas" class="Pandas" title="Pandas" @mouseover="showImageTitle">
      <img src="../assets/matplotlib.png" alt="matplotlib" class="matplotlib" title="matplotlib"
        @mouseover="showImageTitle">
      <img src="../assets/seaborn.svg" alt="seaborn" class="seaborn" title="seaborn" @mouseover="showImageTitle">
      <img src="../assets/PowerBI.svg" alt="PowerBI" class="PowerBI" title="PowerBI" @mouseover="showImageTitle">
      <img src="../assets/LookerStudio.png" alt="LookerStudio" class="LookerStudio" title="LookerStudio"
        @mouseover="showImageTitle">
      <img src="../assets/VueJs.png" alt="VueJs" class="VueJs" title="VueJs" @mouseover="showImageTitle">
      <img src="../assets/Flask.svg" alt="Flask" class="Flask" title="Flask" @mouseover="showImageTitle">
      <img src="../assets/AppScript.png" alt="AppScript" class="AppScript" title="AppScript" @mouseover="showImageTitle">
      <img src="../assets/linux.png" alt="linux" class="linux" title="linux" @mouseover="showImageTitle">
    </div>
    <div class="secondary-skills">
      <img src="../assets/python.png" alt="python" class="python" title="Python" @mouseover="showImageTitle">
      <img src="../assets/excel.png" alt="excel" class="excel" title="excel" @mouseover="showImageTitle">
      <img src="../assets/MySQL.png" alt="MySQL" class="MySQL" title="MySQL" @mouseover="showImageTitle">
      <img src="../assets/scikitlearn.png" alt="scikitlearn" class="scikitlearn" title="scikitlearn"
        @mouseover="showImageTitle">
      <img src="../assets/NumPy.svg" alt="NumPy" class="NumPy" title="NumPy" @mouseover="showImageTitle">
      <img src="../assets/Pandas.png" alt="Pandas" class="Pandas" title="Pandas" @mouseover="showImageTitle">
      <img src="../assets/matplotlib.png" alt="matplotlib" class="matplotlib" title="matplotlib"
        @mouseover="showImageTitle">
      <img src="../assets/seaborn.svg" alt="seaborn" class="seaborn" title="seaborn" @mouseover="showImageTitle">
      <img src="../assets/PowerBI.svg" alt="PowerBI" class="PowerBI" title="PowerBI" @mouseover="showImageTitle">
      <img src="../assets/LookerStudio.png" alt="LookerStudio" class="LookerStudio" title="LookerStudio"
        @mouseover="showImageTitle">
      <img src="../assets/VueJs.png" alt="VueJs" class="VueJs" title="VueJs" @mouseover="showImageTitle">
      <img src="../assets/Flask.svg" alt="Flask" class="Flask" title="Flask" @mouseover="showImageTitle">
      <img src="../assets/AppScript.png" alt="AppScript" class="AppScript" title="AppScript" @mouseover="showImageTitle">
      <img src="../assets/linux.png" alt="linux" class="linux" title="linux" @mouseover="showImageTitle">
    </div>
  </div>

  <div class="title-timeline">
    <h2>Shrirang's Journey towards Data Science</h2>
  </div>

  <div class="timeline">
    <div class="container left-container">
      <img src="../assets/logo.png">
      <div class="text-box">
        <h2>Engineering (B.E)</h2>
        <small>2013 - 2017</small>
        <p>I kickstarted my academic journey diving headfirst into Electronics & Telecommunication engineering. However,
          my fascination with the cosmos led me to pivot towards Astrophysics. Collaborating with NASA's Space Museum, I
          spent three enriching years delving into the intricate domains of Rocketry design and Radio Astronomy..</p>
        <span class="left-container-arrow"></span>
      </div>
    </div>

    <div class="container right-container">
      <img src="../assets/logo.png">
      <div class="text-box">
        <h2>Natskies Observatory</h2>
        <small>2017 - 2018</small>
        <p>Shrirang completed Engineering in Electronics and Telecommunication. Began with an engineering stint in
          Electronics and Telecommunication before immersing myself in the captivating world of Astrophysics.
          Collaborating with the prestigious NASA Space Museum, I delved into thrilling research projects involving
          Rocketry design and Radio Astronomy over three impactful years.</p>
        <span class="right-container-arrow"></span>
      </div>
    </div>

    <div class="container left-container">
      <img src="../assets/logo.png">
      <div class="text-box">
        <h2>Radio Astronomy Research</h2>
        <small>2018 - 2020</small>
        <p>Shrirang completed Engineering in Electronics and Telecommunication. Began with an engineering stint in
          Electronics and Telecommunication before immersing myself in the captivating world of Astrophysics.
          Collaborating with the prestigious NASA Space Museum, I delved into thrilling research projects involving
          Rocketry design and Radio Astronomy over three impactful years.</p>
        <span class="left-container-arrow"></span>
      </div>
    </div>

    <div class="container right-container">
      <img src="../assets/logo.png">
      <div class="text-box">
        <h2>Entry to Data Science</h2>
        <small>2020 - Today</small>
        <p>Shrirang completed Engineering in Electronics and Telecommunication. Began with an engineering stint in
          Electronics and Telecommunication before immersing myself in the captivating world of Astrophysics.
          Collaborating with the prestigious NASA Space Museum, I delved into thrilling research projects involving
          Rocketry design and Radio Astronomy over three impactful years.</p>
        <span class="right-container-arrow"></span>
      </div>
    </div>

    <div class="container left-container">
      <img src="../assets/logo.png">
      <div class="text-box">
        <h2>Adding Leadership Skills</h2>
        <small>2021 - Today</small>
        <p>Shrirang completed Engineering in Electronics and Telecommunication. Began with an engineering stint in
          Electronics and Telecommunication before immersing myself in the captivating world of Astrophysics.
          Collaborating with the prestigious NASA Space Museum, I delved into thrilling research projects involving
          Rocketry design and Radio Astronomy over three impactful years.</p>
        <span class="left-container-arrow"></span>
      </div>
    </div>

  </div>


  <!-- <div class="title-timeline">
    <h2>Shrirang's Project</h2>
  </div> -->

  <div class="title-timeline">
    <h2>Meet Shrirang in his Leisure time</h2>
  </div>
  <div class="slide">
    <div class="primary">
      <img src="../assets/2.png" alt="Image" class="image2"
        title="Shrirang Performing at IIT Madras BS degree's annual fest Paradox" @mouseover="showImageTitle">
      <img src="../assets/Diploma.png" alt="Image" class="image3"
        title="Shrirang recieving Diploma in Data Science by Venkat Viswanathan, Founder,CEO LatentView"
        @mouseover="showImageTitle">
      <img src="../assets/Stage1.png" alt="Image" class="image4"
        title="Shrirang interacting with audience during his performance" @mouseover="showImageTitle">
    </div>
    <div class="secondary">
      <img src="../assets/2.png" alt="Image" class="image2"
        title="Shrirang Performing at IIT Madras BS degree's annual fest Paradox" @mouseover="showImageTitle">
      <img src="../assets/Diploma.png" alt="Image" class="image3"
        title="Shrirang recieving Diploma in Data Science by Venkat Viswanathan, Founder,CEO LatentView"
        @mouseover="showImageTitle">
      <img src="../assets/Stage1.png" alt="Image" class="image4"
        title="Shrirang interacting with audience during his performance" @mouseover="showImageTitle">
    </div>
  </div><br><br>
</template>

<script>

export default {
  name: 'ShrirangSapate',
  data() {
    return {
      line1: 'Hey viewer\'s... Welcome to my Page!',
      line2: 'Hi this is Shrirang!',
      line3: 'Go to About me to know about me!',
      isTyping: false,
      showLine2: false,
      currentIndex: 0,
      activeImageTitle: "",
      animationStarted: false,
    };
  },

  mounted() {

    this.isTyping = true;
    const LineAnimationDuration = 1800;
    setTimeout(() => {
      this.showLine2 = true;
    }, LineAnimationDuration + 1000);

    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    showImageTitle(title) {
      this.activeImageTitle = title;
    },

    handleScroll() {
      const timeline = document.querySelector('.timeline');
      if (timeline) {
        const timelinePosition = timeline.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const threshold = windowHeight * 0.93; // Adjust this threshold as needed

        if (timelinePosition < threshold && !this.animationStarted) {
          this.animationStarted = true;
          timeline.classList.add('start-animation');
        }
      }
    },

  },
}
</script>

<style scoped>
.python {
  width: 20rem;
  padding: 1rem;
  height: 8rem;
}

.LookerStudio {
  width: 14rem;
  padding: 1rem;
  height: 8rem;
}

.scikitlearn {
  width: 20rem;
  padding: 1rem;
  height: 12rem;
}

.excel,
.PowerBI,
.VueJs {
  width: 7rem;
  padding: 1rem;
  height: 7rem;
}

.MySQL {
  width: 14rem;
  padding: 1rem;
  height: 10rem;
}

.NumPy,
.Pandas,
.seaborn,
.Flask,
.linux {
  width: 15rem;
  padding: 2rem;
  height: 10rem;
}

.AppScript {
  width: 10.5rem;
  padding: 1rem;
  height: 10.5rem;
}

.matplotlib {
  width: 18rem;
  padding: 1rem;
}

.skills-title {
  position: relative;
  font-size: 42px;
  font-weight: 500;
  text-align: center;
  top: -6rem;
  left: 11rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}

.skills-title:hover {
  text-decoration: underline;
}

.skills {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  position: relative;

  margin-left: 1rem;
  width: 117rem;
  height: 12rem;
  overflow-x: hidden;
  border-radius: 42px;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.5);
}

.primary-skills {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0rem;
  right: 0rem;
  width: 0rem;
  /* margin-left: 0rem; */
  animation: primary-bd35a398 30s linear infinite;
}

@keyframes primary {
  from {
    left: 0%;
  }

  to {
    left: -100%;
  }
}

.secondary-skills {
  display: flex;
  align-items: center;
  position: relative;
  left: 0%;
  right: 0%;
  width: 0rem;
  margin-left: 24rem;
  animation: secondary-bd35a398 30s linear infinite;

}

@keyframes secondary {
  from {
    left: 100%;
  }

  to {
    left: 0%;
  }
}

.mail {
  margin: 5px;
}

.img-content-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.5);
  margin: 1rem;
  border-radius: 30px;
  margin-top: 3rem;
}

.side-img {
  display: flex;
  width: 3.5rem;
}

.circular-image {
  display: flex;
  height: 35rem;
  /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); */
  border-top-left-radius: 47%;
  border-top-right-radius: 47%;
  border-bottom-left-radius: 47%;
  border-bottom-right-radius: 47%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;
  margin-left: 23%;
  width: 81.75rem;
  border-radius: 18px;
  /* background-color: #f3f5f9; */
}

.title {
  display: flex;
  justify-content: center;
  /* margin-top: 2rem; */
  /* width: 5rem; */
  align-items: center;
  margin-left: 1rem;
}

/*.title h2 {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}*/



/*.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: 35%;
  width: 29rem;
  border: 1px solid #6d6d6d;
  border-radius: 18px;
}*/

.content p {
  padding: 30px;
  font-size: 18px;
  text-align: justify;
}


.title-timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-left: 32.5%;
  width: 40rem;
  border: 1px solid #6d6d6d;
  border-radius: 18px;
  padding: 10px;
  box-shadow: 0 5px 30px -7px rgba(0, 0, 0, 0.5);
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 100px auto 0px auto;
}

@keyframes showImage {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  padding: 10px 50px;
  position: relative;
  width: 50%;
  /*animation: movedown 1.5s linear forwards;*/
  opacity: 0;
}

@keyframes movedown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.timeline.start-animation .container {
  animation: movedown 1.5s linear forwards;
}

.timeline.start-animation .container:nth-child(1) {
  animation: movedown 1.5s ease-in-out forwards;
  animation-delay: 0s;
}

.timeline.start-animation .container:nth-child(2) {
  animation: movedown 1.5s ease-in-out forwards;
  animation-delay: 4.5s;
}

.timeline.start-animation .container:nth-child(3) {
  animation: movedown 1.5s ease-in-out forwards;
  animation-delay: 8.3s;
}

.timeline.start-animation .container:nth-child(4) {
  animation: movedown 1.5s ease-in-out forwards;
  animation-delay: 12.5s;
}

.timeline.start-animation .container:nth-child(5) {
  animation: movedown 1.5s ease-in-out forwards;
  animation-delay: 16.4s;
}

/*All About text box*/
.text-box {
  position: relative;
  padding: 20px 30px;
  background: #f3f5f9;
  border-radius: 6px;
  font-size: 15px;
  box-shadow: 0 5px 10px -7px rgba(0, 0, 0, 0.5);
}

/*Positioning Text-box Left*/
.left-container {
  left: -25%;
}

/*Positioning Text-box Right*/
.right-container {
  left: 25.9%;
}

/*left Image*/
.container img {
  position: absolute;
  width: 40px;
  border-radius: 50%;
  right: -20px;
  top: 32px;
  /* 32px */
  z-index: 10;
}

/*Right Image*/
.right-container img {
  left: -30px;
  z-index: 10;
}

/*Line*/
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 100%;
  background: #808080;
  top: 0;
  left: 50%;
  margin-left: -3px;
  z-index: -1;
  /*animation: moveline 20s linear forwards; /* 6s */
  border-radius: 30px;
}

.timeline.start-animation::after {
  animation: moveline 20s linear forwards;
}


@keyframes moveline {
  0% {
    height: 0;
  }

  100% {
    height: 100%;
  }
}

.text-box h2 {
  font-size: 24px;
  font-weight: 600;
  text-align: left;
}

.text-box small {
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-start;
}

.text-box p {
  text-align: left;
}

.left-container-arrow {
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #f3f5f9;
  right: -20px;
}

.right-container-arrow {
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #f3f5f9;
  left: -20px;
}





.into {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0rem;
  position: relative;
  margin-left: 10%;
}

.download {
  display: flex;
  position: relative;
  left: 24rem;
}

.slide {
  display: flex;
  flex-direction: row;
  /* height: 21rem; */
  position: relative;
  margin-left: 1rem;
  width: 117rem;
  height: 26rem;
  overflow-x: hidden;
  border-radius: 42px;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.5);
}

.primary {
  display: flex;
  width: 39rem;
  height: 26rem;
  position: absolute;
  left: 0%;
  right: 0%;
  animation: primary 30s linear infinite;
}

@keyframes primary {
  from {
    left: 0%;
  }

  to {
    left: -100%;
  }
}

.secondary {
  display: flex;
  width: 30rem;
  height: 20rem;
  position: relative;
  left: 0%;
  right: 0%;
  animation: secondary 30s linear infinite;

}

@keyframes secondary {
  from {
    left: 100%;
  }

  to {
    left: 0%;
  }
}


.image2,
.image3,
.image4 {
  width: 39rem;
  height: 26rem;
  object-fit: cover;
  margin-right: 0.33rem;
}

/*.image2 {
  width: 36rem;
  height: 30rem;
  object-fit: cover;
}

.image3 {
  width: 36rem;
  height: 30rem;
  object-fit: cover;
}

.image4 {
  width: 36rem;
  height: 30rem;
  object-fit: cover;
}*/

.slide::-webkit-scrollbar {
  width: 0px;
  /* width of the entire scrollbar */
}

.slide::-webkit-scrollbar-track {
  border-radius: 0px
}

.slide::-webkit-scrollbar-thumb {
  border-radius: 0px;
  /* roundness of the scroll thumb */
}


.home {
  display: flex;
  text-align: center;
  box-shadow: 0 5px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 18px;
  max-height: 50px;
  font-family: 'KoHo', sans-serif;
}

.logo {
  text-decoration: none;
  margin: 0 30px;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  padding: 12px;
  align-items: center;
}

.logo span {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}

.logo:hover {
  background-color: rgba(238, 238, 238, 0.521);
  border-radius: 20px;
  text-shadow: 2px 2px 2px rgba(243, 243, 243, 0.5);
}


.nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  color: white;
}

.nav a {
  text-decoration: none;
  color: grey;
  margin: 0 10px;
}

.nav a:hover {
  border-bottom: 2px solid grey;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin-left: 25%; */
  font-size: 36px;
  font-family: 'KoHo', sans-serif;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 3rem;
  /* transform: translateX(-50%); */
  position: relative;
  /* left: 10%;*/
}

.msg,
.msg2 {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 1px solid transparent;
  /*animation: typing 4s steps(35) forwards;*/
}

.msg {
  animation: typing 2s steps(35) forwards;
}

.msg2 {
  /*animation-delay: 1.8s;*/
  /*visibility: hidden;
  transition: visibility 2.8s;*/
  border-right: 1px solid transparent;

  opacity: 0;
}

.showMsg2 {
  opacity: 1;
  animation: typing2 2s steps(35) forwards;
}


@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes typing2 {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }

}
</style>
