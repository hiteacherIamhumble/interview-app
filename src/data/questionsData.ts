export interface Question {
  id: string;
  setNumber: number;
  title: {
    en: string;
    zh: string;
  };
  situation: {
    en: string;
    zh: string;
  };
  questionA: {
    question: {
      en: string;
      zh: string;
    };
    answer: {
      en: string;
      zh: string;
    };
  };
  questionB: {
    question: {
      en: string;
      zh: string;
    };
    answer: {
      en: string;
      zh: string;
    };
  };
  imagePath: string;
}

export const photoQuestions: Question[] = [
  {
    id: "set1",
    setNumber: 1,
    title: {
      en: "Landscape Photography - Golden Hour Shot",
      zh: "风光摄影 - 黄金时刻拍摄"
    },
    situation: {
      en: "You've captured a landscape during golden hour, but the foreground is severely underexposed while the sky is properly exposed. The image has a strong color cast from the warm sunset light.",
      zh: "你在黄金时刻拍摄了一张风光照片，但前景严重曝光不足，而天空曝光正常。图像因温暖的夕阳光线而有强烈的色偏。"
    },
    questionA: {
      question: {
        en: "The histogram shows heavy clipping in the shadows with data bunched on the left side. How would you use graduated filters and the tone curve to recover shadow detail without introducing noise, and what white balance adjustments would preserve the golden hour mood while correcting the excessive warmth in the shadows?",
        zh: "直方图显示阴影部分严重削波，数据集中在左侧。你将如何使用渐变滤镜和色调曲线来恢复阴影细节而不引入噪点？什么样的白平衡调整既能保持黄金时刻的氛围，又能纠正阴影中过度的暖色？"
      },
      answer: {
        en: "- Set initial exposure compensation to +0.5 to +1.0 globally\n- Use graduated filter with exposure +1.5 to +2.0 for foreground only\n- Adjust tone curve: lift shadows point (0,0) to (0,15), create slight S-curve\n- Set Temp to 6500K-7000K (preserve warmth), Tint +5 to +10\n- Use second graduated filter on foreground with Temp -500 to counteract excessive warmth\n- Enable shadow/highlight clipping warnings to monitor recovery\n- Noise reduction: Apply masking to shadows only, Luminance NR 25-35",
        zh: "- 全局设置初始曝光补偿为+0.5至+1.0\n- 仅对前景使用曝光+1.5至+2.0的渐变滤镜\n- 调整色调曲线：将阴影点(0,0)提升至(0,15)，创建轻微的S曲线\n- 设置色温为6500K-7000K（保留暖色），色调+5至+10\n- 在前景使用第二个渐变滤镜，色温-500以抵消过度的暖色\n- 启用阴影/高光削波警告以监控恢复情况\n- 降噪：仅对阴影应用蒙版，亮度降噪25-35"
      }
    },
    questionB: {
      question: {
        en: "How would you use luminosity masks combined with color grading to enhance the warm tones in the sky while adding complementary cool tones to the shadow areas? Include specific HSL adjustments for enhancing the orange/pink sunset colors without oversaturating.",
        zh: "你将如何使用亮度蒙版结合色彩分级来增强天空中的暖色调，同时为阴影区域添加互补的冷色调？请包括具体的HSL调整，以增强橙色/粉色的日落色彩而不过度饱和。"
      },
      answer: {
        en: "- Create luminosity mask: Range Mask > Luminance 0-50 for shadows\n- Apply Color Grading: Shadows - Hue 220° (blue), Saturation 15, Luminance 5\n- Create second mask: Luminance 50-100 for highlights/sky\n- Color Grading: Highlights - Hue 30° (orange), Saturation 20, Luminance 8\n- HSL adjustments: Orange luminance +15, saturation +20; Red luminance +10, saturation +15\n- Fine-tune with Color Mixer: Orange hue shift +10 toward red, Yellow hue shift -5 toward orange\n- Balance adjustment: Global vibrance +25, saturation -5",
        zh: "- 创建亮度蒙版：范围蒙版 > 亮度0-50用于阴影\n- 应用色彩分级：阴影 - 色相220°（蓝色），饱和度15，明度5\n- 创建第二个蒙版：亮度50-100用于高光/天空\n- 色彩分级：高光 - 色相30°（橙色），饱和度20，明度8\n- HSL调整：橙色明度+15，饱和度+20；红色明度+10，饱和度+15\n- 使用颜色混合器微调：橙色色相向红色偏移+10，黄色色相向橙色偏移-5\n- 平衡调整：全局自然饱和度+25，饱和度-5"
      }
    },
    imagePath: "/assets/Set1.png"
  },
  {
    id: "set2",
    setNumber: 2,
    title: {
      en: "Indoor Event Photography - Mixed Lighting",
      zh: "室内活动摄影 - 混合光源"
    },
    situation: {
      en: "You're editing wedding reception photos shot under mixed lighting conditions (tungsten chandeliers, LED uplighting, and window light). The bride's dress appears yellow in some areas and blue in others.",
      zh: "你正在编辑在混合光源条件下（钨丝灯吊灯、LED向上照明和窗户光）拍摄的婚礼接待照片。新娘的礼服在某些区域显得发黄，在其他区域显得发蓝。"
    },
    questionA: {
      question: {
        en: "The histogram shows proper exposure but with color channel separation. How would you use the eyedropper tool strategically on the dress, and should you adjust the white balance globally or use multiple graduated filters with different temperature/tint values?",
        zh: "直方图显示曝光正确但颜色通道分离。你将如何策略性地在礼服上使用吸管工具？应该全局调整白平衡还是使用多个具有不同色温/色调值的渐变滤镜？"
      },
      answer: {
        en: "- First attempt: Eyedropper on dress area under window light (most neutral)\n- If inconsistent, create 3-4 radial/graduated filters for different zones\n- Zone 1 (tungsten): Temp -800 to -1000, Tint +15\n- Zone 2 (LED): Temp +200, Tint -20 to -30\n- Zone 3 (window): Minor adjustments only\n- Use Auto WB as starting point, then manually adjust each zone\n- Monitor RGB histogram separation, aim for channel alignment\n- Alternative: Use multiple virtual copies with different WB, blend with masks",
        zh: "- 首次尝试：在窗光下的礼服区域使用吸管工具（最中性）\n- 如果不一致，为不同区域创建3-4个径向/渐变滤镜\n- 区域1（钨丝灯）：色温-800至-1000，色调+15\n- 区域2（LED）：色温+200，色调-20至-30\n- 区域3（窗户）：仅做轻微调整\n- 使用自动白平衡作为起点，然后手动调整每个区域\n- 监控RGB直方图分离，目标是通道对齐\n- 替代方案：使用多个具有不同白平衡的虚拟副本，用蒙版混合"
      }
    },
    questionB: {
      question: {
        en: "Describe how to create complex masks using Select Subject combined with Color Range to isolate skin tones and the dress separately. What specific color mixer adjustments would neutralize the color contamination while maintaining natural skin tones?",
        zh: "描述如何使用选择主体结合颜色范围创建复杂蒙版，分别隔离肤色和礼服。什么样的特定颜色混合器调整能够中和颜色污染，同时保持自然的肤色？"
      },
      answer: {
        en: "- Select Subject > Create Mask for entire person\n- Duplicate mask, use Color Range to subtract everything except dress (L: 90-100)\n- Create new mask: Color Range for skin (Sample skin, Refine: 25-30)\n- Dress mask adjustments: Vibrance -100, Saturation -50 to remove color casts\n- Skin mask: Orange primary -5 saturation, +5 luminance; Red: -3 saturation\n- Global Color Mixer: Yellow saturation -20, Orange hue +5 toward red\n- Use brush mask with Auto Mask on to clean up edge transitions\n- Final touch: Calibration panel - Red Primary Hue +5, Green Primary Hue -3",
        zh: "- 选择主体 > 为整个人物创建蒙版\n- 复制蒙版，使用颜色范围减去礼服以外的所有内容（亮度：90-100）\n- 创建新蒙版：皮肤的颜色范围（采样皮肤，优化：25-30）\n- 礼服蒙版调整：自然饱和度-100，饱和度-50以去除色偏\n- 皮肤蒙版：橙色主要-5饱和度，+5明度；红色：-3饱和度\n- 全局颜色混合器：黄色饱和度-20，橙色色相向红色+5\n- 使用带自动蒙版的画笔蒙版清理边缘过渡\n- 最后润色：校准面板 - 红色主色相+5，绿色主色相-3"
      }
    },
    imagePath: "/assets/Set2.png"
  },
  {
    id: "set3",
    setNumber: 3,
    title: {
      en: "Portrait Photography - Harsh Midday Sun",
      zh: "人像摄影 - 强烈正午阳光"
    },
    situation: {
      en: "You have a portrait shot in harsh midday sunlight with deep shadows under the eyes and chin, blown highlights on the forehead, and unflattering skin tones. The background is properly exposed but distracting.",
      zh: "你有一张在强烈正午阳光下拍摄的人像，眼睛和下巴下有深重的阴影，前额高光过曝，肤色不讨喜。背景曝光正确但令人分心。"
    },
    questionA: {
      question: {
        en: "The histogram shows clipping at both ends. How would you use the highlights/shadows sliders in conjunction with luminosity masking to recover detail, and what's the optimal approach for adjusting exposure locally using radial filters without creating halos?",
        zh: "直方图显示两端都有削波。你将如何结合亮度蒙版使用高光/阴影滑块来恢复细节？使用径向滤镜局部调整曝光而不产生光晕的最佳方法是什么？"
      },
      answer: {
        en: "- Initial: Highlights -100, Shadows +60 (preserve some contrast)\n- Create radial filter over face, feather 80-90\n- Radial settings: Exposure +0.4, Highlights -50 additional, Shadows +20\n- Enable Range Mask > Luminance, select midtones only (20-80)\n- Fine-tune feather and adjustment brush to prevent halos\n- Use graduated filter on forehead: Exposure -0.3, Highlights -30\n- Monitor histogram throughout, aim for data between 5-250\n- Add subtle fill light: Radial on shadow side, Exposure +0.2, Blacks +15",
        zh: "- 初始：高光-100，阴影+60（保留一些对比度）\n- 在脸部创建径向滤镜，羽化80-90\n- 径向设置：曝光+0.4，高光额外-50，阴影+20\n- 启用范围蒙版 > 亮度，仅选择中间调（20-80）\n- 微调羽化和调整画笔以防止光晕\n- 在前额使用渐变滤镜：曝光-0.3，高光-30\n- 全程监控直方图，目标是数据在5-250之间\n- 添加微妙的补光：阴影侧径向，曝光+0.2，黑色+15"
      }
    },
    questionB: {
      question: {
        en: "How would you use AI masking to select skin, then apply targeted HSL adjustments to orange and red channels for skin tone correction? Include techniques for using negative clarity/texture on skin while maintaining eye and hair sharpness through masking.",
        zh: "你将如何使用AI蒙版选择皮肤，然后对橙色和红色通道应用有针对性的HSL调整来校正肤色？包括在皮肤上使用负清晰度/纹理的技术，同时通过蒙版保持眼睛和头发的锐度。"
      },
      answer: {
        en: "- Select Person > Select Skin (AI detection)\n- Skin adjustments: Texture -40, Clarity -20, Dehaze +10\n- HSL on skin mask: Orange: Hue +5, Saturation -15, Luminance +10\n- Red: Hue +3, Saturation -10, Luminance +5\n- Create separate mask: Select Eye Sclera + Iris\n- Eyes: Exposure +0.3, Clarity +20, Sharpness +30\n- Invert skin mask for hair/clothing: Texture +20, Clarity +15\n- Lips mask: Saturation +10, Luminance +5\n- Background separation: Luminosity mask, Clarity -40, Saturation -30",
        zh: "- 选择人物 > 选择皮肤（AI检测）\n- 皮肤调整：纹理-40，清晰度-20，去雾+10\n- 皮肤蒙版上的HSL：橙色：色相+5，饱和度-15，明度+10\n- 红色：色相+3，饱和度-10，明度+5\n- 创建单独蒙版：选择眼白+虹膜\n- 眼睛：曝光+0.3，清晰度+20，锐化+30\n- 反转皮肤蒙版用于头发/服装：纹理+20，清晰度+15\n- 嘴唇蒙版：饱和度+10，明度+5\n- 背景分离：亮度蒙版，清晰度-40，饱和度-30"
      }
    },
    imagePath: "/assets/Set3.webp"
  },
  {
    id: "set4",
    setNumber: 4,
    title: {
      en: "Landscape Photography - Mountain Vista with Fog",
      zh: "风光摄影 - 雾中山景"
    },
    situation: {
      en: "You're editing a mountain landscape shot at dawn with layers of fog in the valleys. The distant peaks lack contrast due to atmospheric haze, and the foreground rocks appear too cool in color temperature. The fog has uneven density causing some areas to look washed out.",
      zh: "你正在编辑一张黎明时分拍摄的山景照片，山谷中有层层雾气。远处的山峰因大气雾霾缺乏对比度，前景的岩石色温显得过冷。雾的密度不均匀导致某些区域看起来褪色。"
    },
    questionA: {
      question: {
        en: "The histogram shows a narrow tonal range concentrated in the midtones. How would you use the Dehaze tool selectively with masking to enhance distant mountains without affecting the fog's ethereal quality, and what's the best approach to warm the foreground rocks while maintaining the cool pre-dawn atmosphere?",
        zh: "直方图显示色调范围狭窄，集中在中间调。你将如何选择性地使用去雾工具配合蒙版来增强远山而不影响雾的空灵质感？在保持黎明前的冷色氛围的同时，温暖前景岩石的最佳方法是什么？"
      },
      answer: {
        en: "- Expand tonal range: Whites +30, Blacks -20 (careful not to clip)\n- Create linear gradient mask for distant mountains only\n- Mountain mask: Dehaze +40 to +60, Contrast +20, Clarity +15\n- Fog areas: Inverse mask, Dehaze -10 to preserve ethereal look\n- Foreground rocks: Radial filter, Temp +400 to +600, Tint +5\n- Global adjustment: Vibrance +20, slight S-curve on tone curve\n- Use intersecting masks: Luminosity range 30-70 for midtone fog only\n- Texture +10 globally to enhance rock detail without affecting fog",
        zh: "- 扩展色调范围：白色+30，黑色-20（小心不要削波）\n- 仅为远山创建线性渐变蒙版\n- 山脉蒙版：去雾+40至+60，对比度+20，清晰度+15\n- 雾区：反向蒙版，去雾-10以保留空灵外观\n- 前景岩石：径向滤镜，色温+400至+600，色调+5\n- 全局调整：自然饱和度+20，色调曲线上轻微的S曲线\n- 使用交叉蒙版：亮度范围30-70仅用于中间调雾\n- 全局纹理+10以增强岩石细节而不影响雾"
      }
    },
    questionB: {
      question: {
        en: "How would you create depth using luminosity-based color grading to separate the fog layers, and what specific HSL adjustments would enhance the sunrise colors on the peaks while preserving the subtle blue tones in the shadows? Include techniques for enhancing fog luminosity without losing detail.",
        zh: "你将如何使用基于亮度的色彩分级来创建深度以分离雾层？什么样的特定HSL调整能够增强山峰上的日出色彩，同时保留阴影中的微妙蓝色调？包括增强雾的明度而不失去细节的技术。"
      },
      answer: {
        en: "- Create 3 luminosity masks for fog layers: L0-30, L30-60, L60-90\n- Near fog (L60-90): Color Grade - Highlights blue 200°, Sat 5, Lum +10\n- Mid fog (L30-60): Neutral grading, Luminance +5\n- Far fog (L0-30): Slight warm grade, Orange 30°, Sat 3\n- Mountain peaks: Select by color range (sample sunrise colors)\n- Peak HSL: Orange +20 luminance, +15 saturation; Pink +10 lum, +20 sat\n- Shadow preservation: Blue luminance -5, Purple saturation +10\n- Fog enhancement: Create mask for fog only, Highlights +20, Whites +15\n- Split-toning: Highlights 35° warmth Sat 8, Shadows 220° cool Sat 12",
        zh: "- 为雾层创建3个亮度蒙版：L0-30，L30-60，L60-90\n- 近雾（L60-90）：色彩分级 - 高光蓝色200°，饱和度5，明度+10\n- 中雾（L30-60）：中性分级，明度+5\n- 远雾（L0-30）：轻微暖色分级，橙色30°，饱和度3\n- 山峰：通过颜色范围选择（采样日出颜色）\n- 山峰HSL：橙色+20明度，+15饱和度；粉色+10明度，+20饱和度\n- 阴影保留：蓝色明度-5，紫色饱和度+10\n- 雾增强：仅为雾创建蒙版，高光+20，白色+15\n- 分离色调：高光35°暖色饱和度8，阴影220°冷色饱和度12"
      }
    },
    imagePath: "/assets/Set4.png"
  },
  {
    id: "set5",
    setNumber: 5,
    title: {
      en: "Product Photography - Reflective Surfaces",
      zh: "产品摄影 - 反光表面"
    },
    situation: {
      en: "You're editing product shots of chrome and glass items on a white background. The items show color casts from surrounding objects, uneven reflections, and the white background has gradient issues.",
      zh: "你正在编辑白色背景上的铬合金和玻璃制品的产品照片。这些物品显示来自周围物体的色偏、不均匀的反射，白色背景有渐变问题。"
    },
    questionA: {
      question: {
        en: "The histogram shows the background isn't pure white (245-250 instead of 255). How would you use the whites slider and tone curve to achieve pure white without blowing out product highlights? What white balance workflow ensures metallic surfaces appear neutral?",
        zh: "直方图显示背景不是纯白色（245-250而不是255）。你将如何使用白色滑块和色调曲线来实现纯白色而不让产品高光过曝？什么样的白平衡工作流程能确保金属表面呈现中性？"
      },
      answer: {
        en: "- Global: Whites +40 to +60 (watch product highlights)\n- Create precise product mask using Select Object\n- Invert mask for background only adjustment\n- Background: Whites +100, Exposure +0.5 to +1.0\n- Tone curve: Lift highlight point from (255,255) to (245,255)\n- Product mask: Whites -20 to protect highlights\n- WB: Use eyedropper on neutral chrome area, typically 5500K-6000K\n- Fine-tune: Tint toward magenta (+5 to +10) for chrome neutrality\n- Create edge gradient masks to clean background edges",
        zh: "- 全局：白色+40至+60（注意产品高光）\n- 使用选择对象创建精确的产品蒙版\n- 反转蒙版仅用于背景调整\n- 背景：白色+100，曝光+0.5至+1.0\n- 色调曲线：将高光点从(255,255)提升至(245,255)\n- 产品蒙版：白色-20以保护高光\n- 白平衡：在中性铬区域使用吸管工具，通常5500K-6000K\n- 微调：色调偏向洋红（+5至+10）以获得铬的中性\n- 创建边缘渐变蒙版以清理背景边缘"
      }
    },
    questionB: {
      question: {
        en: "How would you use Select Object with refinement to isolate the product, then apply desaturation to specific color ranges to remove color contamination from reflections? Include techniques for using color range masks to target and neutralize specific color casts while preserving intentional product colors.",
        zh: "你将如何使用<选择对象>并进行细化来隔离产品，然后对特定颜色范围应用去饱和度以去除反射中的颜色污染？包括使用颜色范围蒙版来定位和中和特定色偏的技术，同时保留产品的原本颜色。"
      },
      answer: {
        en: "- Select Object with high precision refinement\n- Duplicate mask, use Color Range to select only reflections\n- Reflection mask: Saturation -60 to -80, targeting contamination\n- HSL adjustments on product: Identify contaminating colors\n- Example: Green reflections - Green saturation -100, Aqua -80\n- Create edge refinement mask: Select Object > Refine Edge\n- Edge mask: Clarity +30, Dehaze +10 for definition\n- Color protection: Create mask for product's actual colors\n- Protected areas: Saturation +10 to +20 to compensate\n- Final polish: Calibration panel adjustments for precise neutrals",
        zh: "- 使用高精度优化选择对象\n- 复制蒙版，使用颜色范围仅选择反射\n- 反射蒙版：饱和度-60至-80，针对污染\n- 产品上的HSL调整：识别污染颜色\n- 例如：绿色反射 - 绿色饱和度-100，青色-80\n- 创建边缘优化蒙版：选择对象 > 优化边缘\n- 边缘蒙版：清晰度+30，去雾+10以增强定义\n- 颜色保护：为产品的实际颜色创建蒙版\n- 受保护区域：饱和度+10至+20以补偿\n- 最终润色：校准面板调整以获得精确的中性"
      }
    },
    imagePath: "/assets/Set5.jpeg"
  }
];