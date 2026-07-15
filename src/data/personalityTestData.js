export const PERSONALITY_TRAITS = {
  OPENNESS: 'Openness',
  CONSCIENTIOUSNESS: 'Conscientiousness',
  EXTRAVERSION: 'Extraversion',
  AGREEABLENESS: 'Agreeableness',
  NEUROTICISM: 'Neuroticism'
};

export const PERSONALITY_QUESTIONS = [
  // --- Extraversion (E) ---
  { id: 1, text: "I am the life of the party.", trait: 'EXTRAVERSION', reverse: false },
  { id: 2, text: "I don't talk a lot.", trait: 'EXTRAVERSION', reverse: true },
  { id: 3, text: "I feel comfortable around people.", trait: 'EXTRAVERSION', reverse: false },
  { id: 4, text: "I keep in the background.", trait: 'EXTRAVERSION', reverse: true },
  { id: 5, text: "I start conversations.", trait: 'EXTRAVERSION', reverse: false },
  { id: 6, text: "I have little to say.", trait: 'EXTRAVERSION', reverse: true },
  { id: 7, text: "I talk to a lot of different people at parties.", trait: 'EXTRAVERSION', reverse: false },
  { id: 8, text: "I don't like to draw attention to myself.", trait: 'EXTRAVERSION', reverse: true },
  { id: 9, text: "I don't mind being the center of attention.", trait: 'EXTRAVERSION', reverse: false },
  { id: 10, text: "I am quiet around strangers.", trait: 'EXTRAVERSION', reverse: true },
  
  // --- Conscientiousness (C) ---
  { id: 11, text: "I am always prepared.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 12, text: "I leave my belongings around.", trait: 'CONSCIENTIOUSNESS', reverse: true },
  { id: 13, text: "I pay attention to details.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 14, text: "I make a mess of things.", trait: 'CONSCIENTIOUSNESS', reverse: true },
  { id: 15, text: "I get chores done right away.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 16, text: "I often forget to put things back in their proper place.", trait: 'CONSCIENTIOUSNESS', reverse: true },
  { id: 17, text: "I like order.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 18, text: "I shirk my duties.", trait: 'CONSCIENTIOUSNESS', reverse: true },
  { id: 19, text: "I follow a schedule.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 20, text: "I am exacting in my work.", trait: 'CONSCIENTIOUSNESS', reverse: false },

  // --- Agreeableness (A) ---
  { id: 21, text: "I feel little concern for others.", trait: 'AGREEABLENESS', reverse: true },
  { id: 22, text: "I am interested in people.", trait: 'AGREEABLENESS', reverse: false },
  { id: 23, text: "I insult people.", trait: 'AGREEABLENESS', reverse: true },
  { id: 24, text: "I sympathize with others' feelings.", trait: 'AGREEABLENESS', reverse: false },
  { id: 25, text: "I am not interested in other people's problems.", trait: 'AGREEABLENESS', reverse: true },
  { id: 26, text: "I have a soft heart.", trait: 'AGREEABLENESS', reverse: false },
  { id: 27, text: "I am not really interested in others.", trait: 'AGREEABLENESS', reverse: true },
  { id: 28, text: "I take time out for others.", trait: 'AGREEABLENESS', reverse: false },
  { id: 29, text: "I feel others' emotions.", trait: 'AGREEABLENESS', reverse: false },
  { id: 30, text: "I make people feel at ease.", trait: 'AGREEABLENESS', reverse: false },

  // --- Neuroticism (N) ---
  { id: 31, text: "I get stressed out easily.", trait: 'NEUROTICISM', reverse: false },
  { id: 32, text: "I am relaxed most of the time.", trait: 'NEUROTICISM', reverse: true },
  { id: 33, text: "I worry about things.", trait: 'NEUROTICISM', reverse: false },
  { id: 34, text: "I seldom feel blue.", trait: 'NEUROTICISM', reverse: true },
  { id: 35, text: "I am easily disturbed.", trait: 'NEUROTICISM', reverse: false },
  { id: 36, text: "I get upset easily.", trait: 'NEUROTICISM', reverse: false },
  { id: 37, text: "I change my mood a lot.", trait: 'NEUROTICISM', reverse: false },
  { id: 38, text: "I have frequent mood swings.", trait: 'NEUROTICISM', reverse: false },
  { id: 39, text: "I get irritated easily.", trait: 'NEUROTICISM', reverse: false },
  { id: 40, text: "I often feel blue.", trait: 'NEUROTICISM', reverse: false },

  // --- Openness (O) ---
  { id: 41, text: "I have a rich vocabulary.", trait: 'OPENNESS', reverse: false },
  { id: 42, text: "I have difficulty understanding abstract ideas.", trait: 'OPENNESS', reverse: true },
  { id: 43, text: "I have a vivid imagination.", trait: 'OPENNESS', reverse: false },
  { id: 44, text: "I am not interested in abstract ideas.", trait: 'OPENNESS', reverse: true },
  { id: 45, text: "I have excellent ideas.", trait: 'OPENNESS', reverse: false },
  { id: 46, text: "I do not have a good imagination.", trait: 'OPENNESS', reverse: true },
  { id: 47, text: "I am quick to understand things.", trait: 'OPENNESS', reverse: false },
  { id: 48, text: "I use difficult words.", trait: 'OPENNESS', reverse: false },
  { id: 49, text: "I spend time reflecting on things.", trait: 'OPENNESS', reverse: false },
  { id: 50, text: "I am full of ideas.", trait: 'OPENNESS', reverse: false },

  // --- Extraversion (Part 2) ---
  { id: 51, text: "I make friends easily.", trait: 'EXTRAVERSION', reverse: false },
  { id: 52, text: "I find it difficult to approach others.", trait: 'EXTRAVERSION', reverse: true },
  { id: 53, text: "I love large parties.", trait: 'EXTRAVERSION', reverse: false },
  { id: 54, text: "I am a very private person.", trait: 'EXTRAVERSION', reverse: true },
  { id: 55, text: "I enjoy being part of a group.", trait: 'EXTRAVERSION', reverse: false },
  { id: 56, text: "I prefer to do things alone.", trait: 'EXTRAVERSION', reverse: true },
  { id: 57, text: "I am often the first to act.", trait: 'EXTRAVERSION', reverse: false },
  { id: 58, text: "I wait for others to lead the way.", trait: 'EXTRAVERSION', reverse: true },
  { id: 59, text: "I have a lot of energy.", trait: 'EXTRAVERSION', reverse: false },
  { id: 60, text: "I tend to be quiet.", trait: 'EXTRAVERSION', reverse: true },

  // --- Conscientiousness (Part 2) ---
  { id: 61, text: "I keep my promises.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 62, text: "I often break my word.", trait: 'CONSCIENTIOUSNESS', reverse: true },
  { id: 63, text: "I am very disciplined.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 64, text: "I am lazy at times.", trait: 'CONSCIENTIOUSNESS', reverse: true },
  { id: 65, text: "I double-check my work.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 66, text: "I am often late for appointments.", trait: 'CONSCIENTIOUSNESS', reverse: true },
  { id: 67, text: "I work hard.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 68, text: "I tend to procrastinate.", trait: 'CONSCIENTIOUSNESS', reverse: true },
  { id: 69, text: "I handle my responsibilities well.", trait: 'CONSCIENTIOUSNESS', reverse: false },
  { id: 70, text: "I find it hard to get down to work.", trait: 'CONSCIENTIOUSNESS', reverse: true },

  // --- Agreeableness (Part 2) ---
  { id: 71, text: "I trust others.", trait: 'AGREEABLENESS', reverse: false },
  { id: 72, text: "I am wary of others' intentions.", trait: 'AGREEABLENESS', reverse: true },
  { id: 73, text: "I try to be helpful to others.", trait: 'AGREEABLENESS', reverse: false },
  { id: 74, text: "I am often suspicious of others.", trait: 'AGREEABLENESS', reverse: true },
  { id: 75, text: "I believe that people are basically good.", trait: 'AGREEABLENESS', reverse: false },
  { id: 76, text: "I often find fault with others.", trait: 'AGREEABLENESS', reverse: true },
  { id: 77, text: "I am easy to satisfy.", trait: 'AGREEABLENESS', reverse: false },
  { id: 78, text: "I like to have my own way.", trait: 'AGREEABLENESS', reverse: true },
  { id: 79, text: "I am sensitive to others' needs.", trait: 'AGREEABLENESS', reverse: false },
  { id: 80, text: "I don't like to get involved in other people's business.", trait: 'AGREEABLENESS', reverse: true },

  // --- Neuroticism (Part 2) ---
  { id: 81, text: "I feel overwhelmed by emotions.", trait: 'NEUROTICISM', reverse: false },
  { id: 82, text: "I am emotionally stable.", trait: 'NEUROTICISM', reverse: true },
  { id: 83, text: "I often feel lonely.", trait: 'NEUROTICISM', reverse: false },
  { id: 84, text: "I rarely feel discouraged.", trait: 'NEUROTICISM', reverse: true },
  { id: 85, text: "I get anxious in new situations.", trait: 'NEUROTICISM', reverse: false },
  { id: 86, text: "I stay calm under pressure.", trait: 'NEUROTICISM', reverse: true },
  { id: 87, text: "I am prone to mood swings.", trait: 'NEUROTICISM', reverse: false },
  { id: 88, text: "I don't worry about the future.", trait: 'NEUROTICISM', reverse: true },
  { id: 89, text: "I feel insecure at times.", trait: 'NEUROTICISM', reverse: false },
  { id: 90, text: "I am very confident.", trait: 'NEUROTICISM', reverse: true },

  // --- Openness (Part 2) ---
  { id: 91, text: "I love to explore new places.", trait: 'OPENNESS', reverse: false },
  { id: 92, text: "I prefer routines.", trait: 'OPENNESS', reverse: true },
  { id: 93, text: "I am open to new experiences.", trait: 'OPENNESS', reverse: false },
  { id: 94, text: "I dislike change.", trait: 'OPENNESS', reverse: true },
  { id: 95, text: "I enjoy creative activities.", trait: 'OPENNESS', reverse: false },
  { id: 96, text: "I am a traditionalist.", trait: 'OPENNESS', reverse: true },
  { id: 97, text: "I like to learn new things.", trait: 'OPENNESS', reverse: false },
  { id: 98, text: "I prefer simple over complex ideas.", trait: 'OPENNESS', reverse: true },
  { id: 99, text: "I appreciate art and beauty.", trait: 'OPENNESS', reverse: false },
  { id: 100, text: "I am not very imaginative.", trait: 'OPENNESS', reverse: true },
];

export const OPTIONS = [
  { label: 'Strongly Disagree', value: 1, color: 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100' },
  { label: 'Disagree', value: 2, color: 'bg-orange-50 text-orange-600 border-orange-100 hover:bg-orange-100' },
  { label: 'Neutral', value: 3, color: 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100' },
  { label: 'Agree', value: 4, color: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100' },
  { label: 'Strongly Agree', value: 5, color: 'bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200' },
];

export const TRAIT_DETAILS = {
  OPENNESS: {
    title: "Openness to Experience",
    summary: "The degree of intellectual curiosity, creativity and a preference for novelty.",
    high: {
      traits: ["Imaginative", "Creative", "Curious", "Unconventional"],
      description: "You are highly imaginative, curious, and open to new experiences. You enjoy complexity and abstract thinking. You thrive in environments that value innovation and 'outside-the-box' thinking.",
      workplace: "Best suited for creative roles, strategic planning, and R&D where novelty is a constant.",
      recruiterAdvice: "This candidate will likely challenge the status quo and bring fresh perspectives. Ensure they have room to experiment to keep them engaged."
    },
    low: {
      traits: ["Practical", "Conventional", "Grounded", "Consistent"],
      description: "You prefer routine, familiarity, and practical, straightforward ideas over abstract concepts. You value tradition and tried-and-true methods.",
      workplace: "Excellent for roles requiring high consistency, operational excellence, and adherence to established protocols.",
      recruiterAdvice: "This candidate is reliable and thrives in stable environments. They are less likely to get distracted by 'shiny new objects' and will focus on the task at hand."
    }
  },
  CONSCIENTIOUSNESS: {
    title: "Conscientiousness",
    summary: "A tendency to be organized, dependable, and show self-discipline.",
    high: {
      traits: ["Organized", "Dependable", "Disciplined", "Thorough"],
      description: "You are very organized, dependable, and disciplined. You take your responsibilities seriously and plan ahead. You are often the 'anchor' in a team.",
      workplace: "Suited for project management, engineering, and administrative roles where precision is paramount.",
      recruiterAdvice: "Extremely reliable. This candidate is likely to deliver high-quality work on time. They are self-motivated and require minimal supervision."
    },
    low: {
      traits: ["Flexible", "Spontaneous", "Easy-going", "Adaptable"],
      description: "You tend to be more spontaneous and flexible, though you may sometimes struggle with organization. You prefer a loosely structured environment.",
      workplace: "Thrives in fast-paced, ever-changing environments like early-stage startups where rigid processes can be a hindrance.",
      recruiterAdvice: "Highly adaptable. This candidate won't be stressed by lack of structure. They may need support systems for deadline management."
    }
  },
  EXTRAVERSION: {
    title: "Extraversion",
    summary: "Energy, positive emotions, and the tendency to seek out the company of others.",
    high: {
      traits: ["Outgoing", "Sociable", "Energetic", "Talkative"],
      description: "You are outgoing, energetic, and social. You gain energy from interacting with others and enjoy being active in team settings.",
      workplace: "Perfect for sales, marketing, team leadership, and client-facing roles.",
      recruiterAdvice: "A natural team player and communicator. They will boost team morale and are excellent at networking and building external relationships."
    },
    low: {
      traits: ["Reserved", "Reflective", "Quiet", "Independent"],
      description: "You are more introverted, preferring quiet environments and close-knit social circles. You are deep-thinking and independent.",
      workplace: "Excels in roles requiring deep focus, individual contribution, and thoughtful analysis without constant interruption.",
      recruiterAdvice: "Thoughtful and measured. They listen more than they speak and often provide the most well-considered insights after quiet reflection."
    }
  },
  AGREEABLENESS: {
    title: "Agreeableness",
    summary: "A tendency to be compassionate and cooperative rather than suspicious and antagonistic towards others.",
    high: {
      traits: ["Compassionate", "Cooperative", "Trusting", "Harmonious"],
      description: "You are compassionate, cooperative, and trusting. You value harmony and are often sensitive to others' feelings. You are a natural peace-maker.",
      workplace: "Ideal for HR, customer success, and roles requiring high empathy and collaboration.",
      recruiterAdvice: "Excellent for team cohesion. They are supportive and help resolve conflicts. However, they may need encouragement to voice dissenting opinions."
    },
    low: {
      traits: ["Competitive", "Direct", "Skeptical", "Analytical"],
      description: "You are more competitive or skeptical, often prioritizing directness or efficiency over social harmony. You aren't afraid of healthy conflict.",
      workplace: "Suited for roles requiring tough decision-making, critical auditing, and high-stakes negotiation.",
      recruiterAdvice: "Direct and results-oriented. They won't sugar-coat feedback and will push the team towards efficiency. They value logic over emotion."
    }
  },
  NEUROTICISM: {
    title: "Emotional Stability",
    summary: "The tendency to experience unpleasant emotions easily, such as anger, anxiety, depression, and vulnerability.",
    high: {
      traits: ["Intense", "Sensitive", "Vigilant", "Emotional"],
      description: "You tend to experience emotions more intensely and may be more prone to stress. However, this also makes you more vigilant and detail-sensitive.",
      workplace: "Good for quality assurance and roles where high vigilance and risk-awareness are beneficial.",
      recruiterAdvice: "Emotionally attuned. They are often the first to notice when something is wrong. They thrive in supportive environments with clear feedback loops."
    },
    low: {
      traits: ["Resilient", "Calm", "Stable", "Confident"],
      description: "You are emotionally stable, resilient, and stay calm under pressure. You don't get rattled easily by workplace stress.",
      workplace: "Essential for high-pressure roles like emergency response, trading, or high-stakes management.",
      recruiterAdvice: "The 'rock' of the team. They stay cool in a crisis and provide a sense of stability to those around them. Very high stress tolerance."
    }
  }
};
