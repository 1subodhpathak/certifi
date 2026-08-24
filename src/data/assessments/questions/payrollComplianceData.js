import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const payrollComplianceData = {
  id: ASSESSMENT_TYPES.payroll_compliance,
  title: 'Payroll & Compliance Professional Certification',
  shortTitle: 'Payroll & Compliance',
  category: 'Accounting',
  durationMinutes: 55,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical payroll judgment across employee master data, earnings and deductions, payroll controls, statutory compliance, variance analysis, payroll reconciliation, final settlement, access governance, off-cycle processing, and payroll fraud risk.',
  instructions:
    '20 scenario-based questions, 55 minutes, 100 marks. Several questions include Mermaid diagrams, payroll schedules, or control workflows. Read each scenario carefully. Options are intentionally close, so choose the answer that best addresses the underlying payroll, compliance, or control issue. No negative marking.',

  questions: [
    {
      id: 'pc-01',
      type: 'mcq',
      title: 'Payroll Objective',
      difficulty: 'easy',
      points: 5,
      prompt: `A company processes payroll for 8,500 employees across multiple locations.

Which statement best defines a strong payroll function?`,
      options: [
        'Pay employees as early as possible, even if some validations remain incomplete.',
        'Pay employees accurately and on time while meeting statutory obligations, protecting sensitive data, and maintaining strong financial controls.',
        'Focus mainly on payslip generation because accounting and compliance are handled elsewhere.',
        'Minimize payroll corrections by avoiding off-cycle adjustments even when errors are identified.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Payroll combines employee accuracy, statutory compliance, confidentiality, and financial control. Why not A: speed without validation increases error and fraud risk. Why not C: payroll has direct accounting and compliance responsibilities. Why not D: valid errors should be corrected through controlled processes, not ignored.'
    },

    {
      id: 'pc-02',
      type: 'mcq',
      title: 'Employee Master Data Risk',
      difficulty: 'easy',
      points: 5,
      prompt: `An employee's bank account is changed two days before payroll. The request was submitted through email and the payroll analyst updated the master record directly.

What is the strongest control concern?`,
      options: [
        'Bank details should never be changed within five days of payroll.',
        'The change should be independently verified and approved because bank-detail changes can redirect employee pay and are a high-risk master-data event.',
        'The employee should be paid by check for the next three months.',
        'Payroll should ignore all master-data changes received by email.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Bank-account changes are sensitive and should be independently verified and approved before affecting payroll. Why not A: a blanket five-day rule is not the core control. Why not C: changing payment method does not authenticate the request. Why not D: email can be an intake channel if the change is validated through a controlled process.'
    },

    {
      id: 'pc-03',
      type: 'mcq',
      title: 'Deduction Setup',
      difficulty: 'easy',
      points: 5,
      prompt: `A statutory deduction rate changes from 4% to 4.5% effective July 1.

What is the strongest payroll response?`,
      options: [
        'Update the configuration after the July payroll so employees are not surprised.',
        'Update the rule before the effective payroll, validate the configuration, test affected employee groups, and retain evidence of the change.',
        'Apply 4.25% for one month as a transition rate.',
        'Leave the system unchanged and calculate the difference manually only if employees complain.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Statutory changes should be implemented on time, tested, and documented. Why not A: delaying the change can create under-deductions and compliance exposure. Why not C: invented transition rates are not supported. Why not D: reactive correction is weak control and may miss silent errors.'
    },

    {
      id: 'pc-04',
      type: 'mcq',
      title: 'Payroll Variance',
      difficulty: 'easy',
      points: 5,
      prompt: `Monthly payroll expense normally ranges between $9.8m and $10.2m.

This month it is $12.7m.

Headcount increased only 1%.

{{diagram}}

What is the strongest first response?`,
      diagram: `flowchart LR
  P["Prior payroll range<br/><b>$9.8m–$10.2m</b>"] --> V["Variance review"]
  C["Current payroll<br/><b>$12.7m</b>"] --> V
  H["Headcount<br/><b>+1%</b>"] --> V
  V --> I["Investigate bonus, overtime,<br/>master-data and manual adjustments"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class C,V,I warning;`,
      options: [
        'Release payroll because the total is still plausible for a growing company.',
        'Investigate the variance by pay component, population, manual adjustment, bonus, overtime, and master-data change before release.',
        'Reduce all employee payments proportionally until the total returns to the historical range.',
        'Ignore the variance if the payroll register balances mathematically.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A material unexplained payroll movement with almost flat headcount requires driver analysis before release. Why not A: plausibility is not evidence. Why not C: arbitrary reduction creates underpayments. Why not D: a mathematically balanced payroll can still contain incorrect amounts.'
    },

    {
      id: 'pc-05',
      type: 'mcq',
      title: 'Payroll Approval',
      difficulty: 'easy',
      points: 5,
      prompt: `Which approval setup gives the strongest control over payroll release?`,
      options: [
        'The payroll preparer calculates, approves, and uploads the bank file because they understand the details best.',
        'An independent reviewer validates key inputs, variances, exceptions, and the final payout before an authorized person releases the payment.',
        'HR approves only the employee list while finance approves nothing else.',
        'The bank file is released automatically as soon as payroll calculation finishes.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong payroll governance separates preparation, review, and release, with specific review of exceptions and material movements. Why not A: this concentrates incompatible duties. Why not C: employee-list approval alone does not validate the payout. Why not D: automation still needs defined controls and authorization.'
    },

    {
      id: 'pc-06',
      type: 'mcq',
      title: 'Compliance Calendar',
      difficulty: 'medium',
      points: 5,
      prompt: `A payroll team missed a statutory deposit deadline twice in six months because responsibility was shared informally between HR and Finance.

What is the strongest corrective action?`,
      options: [
        'Assign clear ownership, maintain a compliance calendar with due dates and evidence, and use review/escalation controls before deadlines.',
        'Pay statutory deposits only after regulators send reminders.',
        'Move every compliance task to the payroll vendor and stop internal review.',
        'Add the missed amount to the next payroll cycle without documenting the delay.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Recurring missed deadlines usually reflect weak ownership and calendar governance. Why not B: reminders are not a control. Why not C: outsourcing execution does not remove management responsibility. Why not D: delayed deposits may create penalties and require formal remediation.'
    },

    {
      id: 'pc-07',
      type: 'mcq',
      title: 'Timesheet Validation',
      difficulty: 'medium',
      points: 5,
      prompt: `An hourly employee normally works 40–45 hours per week. This payroll shows 93 hours of overtime.

The timesheet is system-approved, but the employee's manager says they were on leave for part of the period.

What should payroll do?`,
      options: [
        'Pay the overtime because system approval is sufficient evidence.',
        'Hold or investigate the exception, reconcile attendance/leave records, and obtain corrected approval before paying the unusual amount.',
        'Delete all overtime because the manager disagrees.',
        'Pay half the overtime as a compromise.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A system-approved input can still be wrong when contradictory evidence appears. Why not A: approval does not override a clear exception. Why not C: the correct amount must be established, not assumed to be zero. Why not D: payroll should not use arbitrary compromises.'
    },

    {
      id: 'pc-08',
      type: 'mcq',
      title: 'Final Settlement',
      difficulty: 'medium',
      points: 5,
      prompt: `An employee leaves on June 18.

The final settlement must include:
- unpaid salary
- unused leave payout
- recoverable company loan
- approved expense reimbursement
- statutory deductions

What is the strongest processing approach?`,
      options: [
        'Pay only unpaid salary and settle the rest later.',
        'Use a documented final-settlement checklist, validate each earning and recovery, obtain required approvals, and communicate the calculation clearly to the employee.',
        'Pay the employee’s last regular net salary again because it is the easiest benchmark.',
        'Delay settlement until year-end so all amounts can be finalized together.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Final settlements combine multiple sensitive components and require controlled calculation, approval, compliance treatment, and communication. Why not A: incomplete settlement creates employee and compliance risk. Why not C: the prior net salary is not a valid final-settlement calculation. Why not D: unjustified delay may violate policy or law.'
    },

    {
      id: 'pc-09',
      type: 'mcq',
      title: 'Payroll Access Control',
      difficulty: 'medium',
      points: 5,
      prompt: `A payroll system shows that 47 users have edit access to salary, bank details, and tax configuration. Several users moved to other departments months ago.

What is the strongest control response?`,
      options: [
        'Keep access because removing users may slow payroll support.',
        'Perform a role-based access review, remove unnecessary privileges promptly, and require periodic recertification of sensitive payroll access.',
        'Change everyone’s password but keep the same permissions.',
        'Restrict only payslip access because salary values are already known internally.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Sensitive payroll access should follow least privilege and periodic recertification. Why not A: operational convenience does not justify excessive access. Why not C: password changes do not fix privilege risk. Why not D: salary, banking, and tax data remain highly sensitive even inside the company.'
    },

    {
      id: 'pc-10',
      type: 'mcq',
      title: 'Payroll Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `Payroll register net pay is $6.42m.
Bank payment file is $6.57m.
GL payroll posting agrees to the payroll register.

{{diagram}}

What is the strongest conclusion?`,
      diagram: `flowchart LR
  R["Payroll register<br/><b>$6.42m net pay</b>"] --> X["Reconciliation"]
  G["GL posting<br/><b>agrees to register</b>"] --> X
  B["Bank file<br/><b>$6.57m</b>"] --> X
  X --> D["Difference<br/><b>$150k</b>"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class B,X,D warning;`,
      options: [
        'The bank file should be released because the GL agrees to payroll.',
        'The $150k difference must be investigated before release because the payout file does not reconcile to approved net pay.',
        'The payroll register should be increased by $150k to match the bank file.',
        'The difference can be ignored if there is sufficient cash.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The bank file must reconcile to approved net pay before release. Why not A: GL agreement does not validate a mismatched bank file. Why not C: accounting records should not be changed merely to force agreement. Why not D: liquidity does not eliminate payment-control risk.'
    },

    {
      id: 'pc-11',
      type: 'mcq',
      title: 'Off-Cycle Payroll',
      difficulty: 'medium',
      points: 5,
      prompt: `A senior executive requests a same-day off-cycle payment of $85,000 for a compensation correction.

There is no standard supporting calculation attached.

What is the strongest response?`,
      options: [
        'Process immediately because executive payments are business-critical.',
        'Require documented calculation, appropriate approval, tax/compliance treatment, and independent review before the off-cycle payment is released.',
        'Reject every off-cycle payroll request because off-cycle payments are inherently non-compliant.',
        'Pay the amount as an expense reimbursement to avoid payroll processing.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Off-cycle urgency increases control risk and requires stronger, not weaker, support. Why not A: seniority does not replace evidence. Why not C: valid off-cycle payments can be necessary. Why not D: relabeling compensation can create tax and compliance problems.'
    },

    {
      id: 'pc-12',
      type: 'mcq',
      title: 'Payslip Transparency',
      difficulty: 'medium',
      points: 5,
      prompt: `Employees receive a payslip showing only gross pay and net pay. Hundreds of payroll tickets are raised each month asking how deductions were calculated.

What is the strongest improvement?`,
      options: [
        'Show clear earnings, deductions, taxes, employer/employee statutory items where applicable, and year-to-date information in a readable format.',
        'Remove gross pay so employees focus only on the amount deposited.',
        'Ask managers to explain all payroll calculations verbally.',
        'Stop publishing payslips because payroll tickets create support cost.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Clear payslips reduce disputes and improve transparency. Why not B: removing information reduces transparency. Why not C: managers may not know payroll rules and verbal explanation lacks consistency. Why not D: payslips are a core employee record and often a legal requirement.'
    },

    {
      id: 'pc-13',
      type: 'mcq',
      title: 'Ghost Employee Risk',
      difficulty: 'hard',
      points: 5,
      prompt: `Payroll includes 24 employees whose HR status is "terminated," yet they still appear in the payment register.

{{diagram}}

What is the strongest immediate response?`,
      diagram: `flowchart LR
  HR["HR master<br/><b>24 terminated employees</b>"] --> M["Master-data mismatch"]
  PR["Payroll register<br/><b>24 still active</b>"] --> M
  M --> R["Stop / investigate payments<br/>before release"]
  classDef danger fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class M,R danger;`,
      options: [
        'Release payroll and investigate after payment because the employees may be rehired.',
        'Stop or isolate the affected payments, reconcile HR and payroll master data, verify termination dates, and investigate whether any unauthorized payments occurred.',
        'Change all terminated employees to unpaid leave so the systems agree.',
        'Delete the employees from payroll without reviewing prior payments.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Terminated employees appearing in payroll creates ghost-employee and overpayment risk. Why not A: post-payment review is too late. Why not C: changing status to force agreement hides the problem. Why not D: prior-period exposure and the cause still need investigation.'
    },

    {
      id: 'pc-14',
      type: 'mcq',
      title: 'Duplicate Payment',
      difficulty: 'hard',
      points: 5,
      prompt: `A payroll run failed during bank upload. The operations team is unsure whether the first file was accepted, so they upload the same file again.

What is the primary control risk?`,
      options: [
        'Employees may receive duplicate salary payments if the bank processed both files.',
        'Payroll tax will automatically double even if the bank rejects the second file.',
        'The GL will always prevent duplicate cash movement.',
        'There is no risk because banks automatically deduplicate every payroll file.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Resubmitting without confirmation can create duplicate employee payments. Why not B: tax effects depend on the payroll and filing process, not just file upload. Why not C: the GL records events but does not prevent a bank from processing a second file. Why not D: deduplication behavior varies and cannot be assumed.'
    },

    {
      id: 'pc-15',
      type: 'mcq',
      title: 'Statutory Reconciliation',
      difficulty: 'hard',
      points: 5,
      prompt: `Payroll calculated $1.14m of statutory employee and employer contributions for the quarter.

The statutory filing totals $1.09m.

What is the strongest next step?`,
      options: [
        'File $1.09m because the statutory portal should be treated as authoritative.',
        'Reconcile the $50k difference by employee/component, identify configuration or filing issues, and resolve before final submission or payment.',
        'Post the $50k to payroll expense so the accounts balance.',
        'Split the difference across all employees equally.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Payroll-to-statutory reconciliation is essential before filing and payment. Why not A: portal output can still reflect incorrect inputs. Why not C: accounting entries do not resolve compliance discrepancies. Why not D: arbitrary allocation is unsupported.'
    },

    {
      id: 'pc-16',
      type: 'mcq',
      title: 'Manual Override Pattern',
      difficulty: 'hard',
      points: 5,
      prompt: `One payroll analyst used manual overrides on 18% of employee records this month. The normal rate is below 2%.

Most overrides lack comments.

What is the strongest interpretation?`,
      options: [
        'The analyst is highly productive and should receive broader access.',
        'The spike is a control warning that requires review of override reasons, approval evidence, affected employees, and possible process or fraud issues.',
        'Manual overrides are harmless if net payroll is close to budget.',
        'The payroll system should disable all overrides permanently.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A large unexplained increase in manual overrides is a strong exception signal. Why not A: activity volume does not establish quality. Why not C: budget agreement can hide employee-level errors. Why not D: legitimate overrides may still be necessary under controlled conditions.'
    },

    {
      id: 'pc-17',
      type: 'mcq',
      title: 'Payroll Cutoff',
      difficulty: 'hard',
      points: 5,
      prompt: `Employees earn a performance bonus in December based on completed 2026 results. Final calculations are approved in January and paid in February.

Assume the obligation is sufficiently measurable at December year-end.

Which accounting treatment is strongest?`,
      options: [
        'Recognize the bonus expense only in February when cash is paid.',
        'Recognize the expense and related liability in December because the employees earned the bonus in that period.',
        'Recognize the expense in January because that is when management approved the amount.',
        'Record the amount as a prepaid asset in December.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Under accrual accounting, the expense belongs to the period in which the employees earned it when the obligation can be reasonably measured. Why not A: payment timing does not determine expense recognition. Why not C: approval timing may confirm the amount but does not change when the service was earned. Why not D: the company has not purchased a future benefit.'
    },

    {
      id: 'pc-18',
      type: 'mcq',
      title: 'Sensitive Data Exposure',
      difficulty: 'hard',
      points: 5,
      prompt: `Payroll exports a spreadsheet containing employee names, salaries, bank accounts, tax IDs, and home addresses to a shared team drive for review.

The folder is accessible to more than 300 employees.

What is the strongest response?`,
      options: [
        'Keep the file but password-protect the spreadsheet with a common team password.',
        'Move payroll review to a restricted access-controlled location, minimize the data included, and review who accessed or could access the exposed file.',
        'Delete only the home-address column because bank and tax data are needed for payroll.',
        'Leave the file because employees are all part of the same company.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Payroll data requires least-privilege access, data minimization, and incident review when exposed. Why not A: a shared password does not provide strong access governance. Why not C: bank and tax data are also highly sensitive. Why not D: internal access still needs to be restricted to legitimate business need.'
    },

    {
      id: 'pc-19',
      type: 'mcq',
      title: 'Payroll Control Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `Before payroll sign-off, the controller sees:

{{diagram}}

What is the strongest conclusion?`,
      diagram: `flowchart TB
  HC["Headcount<br/><b>+2%</b>"] --> J["Payroll review"]
  NP["Net pay<br/><b>+17%</b>"] --> J
  OT["Overtime<br/><b>+49%</b>"] --> J
  OV["Manual overrides<br/><b>2% → 11%</b>"] --> J
  TERM["Terminated employees paid<br/><b>3</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class NP,OT,OV,TERM,J warning;`,
      options: [
        'Payroll can be released because headcount growth explains the higher total.',
        'The combination of net-pay growth, overtime spike, override activity, and terminated employees in payroll requires investigation before release.',
        'Only the terminated employees matter; the other movements are normal.',
        'The payroll should be reduced by 15% to align with headcount growth.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Multiple independent risk indicators point to a potentially significant payroll issue and require investigation before cash is released. Why not A: 2% headcount growth does not explain 17% net-pay growth. Why not C: the other trends are also material exceptions. Why not D: arbitrary adjustment is not a control.'
    },

    {
      id: 'pc-20',
      type: 'mcq',
      title: 'Integrated Payroll Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A payroll team has these recurring issues:

- late statutory filings
- frequent unexplained overrides
- weak access reviews
- employee bank changes without independent verification
- payroll-to-bank differences found after payment
- rising employee complaints

What is the strongest remediation strategy?`,
      options: [
        'Focus only on faster payroll processing because most issues come from deadline pressure.',
        'Redesign the payroll control framework across master data, access, change approval, pre-release reconciliation, statutory calendars, exception review, and clear ownership.',
        'Outsource payroll immediately and assume the vendor will remove the control risk.',
        'Increase the payroll budget so the same process can be performed by more people.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The issues are systemic and span the payroll control environment, so remediation must address governance, access, change management, reconciliation, compliance, and accountability together. Why not A: speed alone can worsen control failures. Why not C: outsourcing does not transfer management responsibility. Why not D: more staff will not fix a weak process design.'
    },
  ],
};
