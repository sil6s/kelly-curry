import type { AppointmentServiceType } from '../components/ConsultationFlow';

export type ServiceSlug =
  | 'individual-therapy'
  | 'couples-therapy'
  | 'family-therapy'
  | 'coparenting-therapy';

export type InteractiveItem = {
  title: string;
  body?: string;
};

export type ServiceDetail = {
  slug: ServiceSlug;
  serviceKey: AppointmentServiceType;
  title: string;
  seoTitle: string;
  metaDescription: string;
  ogDescription: string;
  heroCopy: string;
  imageAlt: string;
  rate: string;
  rateNote: string;
  paymentNote: string;
  intro: string;
  supportTitle: string;
  supportItems: string[];
  helpTitle: string;
  helpItems: string[];
  approachItems: string[];
  interactiveTitle: string;
  interactiveNote?: string;
  interactiveItems: InteractiveItem[];
  expectSteps: string[];
  faq: Array<{ question: string; answer: string }>;
  resources: Array<{ label: string; href: string }>;
  extraSection?:
    | {
        type: 'insurance';
        title: string;
        copy: string;
        items: string[];
      }
    | {
        type: 'comparison';
        title: string;
        canHelp: string[];
        isNot: string[];
      };
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'individual-therapy',
    serviceKey: 'individual',
    title: 'Individual Therapy',
    seoTitle: 'Individual Therapy in Fort Thomas KY | Kelly Baker Curry, LCSW',
    metaDescription:
      'Individual therapy in Fort Thomas, KY, with Kelly Baker Curry, MSW, MEd, LCSW. Support for anxiety, grief, trauma, stress, and life transitions.',
    ogDescription:
      'One-on-one support for stress, anxiety, transitions, grief, self-esteem, relationships, and personal growth.',
    heroCopy:
      'One-on-one support for stress, anxiety, transitions, grief, self-esteem, relationships, and personal growth.',
    imageAlt:
      'Calm therapy office setting for individual therapy with Kelly Baker Curry',
    rate: '$150',
    rateNote: 'per 50-minute session',
    paymentNote:
      'Insurance may be available for individual therapy. Benefits and eligibility may need to be verified before an appointment is confirmed.',
    intro:
      'Individual therapy with Kelly Baker Curry, MSW, MEd, LCSW offers a private, steady place to talk through what you are carrying and begin making sense of patterns, stress, grief, relationships, and change.',
    supportTitle: 'Who individual therapy may be for',
    supportItems: [
      'Anxiety or stress',
      'Life transitions',
      'Grief or loss',
      'Self-esteem and confidence',
      'Relationship patterns',
      'Personal growth',
      'Feeling stuck or overwhelmed',
    ],
    helpTitle: 'What sessions can help with',
    helpItems: [
      'Understanding patterns',
      'Building coping skills',
      'Improving communication',
      'Clarifying values and goals',
      'Processing difficult experiences at a safe pace',
      'Strengthening emotional awareness',
    ],
    approachItems: [
      'Cognitive Behavioral Therapy-informed skill building',
      'Strengths-based counseling',
      'Solution-focused conversations',
      'Mindfulness and grounding strategies',
      'Values clarification',
      'Relational and family-systems-informed perspective',
    ],
    interactiveTitle: 'Is individual therapy a good fit?',
    interactiveNote:
      'This checklist is not a diagnosis. It is simply a reflection tool.',
    interactiveItems: [
      { title: 'I want a private space to talk through what I am carrying' },
      { title: 'I am navigating stress, anxiety, grief, or change' },
      { title: 'I want tools for coping and communication' },
      { title: 'I want to better understand patterns in my life' },
      {
        title:
          'I am ready for support, even if I am not sure where to begin',
      },
    ],
    expectSteps: [
      'Share what brings you in',
      'Discuss goals and preferences',
      'Talk through scheduling and fit',
      'Identify next steps together',
    ],
    faq: [
      {
        question: 'Do I need to know exactly what I want to work on?',
        answer:
          'No. Many people begin therapy with a general sense that something feels heavy, stuck, or difficult to sort through. The first sessions can help clarify direction.',
      },
      {
        question: 'Can I use insurance for individual therapy?',
        answer:
          'Insurance may be available for individual therapy. Benefits and eligibility may need to be verified before an appointment is confirmed.',
      },
      {
        question: 'How long are sessions?',
        answer: 'Individual therapy sessions are 50 minutes.',
      },
      {
        question: 'Is therapy confidential?',
        answer:
          'Therapy is private, with limits required by law and professional ethics. Kelly will review confidentiality and its limits as part of beginning care.',
      },
      {
        question: 'What if I am not sure whether therapy is right for me?',
        answer:
          'You do not need to be certain before reaching out. The appointment request helps the office follow up about fit, availability, and next steps.',
      },
    ],
    resources: [
      {
        label: 'American Psychological Association, Understanding psychotherapy',
        href: 'https://www.apa.org/topics/psychotherapy',
      },
      {
        label: 'National Institute of Mental Health, Psychotherapies',
        href: 'https://www.nimh.nih.gov/health/topics/psychotherapies',
      },
      { label: '988 Lifeline', href: 'https://988lifeline.org/' },
    ],
    extraSection: {
      type: 'insurance',
      title: 'Insurance options for individual therapy',
      copy:
        'Insurance options apply to individual therapy only. If you are unsure about your coverage, select “Not sure” on the appointment request form and the office can follow up about next steps.',
      items: [
        'Aetna',
        'Cigna',
        'BCBS',
        'UnitedHealthcare',
        'MedBen',
        'Custom Design Benefits',
        'Lyra',
        'Self-pay / Cash pay',
        'Not sure',
      ],
    },
  },
  {
    slug: 'couples-therapy',
    serviceKey: 'couples',
    title: 'Couples Therapy',
    seoTitle: 'Couples Therapy in Fort Thomas KY | Kelly Baker Curry, LCSW',
    metaDescription:
      'Couples therapy in Fort Thomas, KY, with Kelly Baker Curry, MSW, MEd, LCSW. Support for communication, trust, conflict, and relationship stress.',
    ogDescription:
      'Support for couples who want to improve communication, rebuild connection, navigate conflict, or strengthen their relationship.',
    heroCopy:
      'Support for couples who want to improve communication, rebuild connection, navigate conflict, or strengthen their relationship.',
    imageAlt:
      'Comfortable therapy space for couples therapy and relationship support',
    rate: '$175',
    rateNote: 'per 50-minute session',
    paymentNote:
      'Couples therapy is a private-pay service and is not billed through insurance.',
    intro:
      'Couples therapy with Kelly Baker Curry, MSW, MEd, LCSW is designed to help partners slow down recurring patterns, communicate more clearly, and better understand what is happening between them.',
    supportTitle: 'Couples therapy may support',
    supportItems: [
      'Communication patterns',
      'Recurring conflict',
      'Trust and repair',
      'Emotional distance',
      'Life transitions',
      'Parenting stress',
      'Premarital or commitment conversations',
      'Rebuilding connection',
    ],
    helpTitle: 'The goal is not to pick a side',
    helpItems: [
      'Understand the pattern between both partners',
      'Communicate more clearly in hard moments',
      'Work toward healthier interaction',
      'Name what gets missed underneath conflict',
      'Practice repair after disconnection',
      'Build realistic shared next steps',
    ],
    approachItems: [
      'Emotion-focused conversations',
      'Communication skill building',
      'Conflict de-escalation',
      'Attachment-informed reflection',
      'Solution-focused goal setting',
      'Family-systems-informed perspective',
    ],
    interactiveTitle: 'Common relationship patterns',
    interactiveItems: [
      {
        title: 'Pursue and withdraw',
        body:
          'One partner reaches for connection while the other pulls back. Therapy can help by slowing the cycle and naming what each person is protecting.',
      },
      {
        title: 'Repeat arguments',
        body:
          'The topic changes, but the conversation feels familiar. Therapy can help identify the repeated pattern underneath the argument.',
      },
      {
        title: 'Avoid hard conversations',
        body:
          'Avoidance can lower conflict temporarily while leaving distance unresolved. Therapy can help create a more supported way to talk.',
      },
      {
        title: 'Misread tone or intent',
        body:
          'Partners can react to what they hear rather than what was meant. Therapy can help clarify meaning and reduce defensiveness.',
      },
      {
        title: 'Feel more like roommates',
        body:
          'Disconnection can build slowly. Therapy can help partners understand what changed and what repair might require.',
      },
      {
        title: 'Struggle to repair after conflict',
        body:
          'Repair is a skill. Therapy can help partners practice returning to the conversation with more care and clarity.',
      },
    ],
    expectSteps: [
      'Clarify what each partner hopes will change',
      'Identify the patterns causing disconnection',
      'Practice healthier communication',
      'Build shared next steps',
    ],
    faq: [
      {
        question: 'Do both partners need to attend?',
        answer:
          'Couples therapy is generally most useful when both partners attend and participate in the work.',
      },
      {
        question: 'Is couples therapy only for relationships in crisis?',
        answer:
          'No. Couples therapy can support partners in crisis, but it can also help with communication, transitions, and strengthening connection before things feel urgent.',
      },
      {
        question: 'Will the therapist take sides?',
        answer:
          'The goal is not to pick a side. The work focuses on understanding the pattern between partners and helping both people communicate more clearly.',
      },
      {
        question: 'Can we come if we are unsure about staying together?',
        answer:
          'Yes. Therapy can help couples talk through uncertainty with more structure and care.',
      },
      {
        question: 'Is couples therapy billed through insurance?',
        answer:
          'No. Couples therapy is a private-pay service and is not billed through insurance.',
      },
    ],
    resources: [
      {
        label: 'American Association for Marriage and Family Therapy',
        href: 'https://www.aamft.org/',
      },
      {
        label: 'AAMFT, About Marriage and Family Therapists',
        href: 'https://www.aamft.org/AAMFT/About_AAMFT/About_Marriage_and_Family_Therapists.aspx',
      },
      {
        label: 'Gottman Institute relationship resources',
        href: 'https://www.gottman.com/couples/',
      },
    ],
  },
  {
    slug: 'family-therapy',
    serviceKey: 'family',
    title: 'Family Therapy',
    seoTitle: 'Family Therapy in Fort Thomas KY | Kelly Baker Curry, LCSW',
    metaDescription:
      'Family therapy in Fort Thomas, KY, with Kelly Baker Curry, MSW, MEd, LCSW. Support for conflict, transitions, parenting stress, and communication.',
    ogDescription:
      'Support for families working through communication challenges, transitions, conflict, parenting stress, and changing family dynamics.',
    heroCopy:
      'Support for families working through communication challenges, transitions, conflict, parenting stress, and changing family dynamics.',
    imageAlt:
      'Warm counseling office for family therapy and communication support',
    rate: '$200',
    rateNote: 'per 50-minute session',
    paymentNote:
      'Family therapy is a private-pay service and is not billed through insurance.',
    intro:
      'Family therapy with Kelly Baker Curry, MSW, MEd, LCSW creates a structured space for family members to understand patterns, reduce defensiveness, and practice clearer ways of communicating.',
    supportTitle: 'Family therapy may be helpful when',
    supportItems: [
      'Conversations turn into conflict',
      'Family members feel misunderstood',
      'Parenting stress is increasing',
      'A major life change is affecting the family',
      'Boundaries or roles feel unclear',
      'The family needs a calmer way to communicate',
      'A child, teen, or adult family member is struggling and the family wants support',
    ],
    helpTitle: 'A systems-based view',
    helpItems: [
      'Look at communication and roles within the family system',
      'Understand patterns without blaming one person',
      'Practice healthier ways of relating',
      'Clarify shared goals',
      'Build realistic expectations',
      'Support repair after difficult moments',
    ],
    approachItems: [
      'Family-systems-informed counseling',
      'Strengths-based conversations',
      'Communication skill building',
      'Parent support and coaching',
      'Problem-solving frameworks',
      'Conflict de-escalation',
      'Boundary and role clarification',
    ],
    interactiveTitle: 'What kind of support does your family need?',
    interactiveItems: [
      {
        title: 'Communication reset',
        body:
          'A calmer structure for conversations that often become tense or circular.',
      },
      {
        title: 'Parenting support',
        body:
          'Space to clarify expectations, consistency, and practical next steps.',
      },
      {
        title: 'Transition support',
        body:
          'Support through changes such as moves, divorce, remarriage, loss, or developmental shifts.',
      },
      {
        title: 'Conflict reduction',
        body:
          'Tools for lowering defensiveness and making hard conversations more workable.',
      },
      {
        title: 'Boundary setting',
        body:
          'Help clarifying roles, limits, and expectations across relationships.',
      },
      {
        title: 'Reconnection',
        body:
          'Support for rebuilding trust, care, and communication after distance or strain.',
      },
    ],
    expectSteps: [
      'Understand each person’s perspective',
      'Identify repeated patterns',
      'Clarify shared goals',
      'Practice communication and repair',
      'Create realistic next steps',
    ],
    faq: [
      {
        question: 'Who should attend family therapy?',
        answer:
          'Who attends depends on the family concern, age, relationships involved, and goals for the work. Kelly can help clarify this during scheduling.',
      },
      {
        question: 'Does every family member have to participate?',
        answer:
          'Not always. Some work may involve part of the family system, depending on what is most appropriate and useful.',
      },
      {
        question: 'Is family therapy only for major conflict?',
        answer:
          'No. Family therapy can also help with transitions, communication, parenting stress, and reconnecting before conflict becomes more intense.',
      },
      {
        question: 'Can family therapy help with parenting concerns?',
        answer:
          'Yes. Family therapy can include parent support, communication tools, boundary clarification, and practical problem-solving.',
      },
      {
        question: 'Is family therapy billed through insurance?',
        answer:
          'No. Family therapy is a private-pay service and is not billed through insurance.',
      },
    ],
    resources: [
      {
        label: 'American Association for Marriage and Family Therapy',
        href: 'https://www.aamft.org/',
      },
      {
        label: 'AAMFT, Find a Therapist',
        href: 'https://www.aamft.org/Directories/Find_a_Therapist.aspx',
      },
      {
        label: 'CDC Positive Parenting Tips',
        href: 'https://www.cdc.gov/child-development/positive-parenting-tips/index.html',
      },
      {
        label: 'CDC Essentials for Parenting',
        href: 'https://www.cdc.gov/parents/essentials/index.html',
      },
    ],
  },
  {
    slug: 'coparenting-therapy',
    serviceKey: 'coparenting',
    title: 'Coparenting Therapy',
    seoTitle: 'Coparenting Therapy in Fort Thomas KY | Kelly Baker Curry, LCSW',
    metaDescription:
      'Coparenting therapy in Fort Thomas, KY, with Kelly Baker Curry, MSW, MEd, LCSW. Structured support for parent communication and conflict reduction.',
    ogDescription:
      'Structured support for parents who want to communicate more effectively, reduce conflict, and stay focused on their child’s well-being.',
    heroCopy:
      'Structured support for parents who want to communicate more effectively, reduce conflict, and stay focused on their child’s well-being.',
    imageAlt:
      'Structured coparenting therapy support for parent communication',
    rate: '$225',
    rateNote: 'per 50-minute session',
    paymentNote:
      'Coparenting therapy is a private-pay service and is not billed through insurance.',
    intro:
      'Coparenting therapy with Kelly Baker Curry, MSW, MEd, LCSW offers practical, structured support for parents who need clearer communication, steadier boundaries, and a child-focused way forward.',
    supportTitle: 'Coparenting therapy may help with',
    supportItems: [
      'Reducing communication conflict',
      'Creating clearer boundaries',
      'Supporting consistent routines',
      'Navigating schedule changes',
      'Keeping conversations child-focused',
      'Managing high-emotion exchanges',
      'Rebuilding practical cooperation',
      'Clarifying expectations',
    ],
    helpTitle: 'Child-focused, practical support',
    helpItems: [
      'Reduce stress in parent communication',
      'Clarify expectations',
      'Keep the child’s needs at the center',
      'Create practical guidelines',
      'Plan conversations more intentionally',
      'Support healthier coordination',
    ],
    approachItems: [
      'Coparenting communication tools',
      'Conflict de-escalation',
      'Boundary-setting frameworks',
      'Problem-solving conversations',
      'Child-centered planning',
      'Family-systems-informed perspective',
    ],
    interactiveTitle: 'Coparenting communication reset',
    interactiveNote:
      'This is general educational information, not legal advice.',
    interactiveItems: [
      {
        title: 'Keep it brief',
        body:
          'Shorter messages can reduce escalation and make the next step clearer.',
      },
      {
        title: 'Keep it factual',
        body:
          'Facts are easier to respond to than criticism, assumptions, or old arguments.',
      },
      {
        title: 'Keep it child-focused',
        body:
          'Bring the conversation back to the child’s schedule, needs, and stability.',
      },
      {
        title: 'Choose the right channel',
        body:
          'Some topics need a planned conversation; others are better handled in writing.',
      },
      {
        title: 'Pause before responding',
        body:
          'A pause can make room for a steadier response rather than an immediate reaction.',
      },
      {
        title: 'Confirm next steps in writing',
        body:
          'Clear written next steps can reduce confusion about plans and expectations.',
      },
    ],
    expectSteps: [
      'Identify the communication challenges',
      'Clarify child-focused goals',
      'Build practical communication guidelines',
      'Practice calmer exchanges',
      'Create next steps for ongoing coordination',
    ],
    faq: [
      {
        question: 'Is coparenting therapy the same as legal mediation?',
        answer:
          'No. Coparenting therapy is not legal mediation, legal advice, custody evaluation, or court representation.',
      },
      {
        question: 'Can both parents receive scheduling communication?',
        answer:
          'Yes. The appointment request form allows additional people to be included for scheduling communication.',
      },
      {
        question: 'Is this service court-related?',
        answer:
          'This service is therapy-focused and practical. It is not court representation or a substitute for legal guidance.',
      },
      {
        question: 'What if communication is very tense?',
        answer:
          'Sessions can focus on slowing communication down, reducing escalation, and creating clearer guidelines for contact.',
      },
      {
        question: 'Is coparenting therapy billed through insurance?',
        answer:
          'No. Coparenting therapy is a private-pay service and is not billed through insurance.',
      },
    ],
    resources: [
      {
        label: 'AFCC Family Resources',
        href: 'https://www.afccnet.org/Resource-Center/Family-Resources',
      },
      {
        label: 'AFCC, Understanding the Parenting Coordination Process',
        href: 'https://www.afccnet.org/Resource-Center/Family-Resources/Understanding-the-Parenting-Coordination-Process',
      },
      {
        label: 'CDC Positive Parenting Tips',
        href: 'https://www.cdc.gov/child-development/positive-parenting-tips/index.html',
      },
      { label: '988 Lifeline', href: 'https://988lifeline.org/' },
    ],
    extraSection: {
      type: 'comparison',
      title: 'What this service is and is not',
      canHelp: [
        'Communication tools',
        'Conflict reduction',
        'Boundary setting',
        'Planning conversations',
        'Child-focused decision-making',
      ],
      isNot: [
        'Legal advice',
        'Custody evaluation',
        'Court representation',
        'A substitute for emergency services',
      ],
    },
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
