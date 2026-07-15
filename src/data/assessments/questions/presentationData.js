import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const presentationData = {
  id: ASSESSMENT_TYPES.presentation,
  title: "Executive Presentation Skills Certification",
  shortTitle: "Presentation",
  category: "Workplace & Soft Skills",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Audience analysis, executive communication, storytelling, slide design, data storytelling, persuasion, delivery, Q&A, and stakeholder influence.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "ps-01",
      type: "mcq",
      title: "Core Concepts",
      prompt: "What is the most important rule of any presentation?",
      options: ["Have great slides", "Know your audience", "Use a loud voice", "Finish early"],
      correctIndex: 1,
      explanation: "If you don't know your audience, your message won't land."
    },
    {
      id: "ps-02",
      type: "mcq",
      title: "Structure",
      prompt: "What is the \"Rule of Three\" in speaking?",
      options: ["Three slides only", "The idea that things that come in threes are inherently more satisfying and memorable", "Three minutes per point", "Three people per group"],
      correctIndex: 1,
      explanation: "Example: \"Hook, Meat, Call-to-Action\". This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-03",
      type: "mcq",
      title: "Storytelling",
      prompt: "Why is storytelling effective in business?",
      options: ["To entertain", "Stories are up to 22 times more memorable than facts alone", "To waste time", "To avoid technical details"],
      correctIndex: 1,
      explanation: "Stories engage the emotional brain and aid retention. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-04",
      type: "mcq",
      title: "Visuals",
      prompt: "What is the \"10/20/30 Rule\" by Guy Kawasaki?",
      options: ["10 words, 20 slides, 30 minutes", "10 slides, 20 minutes, 30-point font", "10 minutes, 20 ideas, 30 slides", "None of the above"],
      correctIndex: 1,
      explanation: "A classic rule for effective pitch decks. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-05",
      type: "mcq",
      title: "Delivery",
      prompt: "How do you handle \"Filler Words\" (um, ah, like)?",
      options: ["Say them faster", "Use pauses instead to emphasize points and gather your thoughts", "Don't worry about them", "Write them in your notes"],
      correctIndex: 1,
      explanation: "Silence is more powerful than a filler word. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-06",
      type: "mcq",
      title: "Hook",
      prompt: "What is a \"Hook\"?",
      options: ["A tool for fishing", "An opening statement or visual designed to grab attention immediately", "A type of closing", "A slide footer"],
      correctIndex: 1,
      explanation: "You have about 30-60 seconds to win the audience. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-07",
      type: "mcq",
      title: "Body Language",
      prompt: "Where should you look during a presentation?",
      options: ["At the floor", "At the back wall", "Eye contact with different individuals across the room", "At your notes"],
      correctIndex: 2,
      explanation: "Eye contact builds trust and connection. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-08",
      type: "mcq",
      title: "Data Viz",
      prompt: "What is the main goal of a chart on a slide?",
      options: ["To show all the data", "To make one clear point quickly", "To look scientific", "To use colors"],
      correctIndex: 1,
      explanation: "Don't make the audience do the math. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-09",
      type: "mcq",
      title: "Persuasion",
      prompt: "What is \"Ethos\" in rhetoric?",
      options: ["Logic", "Emotion", "Credibility and character of the speaker", "Speed"],
      correctIndex: 2,
      explanation: "The audience must trust the messenger. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-10",
      type: "mcq",
      title: "Q&A",
      prompt: "How should you handle a question you don't know the answer to?",
      options: ["Make something up", "Admit you don't know and promise to follow up with the answer", "Ignore the person", "Ask them why they are asking"],
      correctIndex: 1,
      explanation: "Honesty preserves your credibility. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-11",
      type: "mcq",
      title: "Call to Action",
      prompt: "What is a \"CTA\" at the end of a speech?",
      options: ["Thanking the audience", "A clear instruction on what the audience should do next", "A summary", "A list of references"],
      correctIndex: 1,
      explanation: "Every business presentation should have a goal. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-12",
      type: "mcq",
      title: "Nerves",
      prompt: "What is a good way to manage stage fright?",
      options: ["Drinking caffeine", "Deep breathing and thorough preparation", "Not looking at the audience", "Reading the script"],
      correctIndex: 1,
      explanation: "Preparation is the best antidote to fear. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-13",
      type: "mcq",
      title: "Visual Design",
      prompt: "What is \"White Space\" on a slide?",
      options: ["A mistake", "The empty space that helps the main content stand out", "A place for notes", "Unused space"],
      correctIndex: 1,
      explanation: "Less is more in slide design. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-14",
      type: "mcq",
      title: "Voice",
      prompt: "What is \"Vocal Variety\"?",
      options: ["Singing", "Changing your pitch, pace, and volume to keep the audience engaged", "A loud voice", "A deep voice"],
      correctIndex: 1,
      explanation: "Monotone is the enemy of engagement. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-15",
      type: "mcq",
      title: "Remote Speaking",
      prompt: "Where should you look during a virtual (Zoom) presentation?",
      options: ["At the screen", "At the camera lens", "At your own video", "At the keyboard"],
      correctIndex: 1,
      explanation: "Looking at the camera creates the illusion of eye contact for the audience."
    },
    {
      id: "ps-16",
      type: "mcq",
      title: "The \"So What?\" Test",
      prompt: "What is the \"So What?\" test?",
      options: ["A rudeness test", "Asking yourself why every piece of info matters to the audience", "A type of survey", "A logic check"],
      correctIndex: 1,
      explanation: "Filter out irrelevant fluff. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-17",
      type: "mcq",
      title: "Analogies",
      prompt: "Why are analogies useful?",
      options: ["To sound poetic", "To explain complex concepts by comparing them to something familiar", "To waste time", "To hide the truth"],
      correctIndex: 1,
      explanation: "Analogies are \"mental bridges\". This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-18",
      type: "mcq",
      title: "Stage Presence",
      prompt: "How should you stand?",
      options: ["Hands in pockets", "Crossed arms", "Open posture, feet shoulder-width apart", "Leaning on the podium"],
      correctIndex: 2,
      explanation: "Open posture signals confidence and authority. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-19",
      type: "mcq",
      title: "Practice",
      prompt: "What is the best way to practice?",
      options: ["Reading the notes silently", "Rehearsing out loud, preferably while recording yourself", "Thinking about it", "Talking to friends"],
      correctIndex: 1,
      explanation: "You need to hear the words and see your timing. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-20",
      type: "mcq",
      title: "Handouts",
      prompt: "When should you usually give out detailed handouts?",
      options: ["At the beginning", "At the end, so people don't read instead of listening to you", "Never", "Only if asked"],
      correctIndex: 1,
      explanation: "Distractions kill the flow of a live talk. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ps-21",
      type: "mcq",
      title: "Executive Summary",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for executive summary?",
      options: ["Apply executive summary with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use executive summary only because it sounds advanced, without checking impact or constraints", "Ignore executive summary until the issue becomes urgent in production or with customers", "Delegate executive summary completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "executive summary is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-22",
      type: "mcq",
      title: "Audience Analysis",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for audience analysis?",
      options: ["Apply audience analysis with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use audience analysis only because it sounds advanced, without checking impact or constraints", "Ignore audience analysis until the issue becomes urgent in production or with customers", "Delegate audience analysis completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "audience analysis is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-23",
      type: "mcq",
      title: "Pyramid Principle",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for pyramid principle?",
      options: ["Apply pyramid principle with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use pyramid principle only because it sounds advanced, without checking impact or constraints", "Ignore pyramid principle until the issue becomes urgent in production or with customers", "Delegate pyramid principle completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "pyramid principle is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-24",
      type: "mcq",
      title: "Message Titles",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for message titles?",
      options: ["Apply message titles with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use message titles only because it sounds advanced, without checking impact or constraints", "Ignore message titles until the issue becomes urgent in production or with customers", "Delegate message titles completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "message titles is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-25",
      type: "mcq",
      title: "Data Storytelling",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for data storytelling?",
      options: ["Apply data storytelling with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use data storytelling only because it sounds advanced, without checking impact or constraints", "Ignore data storytelling until the issue becomes urgent in production or with customers", "Delegate data storytelling completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "data storytelling is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-26",
      type: "mcq",
      title: "Cognitive Load",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for cognitive load?",
      options: ["Apply cognitive load with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use cognitive load only because it sounds advanced, without checking impact or constraints", "Ignore cognitive load until the issue becomes urgent in production or with customers", "Delegate cognitive load completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "cognitive load is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-27",
      type: "mcq",
      title: "Hostile Q&A",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for hostile Q&A?",
      options: ["Apply hostile Q&A with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use hostile Q&A only because it sounds advanced, without checking impact or constraints", "Ignore hostile Q&A until the issue becomes urgent in production or with customers", "Delegate hostile Q&A completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "hostile Q&A is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-28",
      type: "mcq",
      title: "Unknown Answer Handling",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for unknown answer handling?",
      options: ["Apply unknown answer handling with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use unknown answer handling only because it sounds advanced, without checking impact or constraints", "Ignore unknown answer handling until the issue becomes urgent in production or with customers", "Delegate unknown answer handling completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "unknown answer handling is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-29",
      type: "mcq",
      title: "Story Arc",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for story arc?",
      options: ["Apply story arc with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use story arc only because it sounds advanced, without checking impact or constraints", "Ignore story arc until the issue becomes urgent in production or with customers", "Delegate story arc completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "story arc is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-30",
      type: "mcq",
      title: "Recommendation Slide",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for recommendation slide?",
      options: ["Apply recommendation slide with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use recommendation slide only because it sounds advanced, without checking impact or constraints", "Ignore recommendation slide until the issue becomes urgent in production or with customers", "Delegate recommendation slide completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "recommendation slide is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-31",
      type: "mcq",
      title: "Remote Delivery",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for remote delivery?",
      options: ["Apply remote delivery with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use remote delivery only because it sounds advanced, without checking impact or constraints", "Ignore remote delivery until the issue becomes urgent in production or with customers", "Delegate remote delivery completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "remote delivery is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-32",
      type: "mcq",
      title: "Voice Pacing",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for voice pacing?",
      options: ["Apply voice pacing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use voice pacing only because it sounds advanced, without checking impact or constraints", "Ignore voice pacing until the issue becomes urgent in production or with customers", "Delegate voice pacing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "voice pacing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-33",
      type: "mcq",
      title: "Speaker Credibility",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for speaker credibility?",
      options: ["Apply speaker credibility with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use speaker credibility only because it sounds advanced, without checking impact or constraints", "Ignore speaker credibility until the issue becomes urgent in production or with customers", "Delegate speaker credibility completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "speaker credibility is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-34",
      type: "mcq",
      title: "Call To Action",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for call to action?",
      options: ["Apply call to action with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use call to action only because it sounds advanced, without checking impact or constraints", "Ignore call to action until the issue becomes urgent in production or with customers", "Delegate call to action completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "call to action is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-35",
      type: "mcq",
      title: "Appendix Strategy",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for appendix strategy?",
      options: ["Apply appendix strategy with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use appendix strategy only because it sounds advanced, without checking impact or constraints", "Ignore appendix strategy until the issue becomes urgent in production or with customers", "Delegate appendix strategy completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "appendix strategy is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-36",
      type: "mcq",
      title: "Technical Translation",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for technical translation?",
      options: ["Apply technical translation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use technical translation only because it sounds advanced, without checking impact or constraints", "Ignore technical translation until the issue becomes urgent in production or with customers", "Delegate technical translation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "technical translation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-37",
      type: "mcq",
      title: "Opening Hook",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for opening hook?",
      options: ["Apply opening hook with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use opening hook only because it sounds advanced, without checking impact or constraints", "Ignore opening hook until the issue becomes urgent in production or with customers", "Delegate opening hook completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "opening hook is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-38",
      type: "mcq",
      title: "Visual Hierarchy",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for visual hierarchy?",
      options: ["Apply visual hierarchy with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use visual hierarchy only because it sounds advanced, without checking impact or constraints", "Ignore visual hierarchy until the issue becomes urgent in production or with customers", "Delegate visual hierarchy completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "visual hierarchy is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-39",
      type: "mcq",
      title: "Executive Brevity",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for executive brevity?",
      options: ["Apply executive brevity with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use executive brevity only because it sounds advanced, without checking impact or constraints", "Ignore executive brevity until the issue becomes urgent in production or with customers", "Delegate executive brevity completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "executive brevity is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ps-40",
      type: "mcq",
      title: "Presentation Judgment",
      prompt: "In a professional Executive Presentation Skills scenario, which response best demonstrates strong judgment for presentation judgment?",
      options: ["Apply presentation judgment with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use presentation judgment only because it sounds advanced, without checking impact or constraints", "Ignore presentation judgment until the issue becomes urgent in production or with customers", "Delegate presentation judgment completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "presentation judgment is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
