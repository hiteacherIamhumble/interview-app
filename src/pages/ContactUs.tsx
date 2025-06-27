const ContactUs = () => {
  return (
    <div className="page">
      <h1 className="page-title">
        Contact Us<br/>
        <span style={{ fontSize: '0.8em' }}>联系我们</span>
      </h1>
      
      <div className="position-card" style={{ textAlign: 'center', maxWidth: '600px', margin: '2rem auto' }}>
        <h2 style={{ color: '#4ecdc4', marginBottom: '2rem', fontSize: '1.8rem' }}>Get in Touch / 取得联系</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <p className="placeholder-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</p>
          <p style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Email / 邮箱：</p>
          <p style={{ fontSize: '1.2rem', color: '#ff6b6b' }}>
            <a href="mailto:yuhang.dai@connect.polyu.hk" style={{ color: '#ff6b6b', textDecoration: 'none' }}>
              yuhang.dai@connect.polyu.hk
            </a>
          </p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <p className="placeholder-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</p>
          <p style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Phone / 电话：</p>
          <p style={{ fontSize: '1.2rem', color: '#ff6b6b' }}>+852 6509 6992</p>
        </div>
        
        <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(78, 205, 196, 0.1)', borderRadius: '10px', border: '1px solid rgba(78, 205, 196, 0.3)' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Interview results will be announced in the WeChat group.<br/>
            <span style={{ fontSize: '0.9em' }}>面试结果将在微信群中公布。</span>
          </p>
          <p style={{ fontSize: '1.3rem', color: '#4ecdc4', fontWeight: 'bold' }}>
            Thank you for your participation! 🎉<br/>
            <span style={{ fontSize: '0.9em' }}>谢谢您的参与！</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;