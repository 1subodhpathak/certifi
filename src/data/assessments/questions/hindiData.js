import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import businessMessageImage from '../../../assets/assessments/hindi/business_message.png';
import dailyScheduleImage from '../../../assets/assessments/hindi/daily_schedule.png';
import officeDirectoryImage from '../../../assets/assessments/hindi/office_directory.png';

export const hindiData = {
  id: ASSESSMENT_TYPES.hindi,
  title: 'Hindi Professional Language Proficiency Certification',
  shortTitle: 'Hindi',
  category: 'Language Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Interactive professional Hindi assessment covering workplace comprehension, formal communication, business messages, meetings, schedules, charts, tables, tone, grammar in context, negotiation, and customer communication.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Questions include business-message exhibits, office visuals, schedules, tables, charts, and Mermaid conversation flows. हर प्रश्न के संदर्भ और दृश्य को ध्यान से पढ़कर सबसे उपयुक्त पेशेवर उत्तर चुनें। No negative marking.',
  questions: [
    {
      id: 'hi-01',
      type: 'mcq',
      title: 'व्यावसायिक संदेश',
      difficulty: 'easy',
      points: 5,
      prompt: `नीचे दिया गया संदेश पढ़िए।

{{image}}

अमित का मुख्य उद्देश्य क्या है?`,
      image: {
        src: businessMessageImage,
        alt: 'बैठक का समय बदलने के लिए व्यावसायिक संदेश'
      },
      options: [
        'बैठक हमेशा के लिए रद्द करना।',
        'बैठक का समय विनम्रता से बदलना और पुष्टि माँगना।',
        'ग्राहक से शिकायत करना।',
        'भुगतान की याद दिलाना।'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. संदेश में बैठक 2 बजे से 3:30 बजे करने और नए समय की पुष्टि माँगी गई है. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-02',
      type: 'mcq',
      title: 'कार्यक्रम समझ',
      difficulty: 'easy',
      points: 5,
      prompt: `कार्यक्रम देखिए।

{{image}}

आप केवल 11:15 से 12:30 तक उपलब्ध हैं। कौन-सी गतिविधि पूरी तरह शामिल की जा सकती है?`,
      image: {
        src: dailyScheduleImage,
        alt: 'दैनिक कार्यालय कार्यक्रम'
      },
      options: [
        'विक्रेता कॉल।',
        'ग्राहक समीक्षा।',
        'बजट समीक्षा।',
        'प्रस्तुति।'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. प्रस्तुति 11:30 से 12:15 तक है, इसलिए यह पूरी तरह उपलब्ध समय में आती है. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-03',
      type: 'mcq',
      title: 'विनम्र अनुरोध',
      difficulty: 'easy',
      points: 5,
      prompt: `आप पहली बार किसी वरिष्ठ ग्राहक से बात कर रहे हैं।

सबसे उपयुक्त वाक्य कौन-सा है?`,
      options: [
        'क्या आप कृपया पुष्टि कर सकते हैं कि गुरुवार सुबह 10 बजे का समय आपके लिए ठीक है?',
        'गुरुवार 10 बजे पक्का करो।',
        'अभी जवाब दो।',
        'गुरुवार 10 बजे। जवाब भेजो।'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. यह वाक्य विनम्र, स्पष्ट और पेशेवर है. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-04',
      type: 'mcq',
      title: 'काल का प्रयोग',
      difficulty: 'easy',
      points: 5,
      prompt: `वाक्य पूरा कीजिए:

'यदि आप आज पुष्टि कर देंगे, तो हम आदेश कल ___।'`,
      options: [
        'जारी किया',
        'जारी करते',
        'जारी करेंगे',
        'जारी कर रहे थे'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. शर्त पूरी होने पर भविष्य की क्रिया के लिए \'जारी करेंगे\' उपयुक्त है. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-05',
      type: 'mcq',
      title: 'सर्वनाम प्रयोग',
      difficulty: 'easy',
      points: 5,
      prompt: `वाक्य है: 'मैंने अनुबंध सीमा जी को भेजा।'

सही अगला वाक्य कौन-सा है?`,
      options: [
        'मैंने वह उन्हें कल भेजा।',
        'मैंने वह वे कल भेजा।',
        'मैंने उसे वे भेजा।',
        'मैंने उनको वहों भेजा।'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. \'उन्हें\' सम्मानसूचक अप्रत्यक्ष कर्म के लिए स्वाभाविक है. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-06',
      type: 'mcq',
      title: 'ग्राफ पढ़ना',
      difficulty: 'medium',
      points: 5,
      prompt: `ग्राफ देखिए।

{{chart}}

सबसे सही निष्कर्ष कौन-सा है?`,
      chart: {
        type: 'line',
        title: 'साप्ताहिक ग्राहक अनुरोध',
        xAxis: ['स1', 'स2', 'स3', 'स4', 'स5'],
        series: [{ name: 'अनुरोध', data: [42, 47, 45, 58, 66] }]
      },
      options: [
        'हर सप्ताह माँग घटी।',
        'माँग पूरी तरह स्थिर रही।',
        'सप्ताह 3 में हल्की कमी के बावजूद कुल माँग बढ़ी है।',
        'सप्ताह 2 के बाद माँग तेज़ी से गिर गई।'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. डेटा 42 से 66 तक बढ़ता है, बीच में केवल एक छोटी गिरावट है. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-07',
      type: 'mcq',
      title: 'टेलीफोन संवाद',
      difficulty: 'medium',
      points: 5,
      prompt: `संवाद पढ़िए।

{{diagram}}

ग्राहक की सबसे उपयुक्त प्रतिक्रिया क्या होगी?`,
      diagram: `flowchart LR
  A["ग्राहक: क्या मैं श्रीमती वर्मा से बात कर सकता हूँ?"] --> B["रिसेप्शन: वे 3 बजे तक बैठक में हैं।"]
  B --> C["ग्राहक: ______"]
  C --> D["रिसेप्शन: ज़रूर, मैं आपका संदेश दे दूँगा।"]`,
      options: [
        'मैं अभी फोन काट रहा हूँ।',
        'उनका निजी नंबर दीजिए।',
        'उन्हें अभी बैठक से बाहर बुलाइए।',
        'क्या आप उनसे कह सकते हैं कि वे मुझे वापस फोन कर लें?'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. यह उत्तर अगले वाक्य \'मैं आपका संदेश दे दूँगा\' से स्वाभाविक रूप से मेल खाता है. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-08',
      type: 'mcq',
      title: 'ग्राहक सेवा शैली',
      difficulty: 'medium',
      points: 5,
      prompt: `ग्राहक लिखता है: 'मेरा ऑर्डर पाँच दिन देर से है और कोई अपडेट नहीं मिला।'

सबसे पेशेवर उत्तर कौन-सा है?`,
      options: [
        'थोड़ा और इंतज़ार करें।',
        'देरी के लिए हमें खेद है। हम अभी शिपमेंट जाँच रहे हैं और आज शाम 4 बजे तक आपको अपडेट देंगे।',
        'यह कूरियर की गलती है।',
        'आपने पता गलत दिया होगा।'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. सही उत्तर समस्या स्वीकार करता है, दोष नहीं देता और स्पष्ट समयसीमा देता है. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-09',
      type: 'mcq',
      title: 'कार्यालय शब्दावली',
      difficulty: 'medium',
      points: 5,
      prompt: `निर्देशिका देखिए।

{{image}}

नए कर्मचारी को जॉइनिंग दस्तावेज कहाँ जमा करने चाहिए?`,
      image: {
        src: officeDirectoryImage,
        alt: 'कार्यालय निर्देशिका'
      },
      options: [
        'स्वागत कक्ष।',
        'लेखा विभाग।',
        'मानव संसाधन विभाग।',
        'बैठक कक्ष।'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. जॉइनिंग और कर्मचारी दस्तावेज सामान्यतः मानव संसाधन विभाग संभालता है. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-10',
      type: 'mcq',
      title: 'तालिका समझ',
      difficulty: 'medium',
      points: 5,
      prompt: `डिलीवरी तालिका देखिए।

{{table}}

किस विक्रेता ने वादा किया हुआ समय बिल्कुल पूरा किया?`,
      table: {
        headers: ['विक्रेता', 'वादा किया समय', 'वास्तविक समय'],
        rows: [
          ['A', '5 दिन', '7 दिन'],
          ['B', '8 दिन', '8 दिन'],
          ['C', '4 दिन', '6 दिन'],
          ['D', '10 दिन', '13 दिन']
        ]
      },
      options: [
        'विक्रेता B।',
        'विक्रेता A।',
        'विक्रेता C।',
        'विक्रेता D।'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. विक्रेता B का वादा किया और वास्तविक समय दोनों 8 दिन हैं. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-11',
      type: 'mcq',
      title: 'वाक्य क्रम',
      difficulty: 'medium',
      points: 5,
      prompt: `सबसे स्वाभाविक वाक्य चुनिए:

'जब निदेशक ने फोन किया, मैं रिपोर्ट ___।'`,
      options: [
        'तैयार किया था अभी',
        'तैयार कर रहा था',
        'तैयार करूँगा था',
        'तैयार करता हूँ था'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. चल रही भूतकालीन क्रिया के लिए \'तैयार कर रहा था\' स्वाभाविक है. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-12',
      type: 'mcq',
      title: 'औपचारिक पुनर्लेखन',
      difficulty: 'medium',
      points: 5,
      prompt: `सहकर्मी ने लिखा: 'आज ही नंबर भेजो।'

किसी बाहरी निदेशक के लिए सबसे उपयुक्त रूप कौन-सा है?`,
      options: [
        'आज नंबर भेजो।',
        'मुझे अभी नंबर चाहिए।',
        'नंबर। आज।',
        'कृपया आज दिन समाप्त होने से पहले आँकड़े भेजने का कष्ट करें।'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. सही विकल्प विनम्र, स्पष्ट और औपचारिक है. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-13',
      type: 'mcq',
      title: 'प्रदर्शन विश्लेषण',
      difficulty: 'hard',
      points: 5,
      prompt: `चार्ट देखिए।

{{chart}}

सबसे सही निष्कर्ष क्या है?`,
      chart: {
        type: 'bar',
        title: 'ग्राहक संतुष्टि (%)',
        categories: ['स्वागत', 'गति', 'स्पष्टता', 'समाधान'],
        series: [{ name: 'स्कोर', data: [92, 74, 88, 69] }]
      },
      options: [
        'स्वागत सबसे कमजोर है।',
        'स्पष्टता 70% से कम है।',
        'सभी संकेतक 85% से ऊपर हैं।',
        'समस्या समाधान सबसे बड़ा सुधार क्षेत्र है।'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. समाधान का स्कोर 69% है, जो सबसे कम है. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-14',
      type: 'mcq',
      title: 'तार्किक संयोजक',
      difficulty: 'hard',
      points: 5,
      prompt: `वाक्य पूरा कीजिए:

'बिक्री 12% बढ़ी। ___, लागत बढ़ने के कारण मार्जिन घट गया।'`,
      options: [
        'इसलिए',
        'हालाँकि',
        'उदाहरण के लिए',
        'इसी प्रकार'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. \'हालाँकि\' विरोध या contrast दिखाता है. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-15',
      type: 'mcq',
      title: 'वार्ता भाषा',
      difficulty: 'hard',
      points: 5,
      prompt: `आप बिना दबाव डाले विकल्प सुझाना चाहते हैं।

सबसे उपयुक्त वाक्य कौन-सा है?`,
      options: [
        'आपको दो डिलीवरी माननी ही होंगी।',
        'हम योजना बदल रहे हैं।',
        'यदि आपको उचित लगे, तो हम डिलीवरी को दो चरणों में करने पर विचार कर सकते हैं।',
        'डिलीवरी दो भाग में करें।'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. यह वाक्य सहयोगात्मक और विनम्र प्रस्ताव देता है. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-16',
      type: 'mcq',
      title: 'बैठक निर्णय',
      difficulty: 'hard',
      points: 5,
      prompt: `संवाद पढ़िए।

{{diagram}}

अंतिम निर्णय क्या हुआ?`,
      diagram: `sequenceDiagram
  participant G as ग्राहक
  participant B as बिक्री
  participant V as वित्त
  G->>B: हमें 8% छूट चाहिए
  B->>V: क्या 8% मंजूर है?
  V-->>B: बिना अतिरिक्त मंजूरी अधिकतम 5%
  B-->>G: हम 5% तुरंत दे सकते हैं
  G-->>B: स्वीकार है`,
      options: [
        'बिक्री टीम ने 5% छूट प्रस्तावित की और ग्राहक ने स्वीकार कर लिया।',
        'वित्त ने 8% मंजूर किया।',
        'ग्राहक ने हर छूट ठुकरा दी।',
        'बातचीत रद्द हो गई।'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. क्रम के अंत में ग्राहक 5% छूट स्वीकार करता है. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-17',
      type: 'mcq',
      title: 'तुलनात्मक भाषा',
      difficulty: 'hard',
      points: 5,
      prompt: `तालिका देखिए।

{{table}}

कौन-सा वाक्य तथ्यात्मक और भाषिक रूप से सही है?`,
      table: {
        headers: ['टीम', 'औसत उत्तर समय'],
        rows: [
          ['पेरिस', '2 घं 10 मि'],
          ['लियोन', '3 घं 05 मि'],
          ['बोर्दो', '1 घं 45 मि'],
          ['लिल', '2 घं 35 मि']
        ]
      },
      options: [
        'लियोन बोर्दो से तेज़ है।',
        'बोर्दो टीम सबसे तेज़ उत्तर देती है।',
        'पेरिस सबसे धीमा है।',
        'लिल बोर्दो से कम धीमा है।'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. बोर्दो का औसत उत्तर समय सबसे कम है. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-18',
      type: 'mcq',
      title: 'निर्देश समझ',
      difficulty: 'hard',
      points: 5,
      prompt: `प्रबंधक लिखता है:

'महीने के आँकड़े सही हैं, लेकिन ग्राहक को रिपोर्ट भेजने से पहले चिन्हित दो अंतर जाँच लें।'

सबसे पहले क्या करना चाहिए?`,
      options: [
        'रिपोर्ट तुरंत भेज देनी चाहिए।',
        'दोनों अंतर मिटा देने चाहिए।',
        'पूरी रिपोर्ट दोबारा लिखनी चाहिए।',
        'दोनों चिन्हित अंतर जाँचने चाहिए।'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. निर्देश स्पष्ट रूप से जाँच को बाहरी भेजने से पहले रखने को कहता है. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-19',
      type: 'mcq',
      title: 'पेशेवर लहजा',
      difficulty: 'hard',
      points: 5,
      prompt: `देरी बताने का सबसे पेशेवर तरीका कौन-सा है?`,
      options: [
        'देरी के लिए क्षमा चाहते हैं। नया पूर्ण होने का समय शाम 5 बजे है और हम 3 बजे प्रगति अपडेट भेजेंगे।',
        'काम देर से है, पर ठीक रहेगा।',
        'हम भूल गए, माफ़ कीजिए।',
        'अभी कोई अपडेट नहीं।'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. सही उत्तर समस्या स्वीकार करता है और नई समयसीमा व फॉलो-अप देता है. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'hi-20',
      type: 'mcq',
      title: 'समेकित संचार',
      difficulty: 'hard',
      points: 5,
      prompt: `प्रक्रिया देखिए।

{{diagram}}

कौन-सा उत्तर पूरी प्रक्रिया का सबसे अच्छा पालन करता है?`,
      diagram: `flowchart TB
  I["समस्या पहचानी"] --> A["समस्या स्वीकार करें"]
  A --> E["बिना दोषारोपण संक्षिप्त कारण"]
  E --> P["कार्य और समयसीमा बताएं"]
  P --> F["फॉलो-अप की पुष्टि करें"]`,
      options: [
        'आपका संदेश मिल गया।',
        'गलती विक्रेता की थी।',
        'घटना के लिए हमें खेद है। हमने कारण पहचान लिया है, सुधार शुरू कर दिया है और आज शाम 4 बजे तक समाधान की पुष्टि करेंगे।',
        'धैर्य रखने के लिए धन्यवाद।'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. उत्तर समस्या की स्वीकृति, कारण, कार्रवाई, समयसीमा और फॉलो-अप सभी देता है. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    }
  ],
};
