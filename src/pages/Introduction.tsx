const Introduction = () => {
  return (
    <div className="page intro-container">
      <h1 className="page-title">
        Post-Production Committee Interview 2025/26<br/>
        <span style={{ fontSize: '0.8em' }}>2025/26 后期制作委员会面试</span>
      </h1>

      <div className="position-card">
        <h2 className="position-title">
          Post-Production Positions<br/>
          <span style={{ fontSize: '0.8em' }}>后期制作职位</span>
        </h2>
        
        <h3 className="subtitle">
          Responsibilities / 职责
        </h3>
        
        <ul className="responsibilities-list">
          <li>
            <span>Hold workshops to share the usage of Lightroom and CapCut software<br/>
            <span style={{ fontSize: '0.9em', fontStyle: 'italic' }}>举办工作坊分享Lightroom和CapCut软件的使用方法</span></span>
          </li>
          <li>
            <span>Act as judges for the annual PDC shooting competition<br/>
            <span style={{ fontSize: '0.9em', fontStyle: 'italic' }}>担任年度PDC摄影比赛的评委</span></span>
          </li>
          <li>
            <span>Lead participants to outdoors for shooting practice in Hong Kong<br/>
            <span style={{ fontSize: '0.9em', fontStyle: 'italic' }}>带领参与者到香港户外进行拍摄练习</span></span>
          </li>
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#ff6b6b', marginBottom: '0.5rem' }}>
              Photo Adjustment / 照片调整
            </h4>
            <p style={{ fontSize: '3rem' }}>📸</p>
            <p>Lightroom Expertise</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#4ecdc4', marginBottom: '0.5rem' }}>
              Video Editing / 视频编辑
            </h4>
            <p style={{ fontSize: '3rem' }}>🎬</p>
            <p>CapCut Expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;