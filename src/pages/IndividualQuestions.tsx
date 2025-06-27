import { useState } from 'react';
import { photoQuestions, type Question } from '../data/questionsData';

interface VideoQuestion {
  id: string;
  setNumber: number;
  title: string;
  question: {
    en: string;
    zh: string;
  };
  answer: {
    en: string;
    zh: string;
  };
}

const videoQuestions: VideoQuestion[] = [
  {
    id: 'video1',
    setNumber: 1,
    title: 'Masking in Video Editing',
    question: {
      en: 'Please explain the function of "masks" in video editing and provide an example of a typical application scenario.',
      zh: '请解释视频剪辑中"蒙版"的作用，并举例说明其典型应用场景。'
    },
    answer: {
      en: `Masks in video editing function as selective tools that define specific areas of the frame where effects can be applied without affecting the rest of the image.

Core Functions:
• Define and isolate specific regions in the frame
• Control the visibility and transparency of layers
• Apply effects selectively to designated areas
• Create complex compositing effects

Typical Application Example - Color Grading Specific Objects:
In a scene where a person is wearing a red dress in a neutrally lit room, you can use a mask to isolate the dress and enhance its color saturation without affecting skin tones or the background. The process involves:
1. Creating a mask around the dress using rotoscoping or color selection tools
2. Applying color correction only to the masked area
3. Tracking the mask to follow the dress movement throughout the clip
4. Feathering the mask edges for seamless blending`,
      zh: `蒙版在视频剪辑中的作用是定义画面的特定区域，使编辑者能够仅对选定区域应用效果、调整或修改，而不影响画面的其他部分。

核心功能：
• 定义和隔离画面中的特定区域
• 控制图层的可见性和透明度
• 选择性地对指定区域应用效果
• 创建复杂的合成效果

典型应用示例 - 局部调色：
在一个场景中，人物穿着红色连衣裙站在中性光线的房间里，您可以使用蒙版隔离连衣裙并增强其颜色饱和度，而不影响肤色或背景。具体过程包括：
1. 使用旋转遮罩或颜色选择工具在连衣裙周围创建蒙版
2. 仅对蒙版区域应用颜色校正
3. 跟踪蒙版以跟随整个片段中连衣裙的移动
4. 羽化蒙版边缘以实现无缝混合`
    }
  },
  {
    id: 'video2',
    setNumber: 2,
    title: 'Scaling Animation with Keyframes',
    question: {
      en: 'How can you create a scaling animation where an element (such as text or an icon) grows from small to large on screen using keyframes? Please briefly describe the process.',
      zh: '如何通过关键帧实现一个元素（如文字或图标）在画面中由小变大的缩放动画？请简要叙述操作过程。'
    },
    answer: {
      en: `Creating a scaling animation using keyframes involves setting multiple animation points that define how an element changes size over time.

Step-by-Step Process:
1. Import and Position Element: Place your text or icon on the timeline at the desired starting time
2. Set Initial Keyframe:
   • Move the playhead to the starting position
   • Select the element and access its transform properties
   • Set the scale value (e.g., 0% or 10% for a small start)
   • Click the keyframe button to create the first keyframe

3. Set End Keyframe:
   • Move the playhead to the desired end time (e.g., 2 seconds later)
   • Adjust the scale value to the final size (e.g., 100% or larger)
   • A second keyframe is automatically created

4. Fine-tune the Animation:
   • Adjust the timing by dragging keyframes
   • Apply easing curves (ease in/out) for smoother motion
   • Preview and refine as needed

Pro Tips:
• Use ease curves to make the animation feel more natural
• Consider adding rotation or position changes for more dynamic effects
• Adjust the anchor point for different scaling origins (center, corner, etc.)`,
      zh: `使用关键帧创建缩放动画涉及设置多个动画点，定义元素如何随时间改变大小。

分步操作：
1. 导入并定位元素：将文字或图标放置在时间轴上所需的起始时间
2. 设置初始关键帧：
   • 将播放头移动到起始位置
   • 选择元素并访问其变换属性
   • 设置缩放值（例如，0%或10%作为小尺寸起点）
   • 点击关键帧按钮创建第一个关键帧

3. 设置结束关键帧：
   • 将播放头移动到所需的结束时间（例如，2秒后）
   • 将缩放值调整到最终大小（例如，100%或更大）
   • 第二个关键帧会自动创建

4. 微调动画：
   • 通过拖动关键帧调整时间
   • 应用缓动曲线（缓入/缓出）以获得更流畅的运动
   • 预览并根据需要进行优化

专业提示：
• 使用缓动曲线使动画感觉更自然
• 考虑添加旋转或位置变化以获得更动态的效果
• 调整锚点以实现不同的缩放原点（中心、角落等）`
    }
  },
  {
    id: 'video3',
    setNumber: 3,
    title: 'Enhancing Visual Fluidity in Fast Action',
    question: {
      en: 'What method can be used to improve visual fluidity in fast action shots or hard cut transitions, and how does this method work?',
      zh: '在快速动作镜头或硬切转场中，可以使用什么方法来改善视觉流畅性？这种方法是如何工作的？'
    },
    answer: {
      en: `Motion blur is the primary method for enhancing visual fluidity in fast action shots and hard cut transitions. This technique simulates the natural phenomenon of visual persistence that occurs in human vision and traditional film cameras.

How Motion Blur Works:
1. Natural Simulation: Mimics how our eyes perceive rapid movement, creating a slight blur trail
2. Frame Blending: Combines information from multiple frames to create smooth transitions
3. Directional Blur: Applies blur in the direction of movement, maintaining visual continuity

Implementation Methods:
• In-Camera: Using appropriate shutter speeds (180-degree shutter rule)
• Post-Production: Adding motion blur effects in editing software
• Optical Flow: Advanced interpolation for creating intermediate frames

Benefits:
• Reduces the jarring effect of fast cuts
• Creates visual bridges between disparate shots
• Enhances the sense of speed and dynamism
• Masks minor continuity errors in action sequences

Additional Techniques:
• Speed ramping for dynamic tempo changes
• Whip pans or motion-based transitions
• Frame interpolation for ultra-smooth slow motion`,
      zh: `运动模糊是增强快速动作镜头和硬切转场视觉流畅性的主要方法。这种技术模拟了人类视觉和传统胶片相机中出现的视觉暂留自然现象。

运动模糊的工作原理：
1. 自然模拟：模仿我们的眼睛感知快速运动的方式，创造轻微的模糊轨迹
2. 帧混合：结合多个帧的信息以创建平滑过渡
3. 方向性模糊：在运动方向上应用模糊，保持视觉连续性

实施方法：
• 相机内：使用适当的快门速度（180度快门规则）
• 后期制作：在编辑软件中添加运动模糊效果
• 光流：用于创建中间帧的高级插值

优点：
• 减少快速剪切的突兀感
• 在不同镜头之间创建视觉桥梁
• 增强速度感和动感
• 掩盖动作序列中的小连续性错误

其他技术：
• 速度渐变以实现动态节奏变化
• 甩镜或基于运动的转场
• 帧插值以实现超流畅慢动作`
    }
  },
  {
    id: 'video4',
    setNumber: 4,
    title: 'Shot Length and Rhythm in Editing',
    question: {
      en: 'How should long and short shots be sequenced in editing to create a well-paced rhythm, and what characteristics should these shots have (such as shot sizes)?',
      zh: '在剪辑中，长镜头和短镜头应该如何排序以创造良好的节奏感？这些镜头应该具有什么特征（如镜头尺寸）？'
    },
    answer: {
      en: `Effective rhythm in video editing comes from the strategic alternation of shot lengths and sizes, creating what editors call "breathing room" in the narrative flow.

The "Three Short, One Long" Pattern:
• Structure: 2-4 quick cuts followed by a longer, sustained shot
• Timing: Short shots: 0.5-2 seconds; Long shots: 3-8 seconds
• Purpose: Creates tension through rapid cuts, then provides relief with a longer shot

Shot Characteristics:

Short Shots Should Feature:
• Close-ups and extreme close-ups (details, emotions)
• Specific actions or reactions
• High visual impact moments
• Quick information delivery

Long Shots Should Feature:
• Wide shots or establishing shots
• Medium shots for dialogue or character development
• Environmental context
• Emotional breathing space

Advanced Rhythm Techniques:
1. Accelerating Rhythm: Gradually shortening shot lengths to build tension
2. Decelerating Rhythm: Lengthening shots to create calm or contemplation
3. Rhythmic Motifs: Repeating patterns that create expectation
4. Counterpoint Rhythm: Contrasting visual rhythm with audio rhythm

Practical Application Example:
• Shot 1: Close-up of eyes (1 second)
• Shot 2: Extreme close-up of hands (0.8 seconds)
• Shot 3: Medium shot of action (1.2 seconds)
• Shot 4: Wide establishing shot (5 seconds)`,
      zh: `视频剪辑中的有效节奏来自于镜头长度和大小的策略性交替，创造编辑者所谓的叙事流中的"呼吸空间"。

"三短一长"模式：
• 结构：2-4个快速剪切后跟随一个较长的持续镜头
• 时间：短镜头：0.5-2秒；长镜头：3-8秒
• 目的：通过快速剪切创造紧张感，然后用较长的镜头提供缓解

镜头特征：

短镜头应具备：
• 特写和极特写（细节、情感）
• 特定的动作或反应
• 高视觉冲击力的时刻
• 快速信息传递

长镜头应具备：
• 全景或建立镜头
• 对话或角色发展的中景
• 环境背景
• 情感呼吸空间

高级节奏技巧：
1. 加速节奏：逐渐缩短镜头长度以建立紧张感
2. 减速节奏：延长镜头以创造平静或沉思
3. 节奏主题：创造期待的重复模式
4. 对位节奏：视觉节奏与音频节奏的对比

实际应用示例：
• 镜头1：眼睛特写（1秒）
• 镜头2：手部极特写（0.8秒）
• 镜头3：动作中景（1.2秒）
• 镜头4：全景建立镜头（5秒）`
    }
  }
];

interface QuestionModalProps {
  question: Question;
  onClose: () => void;
  showAnswers: boolean;
  onToggleAnswers: () => void;
}

const QuestionModal = ({ question, onClose, showAnswers, onToggleAnswers }: QuestionModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {question.title.en}<br/>
            <span style={{ fontSize: '0.8em', fontStyle: 'italic' }}>{question.title.zh}</span>
          </h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <img 
            src={question.imagePath} 
            alt={`Set ${question.setNumber}`} 
            className="question-image"
          />

          <div className="question-section">
            <h3 className="question-label">Situation / 情况</h3>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8' }}>{question.situation.en}</p>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8', marginTop: '0.5rem', fontStyle: 'italic' }}>{question.situation.zh}</p>
          </div>

          <div className="question-section">
            <h3 className="question-label">Question A / 问题A</h3>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8' }}>{question.questionA.question.en}</p>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8', marginTop: '0.5rem', fontStyle: 'italic' }}>{question.questionA.question.zh}</p>
            
            {showAnswers && (
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                <strong>Answer / 答案:</strong>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.8', whiteSpace: 'pre-line', marginTop: '0.5rem' }}>{question.questionA.answer.en}</p>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.8', whiteSpace: 'pre-line', marginTop: '0.5rem', fontStyle: 'italic' }}>{question.questionA.answer.zh}</p>
              </div>
            )}
          </div>

          <div className="question-section">
            <h3 className="question-label">Question B / 问题B</h3>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8' }}>{question.questionB.question.en}</p>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8', marginTop: '0.5rem', fontStyle: 'italic' }}>{question.questionB.question.zh}</p>
            
            {showAnswers && (
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                <strong>Answer / 答案:</strong>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.8', whiteSpace: 'pre-line', marginTop: '0.5rem' }}>{question.questionB.answer.en}</p>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.8', whiteSpace: 'pre-line', marginTop: '0.5rem', fontStyle: 'italic' }}>{question.questionB.answer.zh}</p>
              </div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="action-button back-button" onClick={onClose}>
            Back
          </button>
          <button className="action-button" onClick={onToggleAnswers}>
            {showAnswers ? 'Hide Answers' : 'Show Answers'}
          </button>
        </div>
      </div>
    </div>
  );
};

interface VideoQuestionModalProps {
  question: VideoQuestion;
  onClose: () => void;
  showAnswer: boolean;
  onToggleAnswer: () => void;
}

const VideoQuestionModal = ({ question, onClose, showAnswer, onToggleAnswer }: VideoQuestionModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{question.title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="question-section">
            <h3 className="question-label">Question / 问题</h3>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>{question.question.en}</p>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginTop: '1rem', fontStyle: 'italic' }}>{question.question.zh}</p>
          </div>
          
          {showAnswer && (
            <div className="question-section" style={{ marginTop: '2rem' }}>
              <h3 className="question-label">Answer / 答案</h3>
              <div style={{ fontSize: '1.4rem', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                {question.answer.en}
              </div>
              <div style={{ fontSize: '1.4rem', lineHeight: '1.8', whiteSpace: 'pre-wrap', marginTop: '1.5rem', fontStyle: 'italic' }}>
                {question.answer.zh}
              </div>
            </div>
          )}
        </div>
        
        <div className="modal-footer">
          <button className="action-button back-button" onClick={onClose}>
            Back
          </button>
          <button className="action-button" onClick={onToggleAnswer}>
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>
        </div>
      </div>
    </div>
  );
};

const IndividualQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [selectedVideoQuestion, setSelectedVideoQuestion] = useState<VideoQuestion | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [showVideoAnswer, setShowVideoAnswer] = useState(false);

  const handleQuestionClick = (question: Question) => {
    setSelectedQuestion(question);
    setShowAnswers(false);
  };

  const handleVideoQuestionClick = (question: VideoQuestion) => {
    setSelectedVideoQuestion(question);
    setShowVideoAnswer(false);
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
    setSelectedVideoQuestion(null);
    setShowAnswers(false);
    setShowVideoAnswer(false);
  };

  return (
    <div className="page questions-container">
      <h1 className="page-title">
        Individual Questions<br/>
        <span style={{ fontSize: '0.8em' }}>个人问题</span>
      </h1>

      <div className="category-section">
        <h2 className="category-title">
          <span className="category-icon">📸</span>
          Photo Adjustment - Lightroom / 照片调整 - Lightroom
        </h2>
        <div className="questions-grid">
          {photoQuestions.map((question) => (
            <button
              key={question.id}
              className="question-button"
              onClick={() => handleQuestionClick(question)}
            >
              Set {question.setNumber}: {question.title.en.split(' - ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2 className="category-title">
          <span className="category-icon">🎬</span>
          Video Editing - CapCut / 视频编辑 - CapCut
        </h2>
        <div className="questions-grid">
          {videoQuestions.map((question) => (
            <button
              key={question.id}
              className="question-button"
              onClick={() => handleVideoQuestionClick(question)}
            >
              Set {question.setNumber}: {question.title}
            </button>
          ))}
        </div>
      </div>

      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onClose={handleCloseModal}
          showAnswers={showAnswers}
          onToggleAnswers={() => setShowAnswers(!showAnswers)}
        />
      )}
      
      {selectedVideoQuestion && (
        <VideoQuestionModal
          question={selectedVideoQuestion}
          onClose={handleCloseModal}
          showAnswer={showVideoAnswer}
          onToggleAnswer={() => setShowVideoAnswer(!showVideoAnswer)}
        />
      )}
    </div>
  );
};

export default IndividualQuestions;