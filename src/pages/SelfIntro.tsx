const SelfIntro = () => {
  return (
    <div className="page">
      <h1 className="page-title">
        Self Introduction<br/>
        <span style={{ fontSize: '0.8em' }}>自我介绍</span>
      </h1>
      
      <div className="position-card" style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{ color: '#4ecdc4', marginBottom: '2rem', fontSize: '2rem' }}>
          2-Minute Self Introduction Guidelines<br/>
          <span style={{ fontSize: '0.8em' }}>2分钟自我介绍指南</span>
        </h2>
        
        <div style={{ textAlign: 'left', fontSize: '1.5rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem', color: '#ff6b6b', fontWeight: 'bold' }}>
            ⏱️ Time Limit: 2 minutes (Please speak in English)<br/>
            <span style={{ fontSize: '0.9em' }}>时间限制：2分钟（请用英语）</span>
          </p>
          
          <h3 style={{ color: '#4ecdc4', marginBottom: '1rem', fontSize: '1.5rem' }}>
            Required Topics to Cover / 必须涵盖的主题：
          </h3>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#f0f0f0', marginBottom: '0.5rem' }}>
              1. Past Experiences 📚 / 过往经历
            </h4>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              <li>Your experience with photo editing or video editing</li>
              <li>Projects you've worked on (personal or professional)</li>
              <li>Number of participants/clients you've worked with</li>
              <li>Types of events or content you've edited</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#f0f0f0', marginBottom: '0.5rem' }}>
              2. Your Standard Operation Process 🔄 / 你的标准操作流程
            </h4>
            <p style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
              Share your workflow when doing:
            </p>
            <ul style={{ marginLeft: '3rem' }}>
              <li><strong>Photo Adjustment:</strong> Your step-by-step process in Lightroom</li>
              <li><strong>Video Editing:</strong> Your approach to editing in CapCut or similar software</li>
              <li>Any unique techniques or methods you use</li>
              <li>How you ensure quality and consistency</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SelfIntro;