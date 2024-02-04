<template>
  <br />
  <h3><centre>Large Language Models (LLM) Projects</centre></h3>
  <div class="ATS">
    <div class="ats-content">
      <a href="https://resume-ats.streamlit.app/" style="text-decoration:none; color:black">
        <h5><b>Application Tracking System (ATS)</b></h5>
      <h5>
        An Applicant Tracking System (ATS), Shrirang built a Tracking System
        using Streamlit and Google's generative AI, Gemini. This system allows
        users to upload a resume in PDF format and receive insights regarding
        its relevance to specific job profiles. The application leverages
        Google's generative AI to analyze the resume and job description,
        providing tailored responses for two scenarios Job Profile Matching and
        Percentage Match Analysis
      </h5></a>
    </div>
    <a href="https://resume-ats.streamlit.app/" style="color: black">
        <img class="ats-img" src="../assets/ATS.png" />
    </a>
  </div>

  <!-- <ul>
    <li>
      <a href="https://resume-ats.streamlit.app/" style="color: black">
        <b>Application Tracking System (ATS)</b>
      </a>
    </li>
  </ul> -->
</template>

<script>
export default {
  name: "LLMProject",
};
</script>

<style>
.ATS {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.ats-content {
  margin-left: 11rem;
}
.ats-img {
  width: 45.36rem;
  height: 36rem;
  margin-top: 1.5rem;
  margin-left: 6rem;
  margin-right: 3rem;
  background-color: mintcream;
  border-radius: 50px;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.5);
}
</style>
