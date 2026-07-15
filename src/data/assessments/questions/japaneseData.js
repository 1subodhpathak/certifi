import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const japaneseData = {
  id: ASSESSMENT_TYPES.japanese,
  title: "Japanese Professional Language Proficiency Certification",
  shortTitle: "Japanese",
  category: "Language Skills",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional Japanese language assessment covering grammar, vocabulary, particles, kanji, keigo, business expressions, email etiquette, and workplace communication.",
  instructions: "最も適切な答えを選んでください。Questions progress from foundational Japanese to professional communication.",
  questions: [
{ id: 'jp-01', type: 'mcq', title: 'Grammar', prompt: '私は学生 ___。', options: ['です', 'ます', 'で', 'に'], correctIndex: 0, explanation: '"Desu" is the polite copula (to be).' },
        { id: 'jp-02', type: 'mcq', title: 'Vocabulary', prompt: '「先生」の意味は何ですか？', options: ['Student', 'Teacher', 'Doctor', 'Engineer'], correctIndex: 1, explanation: '"Sensei" means teacher.' },
        { id: 'jp-03', type: 'mcq', title: 'Particles', prompt: 'どこ ___ 行きますか？', options: ['は', 'を', 'へ', 'が'], correctIndex: 2, explanation: '"He" (pronounced e) indicates direction.' },
        { id: 'jp-04', type: 'mcq', title: 'Business Japanese', prompt: '会議室はどこですか？', options: ['Where is the office?', 'Where is the meeting room?', 'Where is the station?', 'Where is the toilet?'], correctIndex: 1, explanation: '"Kaigishitsu" means meeting room.' },
        { id: 'jp-05', type: 'mcq', title: 'Greetings', prompt: '午後の挨拶は何ですか？', options: ['おはよう', 'こんにちは', 'こんばんは', 'さようなら'], correctIndex: 1, explanation: '"Konnichiwa" is used in the afternoon.' },
        { id: 'jp-06', type: 'mcq', title: 'Numbers', prompt: '「三」は何と読みますか？', options: ['Ichi', 'Ni', 'San', 'Yon'], correctIndex: 2, explanation: '"San" is the number 3.' },
        { id: 'jp-07', type: 'mcq', title: 'Verbs', prompt: 'ご飯を ___。', options: ['飲みます', '読みます', '食べます', '書きます'], correctIndex: 2, explanation: '"Tabemasu" means to eat.' },
        { id: 'jp-08', type: 'mcq', title: 'Time', prompt: '今は何時ですか？', options: ['What day is it?', 'What time is it?', 'Where are you?', 'How are you?'], correctIndex: 1, explanation: '"Nan-ji desu ka" asks for the time.' },
        { id: 'jp-09', type: 'mcq', title: 'Keigo', prompt: '「言う」の尊敬語は何ですか？', options: ['おっしゃる', 'まいる', 'いたす', '伺う'], correctIndex: 0, explanation: '"Ossharu" is the honorific form of "iu" (to say).' },
        { id: 'jp-10', type: 'mcq', title: 'Kanji', prompt: '「水」の意味は何ですか？', options: ['Fire', 'Water', 'Wood', 'Gold'], correctIndex: 1, explanation: '"Mizu" means water.' },
        { id: 'jp-11', type: 'mcq', title: 'Vocab', prompt: 'What is "hon" (本) ?', options: ['Book', 'Tree', 'Car', 'Person'], correctIndex: 0, explanation: 'Hon = book.' },
        { id: 'jp-12', type: 'mcq', title: 'Adjectives', prompt: 'It is hot (weather).', options: ['Atsui desu', 'Samui desu', 'Takai desu', 'Yasui desu'], correctIndex: 0, explanation: 'Atsui = hot.' },
        { id: 'jp-13', type: 'mcq', title: 'Past', prompt: 'Past of "taberu" (eat) ?', options: ['tabemasen', 'tabeta', 'tabete', 'taberu'], correctIndex: 1, explanation: 'Tabeta.' },
        { id: 'jp-14', type: 'mcq', title: 'Business', prompt: 'How to say "Company" ?', options: ['Kaisha', 'Gakkou', 'Eki', 'Uchi'], correctIndex: 0, explanation: 'Kaisha = company.' },
        { id: 'jp-15', type: 'mcq', title: 'Verbs', prompt: 'I drink water.', options: ['Mizu o nomimasu', 'Mizu o tabemasu', 'Mizu o mimasu', 'Mizu o ikimasu'], correctIndex: 0, explanation: 'Nomu = drink.' },
        { id: 'jp-16', type: 'mcq', title: 'Time', prompt: 'Today is...', options: ['Kyou', 'Ashita', 'Kinou', 'Mainichi'], correctIndex: 0, explanation: 'Kyou = today.' },
        { id: 'jp-17', type: 'mcq', title: 'Particles', prompt: 'Watashi ___ gakusei desu.', options: ['wa', 'ga', 'o', 'ni'], correctIndex: 0, explanation: 'Wa is topic marker.' },
        { id: 'jp-18', type: 'mcq', title: 'Numbers', prompt: 'Juu = ?', options: ['1', '5', '10', '100'], correctIndex: 2, explanation: 'Juu = 10.' },
        { id: 'jp-19', type: 'mcq', title: 'Kanji', prompt: 'What does "火" mean?', options: ['Water', 'Fire', 'Earth', 'Wind'], correctIndex: 1, explanation: 'Hi/Ka = fire.' },
        { id: 'jp-20', type: 'mcq', title: 'Culture', prompt: 'Capital of Japan?', options: ['Kyoto', 'Osaka', 'Tokyo', 'Sapporo'], correctIndex: 2, explanation: 'Tokyo.' },
    {
          "id": "jp-21",
          "type": "mcq",
          "title": "Particles",
          "prompt": "正しい助詞を選んでください：電車 ___ 会社へ行きます。",
          "options": [
                "で",
                "を",
                "が",
                "に"
          ],
          "correctIndex": 0,
          "explanation": "で indicates the means or method of transportation."
    },
    {
          "id": "jp-22",
          "type": "mcq",
          "title": "Particles",
          "prompt": "正しい助詞を選んでください：机の上 ___ 本があります。",
          "options": [
                "を",
                "に",
                "で",
                "へ"
          ],
          "correctIndex": 1,
          "explanation": "に indicates location for existence with あります/います."
    },
    {
          "id": "jp-23",
          "type": "mcq",
          "title": "Grammar",
          "prompt": "「昨日、映画を見ました。」の時制は？",
          "options": [
                "現在",
                "過去",
                "未来",
                "命令"
          ],
          "correctIndex": 1,
          "explanation": "見ました is the polite past form of 見る."
    },
    {
          "id": "jp-24",
          "type": "mcq",
          "title": "Vocabulary",
          "prompt": "「締切」は英語で何ですか？",
          "options": [
                "Deadline",
                "Meeting",
                "Invoice",
                "Interview"
          ],
          "correctIndex": 0,
          "explanation": "締切 means deadline."
    },
    {
          "id": "jp-25",
          "type": "mcq",
          "title": "Business Japanese",
          "prompt": "「承知しました」に最も近い意味は？",
          "options": [
                "I understand / Certainly",
                "I disagree",
                "I am late",
                "I forgot"
          ],
          "correctIndex": 0,
          "explanation": "承知しました is a polite business expression for understanding or accepting."
    },
    {
          "id": "jp-26",
          "type": "mcq",
          "title": "Keigo",
          "prompt": "「行く」の謙譲語として最も適切なのは？",
          "options": [
                "いらっしゃる",
                "伺う",
                "おっしゃる",
                "召し上がる"
          ],
          "correctIndex": 1,
          "explanation": "伺う is a humble form used for going/visiting or asking."
    },
    {
          "id": "jp-27",
          "type": "mcq",
          "title": "Keigo",
          "prompt": "「食べる」の尊敬語は？",
          "options": [
                "召し上がる",
                "いただく",
                "参る",
                "拝見する"
          ],
          "correctIndex": 0,
          "explanation": "召し上がる is the honorific form of eat/drink."
    },
    {
          "id": "jp-28",
          "type": "mcq",
          "title": "Email",
          "prompt": "ビジネスメールの冒頭として自然なのは？",
          "options": [
                "お世話になっております。",
                "じゃあね。",
                "元気？",
                "またね。"
          ],
          "correctIndex": 0,
          "explanation": "お世話になっております is a standard business greeting."
    },
    {
          "id": "jp-29",
          "type": "mcq",
          "title": "Reading",
          "prompt": "「会議は午後三時からです。」の意味は？",
          "options": [
                "The meeting starts at 3 PM.",
                "The meeting ended at 3 PM.",
                "The office opens at 3 PM.",
                "The train leaves at 3 PM."
          ],
          "correctIndex": 0,
          "explanation": "午後三時から means from 3 PM."
    },
    {
          "id": "jp-30",
          "type": "mcq",
          "title": "Counter",
          "prompt": "「本」を数えるときによく使う助数詞は？",
          "options": [
                "冊",
                "枚",
                "匹",
                "台"
          ],
          "correctIndex": 0,
          "explanation": "冊 is used for books and bound volumes."
    },
    {
          "id": "jp-31",
          "type": "mcq",
          "title": "Grammar",
          "prompt": "「〜なければなりません」は何を表しますか？",
          "options": [
                "Obligation",
                "Possibility",
                "Past habit",
                "Permission"
          ],
          "correctIndex": 0,
          "explanation": "なければなりません means must or have to."
    },
    {
          "id": "jp-32",
          "type": "mcq",
          "title": "Politeness",
          "prompt": "「すみませんが、もう一度お願いします。」の目的は？",
          "options": [
                "Politely asking someone to repeat",
                "Ending a meeting",
                "Accepting an apology",
                "Rejecting an offer"
          ],
          "correctIndex": 0,
          "explanation": "This politely asks for repetition."
    },
    {
          "id": "jp-33",
          "type": "mcq",
          "title": "Kanji",
          "prompt": "「電車」の意味は？",
          "options": [
                "Train",
                "Airplane",
                "Bicycle",
                "Ship"
          ],
          "correctIndex": 0,
          "explanation": "電車 means train."
    },
    {
          "id": "jp-34",
          "type": "mcq",
          "title": "Grammar",
          "prompt": "正しい文はどれですか？",
          "options": [
                "私は日本語を勉強しています。",
                "私は日本語が勉強をしています。",
                "私は日本語で勉強をいます。",
                "私は勉強日本語しています。"
          ],
          "correctIndex": 0,
          "explanation": "The correct structure is object + を + verb phrase."
    },
    {
          "id": "jp-35",
          "type": "mcq",
          "title": "Conditional",
          "prompt": "「時間があれば、連絡します。」の意味は？",
          "options": [
                "If I have time, I will contact you.",
                "I had time yesterday.",
                "I never contact you.",
                "Time is not important."
          ],
          "correctIndex": 0,
          "explanation": "あれば expresses a conditional: if there is/have."
    },
    {
          "id": "jp-36",
          "type": "mcq",
          "title": "Business Vocabulary",
          "prompt": "「見積書」の意味は？",
          "options": [
                "Quotation / estimate document",
                "Resume",
                "Meeting room",
                "Password"
          ],
          "correctIndex": 0,
          "explanation": "見積書 is a quotation or estimate document."
    },
    {
          "id": "jp-37",
          "type": "mcq",
          "title": "Request",
          "prompt": "最も丁寧な依頼表現は？",
          "options": [
                "確認してください。",
                "確認して。",
                "ご確認いただけますでしょうか。",
                "確認しろ。"
          ],
          "correctIndex": 2,
          "explanation": "ご確認いただけますでしょうか is a polite business request."
    },
    {
          "id": "jp-38",
          "type": "mcq",
          "title": "Apology",
          "prompt": "ビジネスでの丁寧な謝罪は？",
          "options": [
                "ごめん。",
                "申し訳ございません。",
                "悪いね。",
                "知らない。"
          ],
          "correctIndex": 1,
          "explanation": "申し訳ございません is a formal apology."
    },
    {
          "id": "jp-39",
          "type": "mcq",
          "title": "Nuance",
          "prompt": "「検討します」はビジネスで何を意味することが多いですか？",
          "options": [
                "We will consider it",
                "We already finished it",
                "We reject everything immediately",
                "We are closed"
          ],
          "correctIndex": 0,
          "explanation": "検討します means to consider or review."
    },
    {
          "id": "jp-40",
          "type": "mcq",
          "title": "Professional Communication",
          "prompt": "会議後に議事録を送る目的は？",
          "options": [
                "To align decisions, owners, and next steps",
                "To replace all conversation",
                "To avoid action items",
                "To make the email longer"
          ],
          "correctIndex": 0,
          "explanation": "Meeting minutes clarify decisions, owners, and follow-up actions."
    }
  ]
};
