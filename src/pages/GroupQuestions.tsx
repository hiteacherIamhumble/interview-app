import { useState } from 'react';

interface GroupDiscussion {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  question: {
    en: string;
    zh: string;
  };
  keyPoints: {
    en: string;
    zh: string;
  }[];
}

const groupDiscussions: GroupDiscussion[] = [
  {
    id: 'group1',
    title: {
      en: 'The Necessity of Complex Techniques in the AI Era',
      zh: 'AI时代复杂技术的必要性'
    },
    question: {
      en: 'In today\'s world where AI photo editing and effects creation are so popular and convenient, is it still necessary to learn such complex color grading and photo editing techniques?',
      zh: '在现如今AI修图和特效制作如此流行方便的当下，是否还有必要学习如此复杂的调色和修图技巧？'
    },
    keyPoints: [
      {
        en: 'AI as a Tool, Not a Replacement: AI excels at automation but lacks artistic vision and contextual understanding',
        zh: 'AI是工具，而非替代品：AI擅长自动化，但缺乏艺术视野和情境理解'
      },
      {
        en: 'Creative Control and Precision: Complex projects demand specific adjustments AI cannot anticipate',
        zh: '创意控制和精确度：复杂项目需要AI无法预测的特定调整'
      },
      {
        en: 'Professional Differentiation: Technical expertise sets you apart from amateur AI users',
        zh: '专业差异化：技术专长使您与业余AI用户区分开来'
      },
      {
        en: 'Problem-Solving Capability: When AI fails, manual skills are essential',
        zh: '解决问题的能力：当AI失败时，手动技能至关重要'
      },
      {
        en: 'Artistic Development: Learning traditional techniques develops your visual literacy',
        zh: '艺术发展：学习传统技术培养您的视觉素养'
      }
    ]
  },
  {
    id: 'group2',
    title: {
      en: 'Making Workshops More Engaging',
      zh: '让工作坊更有吸引力'
    },
    question: {
      en: 'We found in last year\'s workshop that simply teaching how to use software was very boring, and there are more comprehensive tutorials on Bilibili/YouTube. What measures do you think we could adopt in the new year\'s workshop to make the audience more interested while finding value in the workshop?',
      zh: '我们在去年的workshop中发现单纯讲如何使用这些软件十分枯燥无聊，同时Bilibili/YouTube上有更全面的教学视频。你认为我们在新的一年中的workshop可以采取哪些措施让观众更能感兴趣同时觉得这个workshop有价值？'
    },
    keyPoints: [
      {
        en: 'Project-Based Learning: Structure workshops around real-world projects, not features',
        zh: '基于项目的学习：围绕实际项目而非功能来组织工作坊'
      },
      {
        en: 'Live Problem-Solving Sessions: Bring participants\' actual photos/videos for live editing',
        zh: '现场问题解决环节：带来参与者的实际照片/视频进行现场编辑'
      },
      {
        en: 'Collaborative Challenges: Team competitions with time limits and peer review',
        zh: '协作挑战：有时间限制的团队竞赛和同行评审'
      },
      {
        en: 'Industry Guest Speakers: Invite working professionals to share real case studies',
        zh: '行业嘉宾演讲：邀请在职专业人士分享真实案例研究'
      },
      {
        en: 'Hands-On Troubleshooting: Focus on common mistakes and how to fix them',
        zh: '实践故障排除：专注于常见错误及其修复方法'
      },
      {
        en: 'Creative Constraints Exercises: "Edit using only 3 adjustments" challenges',
        zh: '创意约束练习：“仅使用3个调整进行编辑”挑战'
      },
      {
        en: 'Networking and Community Building: Create ongoing Discord/WeChat groups',
        zh: '网络和社区建设：创建持续的Discord/微信群'
      },
      {
        en: 'Unique Value Propositions: Offer presets/templates and personalized feedback',
        zh: '独特价值主张：提供预设/模板和个性化反馈'
      }
    ]
  }
];

const GroupQuestions = () => {
  const [selectedDiscussion, setSelectedDiscussion] = useState<GroupDiscussion | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="page questions-container">
      <h1 className="page-title">
        Group Interview Questions<br/>
        <span style={{ fontSize: '0.8em' }}>群组面试问题</span>
      </h1>

      <div className="category-section">
        <h2 className="category-title">
          <span className="category-icon">💬</span>
          Group Discussion Topics / 小组讨论主题
        </h2>
        
        <div className="questions-grid">
          {groupDiscussions.map((discussion) => (
            <button
              key={discussion.id}
              className="question-button"
              onClick={() => {
                setSelectedDiscussion(discussion);
                setShowAnswers(false);
              }}
            >
              {discussion.title.en}
            </button>
          ))}
        </div>
      </div>

      {/* Group Discussion Modal */}
      {selectedDiscussion && (
        <div className="modal-overlay" onClick={() => setSelectedDiscussion(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedDiscussion.title.en}<br/>
              <span style={{ fontSize: '0.8em', fontStyle: 'italic' }}>{selectedDiscussion.title.zh}</span></h2>
              <button className="close-button" onClick={() => setSelectedDiscussion(null)}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="question-section">
                <h3 className="question-label">Discussion Topic / 讨论主题</h3>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
                  {selectedDiscussion.question.en}
                </p>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginTop: '1rem', marginBottom: '2rem', fontStyle: 'italic' }}>
                  {selectedDiscussion.question.zh}
                </p>
              </div>
              
              {showAnswers && (
                <div className="question-section">
                  <h3 className="question-label">Key Discussion Points / 关键讨论要点</h3>
                  <ul style={{ fontSize: '1.4rem', lineHeight: '2', marginLeft: '1.5rem' }}>
                    {selectedDiscussion.keyPoints.map((point, index) => (
                      <li key={index} style={{ marginBottom: '1.5rem' }}>
                        <div>{point.en}</div>
                        <div style={{ marginTop: '0.5rem', fontStyle: 'italic', fontSize: '0.9em' }}>{point.zh}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="modal-footer">
              <button
                className="action-button"
                onClick={() => setShowAnswers(!showAnswers)}
              >
                {showAnswers ? 'Hide Key Points' : 'Show Key Points'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupQuestions;