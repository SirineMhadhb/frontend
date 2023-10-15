import { memo } from 'react';
import { BlinkingCursorTextBuilder , FloatingLettersTextBuilder } from 'react-animated-text-builders'
function DemoContent() {
  return (
    <div>
      <center>
      <img
        src="assets/images/avatars/learning.png"
        alt="beach"
        style={{
          maxWidth: '640px',
          width: '100%',
        }}
        
        className="rounded-6"
      /></center>
      <vedio
        src="assets/images/avatars/learning.png"
        alt="beach"
        style={{
          maxWidth: '640px',
          width: '100%',
        }}></vedio>
      <BlinkingCursorTextBuilder
      textStyle={{fontWeight :"bold", font : "Times New Roman", fontSize : "40px"}}
      style={{transform: "rotate(-0deg)", marginTop:"10px", marginBottom :"20px"}}
      cursorComponent={<div style={{color : "green"}}> Learning manegement systeme (LMS)</div>}
      blinkTimeAfterFinish={-1}> </BlinkingCursorTextBuilder>

      <h2>
      Learning Management System  is a software application for activities in the network, electronic learning programs
       (e-learning programs), and training content.
      </h2>
      
      <blockquote>
        <h2>
      using self-service and self-guided services
      </h2>
      <h2>
      collect and deliver learning content quickly
      </h2>
      <h2>
      consolidate training initiatives on ''web scalable' based platforms
      </h2>
      <h2>
      portability and standards
      </h2>
      <h2>
      personalize the content and allow the reuse of knowledge.
        </h2>
        <video src="assets/images/avatars/vedio.mp4" width="600" height="500" controls="controls" autoplay="true" />
        <br></br>
        <footer> <h2  style={{color:'green' }}> who are the actors in LMS platform? </h2></footer>
      </blockquote>
      <br></br>
      <h2 style={{color:"red"}}>
      the directors:
      </h2>
      <h2>
      responsible for managing the platform. They install, update and configure the LMS by considering the needs and requests of learners and trainers. The administrator is a real coordinator of the training platform!
      </h2>
      <h2 style={{color:"red"}}>
      the trainers:
      </h2>
      <h2>
      creating e-learning training pathways. They think and set up training modules to be incorporated into these courses, and take advantage of several formats to engage learners as much as possible (videos, texts, images, interactive quizzes, etc.)      </h2>
      <h2 style={{color:"red"}}>
      learners:
      </h2>
      <h2>
      often divided into groups. Their role is as clear as can be: to follow the courses to which they have been enrolled      </h2>
    </div>
  );
}

export default memo(DemoContent);
