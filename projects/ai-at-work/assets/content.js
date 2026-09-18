/* Original instructional content for the AI at Work portfolio simulation. */
window.AIWORK = {
  objectives: [
    {title:'Know the limits',text:'Explain what generative AI can and cannot reliably do in workplace settings.',icon:'spark'},
    {title:'Find the opportunity',text:'Identify workplace tasks where generative AI can improve productivity.',icon:'layers'},
    {title:'Spot the risks',text:'Recognize privacy, confidentiality, bias, hallucination, and accuracy risks associated with AI.',icon:'shield'},
    {title:'Make a thoughtful call',text:'Apply a responsible decision-making framework before using or sharing AI-generated content.',icon:'check'}
  ],
  lessons: [
    {title:'Welcome',short:'Your starting point',time:'1 min'},
    {title:'What is generative AI?',short:'Know the possibilities',time:'2 min'},
    {title:'Working smarter with AI',short:'Build a better prompt',time:'3 min'},
    {title:'The risks of AI at work',short:'Before you hit enter',time:'2 min'},
    {title:'Workplace decisions',short:'Three real-world scenarios',time:'3 min'},
    {title:'P.A.U.S.E. before you use',short:'A framework for good judgment',time:'2 min'},
    {title:'Would you use AI?',short:'Put your judgment to work',time:'2 min'},
    {title:'Final assessment',short:'Seven questions · 80% to pass',time:'3 min'},
    {title:'Reflect & commit',short:'Make it part of your work',time:'1 min'},
    {title:'Course complete',short:'Your next step starts here',time:''}
  ],
  foundations: [
    {title:'Draft a meeting agenda',context:'You need a starting structure for a routine team check-in. You will use generic, non-sensitive information.',correct:0,feedback:[
      'A useful starting point. AI can suggest a structure and talking points. Check the agenda against your team’s actual priorities before using it.',
      'A person still sets the priorities, but generating a low-stakes first draft is a good candidate for AI assistance.',
      'Human review is always helpful. Here, a generic agenda is a low-stakes starting point, so “Good candidate” is the best fit.'
    ]},
    {title:'Brainstorm marketing ideas',context:'Generate possible themes for a public campaign, without sharing confidential strategy or customer information.',correct:0,feedback:[
      'Good fit. AI can widen your starting set of ideas. People should check originality, brand fit, and potential bias before developing a concept.',
      'A person should choose the direction, but generating a range of non-sensitive ideas is a useful role for AI.',
      'Review still matters, but this is open-ended brainstorming, not a factual deliverable or consequential decision. “Good candidate” is the best fit.'
    ]},
    {title:'Make a final disciplinary decision',context:'A manager wants AI to decide what disciplinary action an employee should receive.',correct:1,feedback:[
      'This is a consequential employment decision. It needs accountable people, context, fair procedures, and the organization’s approved process.',
      'Right. People must lead this decision using appropriate organizational processes. AI should not independently determine disciplinary action.',
      'Approved support may sometimes be appropriate, but the task here is making the final decision. That responsibility belongs to people.'
    ]},
    {title:'Summarize a non-confidential document',context:'A public industry report will be condensed into a briefing that colleagues rely on.',correct:2,feedback:[
      'AI can help, but a useful summary must preserve the report’s meaning. Compare it with the original for missing caveats, invented claims, and inaccurate numbers.',
      'You can use AI for the first pass. Keep a person responsible for checking the summary against the source.',
      'Exactly. Summaries can omit context or alter meaning. Check the draft against the original before colleagues rely on it.'
    ]},
    {title:'Write an email first draft',context:'Draft a project update for a client, using only approved information. The email includes commitments and dates.',correct:2,feedback:[
      'A draft is useful, but promises and dates need deliberate human verification. AI assistance with review is the best fit.',
      'A person owns the message, but AI can help structure and phrase a draft using approved information.',
      'Yes. AI can draft the wording. You check the facts, commitments, recipient, and tone before sending.'
    ]},
    {title:'Make an unsupervised high-stakes decision',context:'Let AI alone make a medical, legal, financial, or employment decision that affects someone’s life.',correct:1,feedback:[
      'The stakes are too high for an unsupervised AI decision. Appropriate qualified people and approved processes must lead.',
      'Correct. AI output cannot replace the qualified, accountable human judgment required for a consequential decision.',
      'Safeguarded assistance is different from deciding alone. The task explicitly removes human oversight, so it should be human-led.'
    ]}
  ],
  risks: [
    {name:'Confidentiality',icon:'shield',tag:'Protect what you share',text:'Do not enter confidential, proprietary, personal, or sensitive information unless your organization has explicitly approved the tool, the use case, and the information involved.',example:'A report without employee names can still identify people through job titles, dates, or unique details.',action:'Check policy and approval before entering data. Share only the minimum information permitted.'},
    {name:'Hallucinations',icon:'search',tag:'Plausible is not proof',text:'Generative AI can produce fluent, confident statements that are inaccurate or entirely invented. Statistics, quotations, links, and citations all need checking.',example:'An impressive-looking citation may refer to a report that does not exist.',action:'Open reliable original sources and verify material claims. Leave out what you cannot substantiate.'},
    {name:'Bias',icon:'balance',tag:'A polished answer is not neutral',text:'Outputs can reproduce or amplify patterns and biases in training data or in your prompt. Missing perspectives can shape the result too.',example:'A candidate summary might overvalue a familiar career path and overlook equivalent experience.',action:'Use fair, job-relevant criteria and review assumptions, language, and omissions through approved processes.'},
    {name:'Overreliance',icon:'person',tag:'Keep your judgment in the loop',text:'Convenient, confident output can tempt people to stop checking. AI lacks your full workplace context and can miss the consequences of its suggestions.',example:'A project plan sounds sensible but depends on a resource your team does not have.',action:'Compare the output with the real situation. Involve the right people when the stakes are high.'},
    {name:'Accountability',icon:'check',tag:'You own the final work',text:'Using AI does not transfer your responsibility for the work you submit or the decisions you make. Follow the same standards for accuracy, quality, and appropriate disclosure.',example:'An incorrect AI-generated deadline in your email is still your responsibility to correct.',action:'Review, verify, and be ready to explain the final work. Follow your organization’s disclosure rules.'}
  ],
  scenarios: [
    {person:'Jordan',role:'People operations',title:'The confidential document',situation:'Jordan needs to summarize a confidential internal report containing employee names, performance information, and organizational data. A publicly available AI tool could do it quickly.',question:'What should Jordan do?',options:[
      'Upload it. AI tools automatically keep workplace information private.',
      'Remove employee names, then upload everything else.',
      'Check AI and privacy policies; use only an approved tool and approved information.',
      'Upload the report, then delete the conversation.'
    ],correct:2,feedback:[
      'Privacy is not automatic. A public tool’s settings and terms may not meet organizational requirements. Jordan should pause and check the approved process before uploading.',
      'Names are only one identifier. Performance details, roles, and other organizational information may remain sensitive or identifiable. Removing names does not make this upload approved.',
      'That protects the information and keeps the task within the organization’s process. Approval must cover the tool, the use case, and the specific information—not just access to an AI account.',
      'Deleting a conversation afterward does not undo the disclosure or establish how the provider retains data. Approval and data checks need to happen first.'
    ],consequences:[
      'The privacy lead cannot confirm that this public tool is approved. The full report is still on Jordan’s device.',
      'Jordan spots a unique job title and performance incident. A colleague could still identify the employee.',
      'Policy allows one internal AI tool for some reports, but employee performance data needs an additional review.',
      'Jordan cannot verify the tool’s deletion and retention rules. No upload has happened yet.'
    ],followup:'The privacy lead confirms that this use case is not approved. The summary is due today. What now?',followOptions:['Summarize it manually or ask the appropriate team for a compliant option.','Upload it anyway because the deadline is urgent.'],followCorrect:0,followFeedback:['Right. Complete the task manually or use an explicitly approved alternative. A deadline does not create permission to share sensitive information.','The deadline does not change the information’s sensitivity. Keep the report out of the unapproved tool and use a compliant alternative.']},
    {person:'Taylor',role:'Project coordination',title:'The very convincing answer',situation:'Taylor asks AI to research a presentation. It returns several impressive statistics with professional-looking citations. Taylor cannot locate two of the sources.',question:'What should Taylor do next?',options:[
      'Include the statistics because the citations look credible.',
      'Ask the same AI if it is certain and trust a confident confirmation.',
      'Keep the numbers but remove the citations from the slide.',
      'Verify the claims in reliable original sources; omit or replace anything unverified.'
    ],correct:3,feedback:[
      'Formatting is not evidence. A plausible citation can be fabricated, and a real source can be misrepresented. Check that each important claim is actually supported.',
      'The same model can repeat an error confidently. Asking again is not independent verification. Look for the underlying reliable evidence.',
      'Removing a citation hides the gap but does not fix it. The statistics remain unsupported and should not be presented as established facts.',
      'Exactly. This is hallucination risk in practice. Locate the source, check the actual claim and context, and remove or replace claims that cannot be verified.'
    ]},
    {person:'Morgan',role:'Hiring manager',title:'AI and hiring',situation:'A manager wants to upload candidate applications and have AI independently decide who should receive an interview.',question:'What is the biggest concern?',options:[
      'AI might take longer than a recruiter to read the applications.',
      'A consequential employment decision could expose private data and produce biased or unfair outcomes without appropriate oversight.',
      'The ranking might be formatted differently from the interview schedule.',
      'There is no concern if AI does not use candidates’ names.'
    ],correct:1,feedback:[
      'Speed is secondary. Candidate privacy, fairness, bias, applicable requirements, and accountable human judgment are central to this decision.',
      'Correct. AI should not independently make consequential employment decisions. Use approved hiring processes, protect applicant information, and involve appropriate human oversight and relevant specialists.',
      'Formatting is easy to change; the decision process is the important issue. A polished ranking can still encode unfair criteria or mishandle private information.',
      'Other details can identify candidates or act as proxies for protected characteristics. Removing names does not by itself establish fairness, privacy, or approval.'
    ]}
  ],
  pause: [
    {letter:'P',title:'Privacy',question:'Am I sharing anything confidential, personal, proprietary, or sensitive?',example:'Before pasting customer notes, confirm that the tool, use case, and specific information are approved. If unsure, stop and ask.',action:'Protect the input.'},
    {letter:'A',title:'Accuracy',question:'Can I verify important claims?',example:'Open the original report behind a statistic. Check the figure, date, population, and caveats before including it in a presentation.',action:'Check the evidence.'},
    {letter:'U',title:'Use case',question:'Is AI appropriate for this task?',example:'AI can suggest meeting topics. It should not independently choose who loses their job.',action:'Match the task to the tool.'},
    {letter:'S',title:'Scrutinize',question:'Have I reviewed the output for errors, bias, missing context, and quality?',example:'Read a project update for assumptions, unsupported commitments, excluded perspectives, and a tone that fits the recipient.',action:'Review with intention.'},
    {letter:'E',title:'Evaluate & own',question:'Would I be comfortable taking responsibility for this final work?',example:'Send the update only when you can explain and stand behind it. Follow organizational rules for disclosing AI assistance.',action:'Own the final decision.'}
  ],
  challenges: [
    {title:'A title worth opening',text:'Brainstorm possible titles for an internal presentation, using only a generic topic and no sensitive details.',correct:0,why:'YES. This is low-stakes ideation with non-sensitive input. Choose and review a title yourself; basic judgment still applies.'},
    {title:'A shortcut with customer records',text:'Upload confidential customer records to an unapproved public AI tool to find patterns.',correct:2,why:'NO. Sensitive information and an unapproved tool make this inappropriate. Check policy and use an explicitly approved process instead.'},
    {title:'A clearer project update',text:'Draft a project update using approved information, then have the employee check facts, commitments, and tone before sending.',correct:1,why:'MAYBE. AI can assist with safeguards. The review and approved information are essential; the employee owns what is sent.'},
    {title:'The final employment decision',text:'Allow AI alone to decide which employee should be terminated.',correct:2,why:'NO. This consequential employment decision requires accountable people and appropriate organizational processes.'},
    {title:'A summary you can stand behind',text:'Summarize publicly available information and verify important claims against the original sources.',correct:1,why:'MAYBE. AI can assist with safeguards. Public input reduces confidentiality concerns, but accuracy, context, and source checks still matter.'}
  ],
  quiz: [
    {topic:'Possibilities & limits',review:1,type:'single',question:'AI drafts a convincing explanation of why your project missed a deadline. It did not have access to the project records. What is the best next step?',options:['Use it; a coherent explanation shows that AI understood the project.','Treat it as a possible draft and compare every factual claim with the actual records.','Ask AI to make it sound more certain before sharing it.','Send it with a note that AI is responsible for any mistakes.'],correct:[1],explanation:'Fluent text is not evidence of access to the facts. Compare the draft with real records and remove assumptions before sharing it.'},
    {topic:'Productive prompting',review:2,type:'single',question:'You need a reminder email about a routine workshop. Which prompt gives AI the most useful direction without adding sensitive information?',options:['Write me an email.','Write a brilliant email that everyone will love.','Draft a friendly reminder to workshop attendees using these public event details. Keep it under 120 words, do not invent details, and provide a subject line and three short paragraphs.','Use everything you know about my employees to write a persuasive message.'],correct:[2],explanation:'This prompt includes a goal, audience and context, constraints, and an output format. Clear instructions improve usefulness; the draft still needs review.'},
    {topic:'Privacy & confidentiality',review:3,type:'multi',question:'A team wants to summarize a sensitive internal report with AI. Which safeguards should come before uploading? Select all that apply.',options:['Confirm that the tool and the specific use case are approved.','Check which information is permitted and share only the minimum authorized data.','Remove names and assume that everything else is safe to upload.','Ask the appropriate privacy or security contact when approval is unclear.','Plan to delete the chat after uploading instead of checking policy.'],correct:[0,1,3],explanation:'Approval, permitted data, and clarification when unsure are the safeguards. Removing names or deleting a chat does not by itself make a sensitive upload appropriate.'},
    {topic:'Verification',review:4,type:'single',question:'An AI-generated briefing cites a statistic you cannot find in the linked report. The deadline is close. What should you do?',options:['Leave it in because the report is from a respected organization.','Keep it but call it “approximately” correct.','Ask AI for a second link and accept it without opening it.','Check reliable original evidence and remove or replace the statistic if it remains unsupported.'],correct:[3],explanation:'A genuine source can still be cited incorrectly. Verify that the evidence supports the exact claim, or leave the claim out.'},
    {topic:'Fairness & human oversight',review:4,type:'single',question:'A manager asks AI to independently rank applicants and choose interviewees. What is the most responsible response?',options:['Use approved hiring processes, protect candidate information, and ensure appropriate human oversight and review for bias.','Accept the ranking if AI has not been given the applicants’ names.','Let AI decide so no human can be biased.','Use the first ranking because repeated prompts may give different results.'],correct:[0],explanation:'AI output is not automatically neutral. Consequential employment decisions need appropriate human oversight, fair criteria, privacy safeguards, and approved organizational processes.'},
    {topic:'Applying P.A.U.S.E.',review:5,type:'multi',question:'You have used an approved tool and permitted data to draft a customer update. Before sharing, how should you apply P.A.U.S.E.? Select all that apply.',options:['Verify dates, numbers, and promises against reliable records.','Review for errors, bias, missing context, and tone.','Confirm that you can explain and take responsibility for the final message.','Skip review because the tool was approved.','Ask AI to confirm its own accuracy and treat that as proof.'],correct:[0,1,2],explanation:'Approval addresses part of Privacy and Use case. Accuracy, Scrutinize, and Evaluate & own still require evidence, review, and human accountability.'},
    {topic:'Choosing an appropriate task',review:6,type:'single',question:'Which plan best balances useful AI assistance with responsible workplace judgment?',options:['Paste confidential customer histories into a public tool to save time.','Have AI issue a final disciplinary decision without a manager.','Use approved, non-sensitive input to outline a presentation, then verify claims and revise the draft before sharing.','Copy an AI-generated market forecast directly into a financial recommendation.'],correct:[2],explanation:'Outlining with permitted input is a useful support task. Verification and revision keep the employee responsible for quality and the final work.'}
  ]
};
