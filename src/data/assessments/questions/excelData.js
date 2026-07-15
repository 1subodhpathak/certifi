import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const excelData = {
  id: ASSESSMENT_TYPES.excel,
  title: "Advanced Excel Professional Certification",
  shortTitle: "Excel",
  category: "Data Tools",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional Excel assessment covering lookup functions, dynamic arrays, logical formulas, PivotTables, Power Query, Power Pivot, data validation, formula auditing, modeling controls, and spreadsheet quality.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical Excel analytics and modeling judgment.",
  questions: [
{ id: 'ex-01', type: 'mcq', title: 'Lookup Functions', prompt: 'Which function is best for looking up a value to the left of the reference column?', options: ['VLOOKUP', 'HLOOKUP', 'INDEX/MATCH', 'LOOKUP'], correctIndex: 2, explanation: 'VLOOKUP can only look to the right. INDEX/MATCH is flexible in any direction.' },
        { id: 'ex-02', type: 'mcq', title: 'Pivot Tables', prompt: 'To see a percentage of the grand total in a Pivot Table, which setting should you change?', options: ['Summarize Values By', 'Show Values As', 'Field Settings', 'Conditional Formatting'], correctIndex: 1, explanation: '"Show Values As" allows for percentages of totals, parent rows, etc.' },
        { id: 'ex-03', type: 'mcq', title: 'Logical Formulas', prompt: 'What will =IF(AND(10>5, 5>10), "Yes", "No") return?', options: ['Yes', 'No', '#VALUE!', '#NAME?'], correctIndex: 1, explanation: 'AND requires both conditions to be true. Since 5>10 is false, it returns No.' },
        { id: 'ex-04', type: 'mcq', title: 'Data Cleaning', prompt: 'Which Power Query transformation changes columns into rows?', options: ['Merge', 'Append', 'Unpivot', 'Transpose'], correctIndex: 2, explanation: 'Unpivot turns attribute-value pairs into rows, common for cleaning cross-tab data.' },
        { id: 'ex-05', type: 'mcq', title: 'Error Handling', prompt: 'Which function returns a custom value if a formula results in an error?', options: ['ISERROR', 'IFERROR', 'ERROR.TYPE', 'IFNA'], correctIndex: 1, explanation: 'IFERROR(value, value_if_error) is the standard way to handle errors.' },
        { id: 'ex-06', type: 'mcq', title: 'Naming Cells', prompt: 'What is the shortcut to create named ranges from selection?', options: ['Ctrl + F3', 'Ctrl + Shift + F3', 'Alt + F3', 'Shift + F3'], correctIndex: 1, explanation: 'Ctrl + Shift + F3 opens the "Create Names from Selection" dialog.' },
        { id: 'ex-07', type: 'mcq', title: 'Array Formulas', prompt: 'In older Excel versions, how do you enter an array formula?', options: ['Enter', 'Shift + Enter', 'Ctrl + Shift + Enter', 'Alt + Enter'], correctIndex: 2, explanation: 'CSE (Ctrl+Shift+Enter) was required before Dynamic Arrays were introduced.' },
        { id: 'ex-08', type: 'mcq', title: 'Formatting', prompt: 'Which custom format code hides the contents of a cell?', options: ['###', '0.00', ';;;', '@@@'], correctIndex: 2, explanation: 'The semicolon separates formats for positive, negative, zero, and text. ;;; makes all invisible.' },
        { id: 'ex-09', type: 'mcq', title: 'Date Functions', prompt: 'Which function returns the last day of a month given a start date and number of months?', options: ['DATE', 'EDATE', 'EOMONTH', 'MONTH'], correctIndex: 2, explanation: 'EOMONTH returns the end of the month.' },
        { id: 'ex-10', type: 'mcq', title: 'Text Functions', prompt: 'Which function removes all non-printable characters from text?', options: ['TRIM', 'CLEAN', 'SUBSTITUTE', 'REPLACE'], correctIndex: 1, explanation: 'CLEAN removes non-printable characters; TRIM removes extra spaces.' },
        { id: 'ex-11', type: 'mcq', title: 'Lookup Efficiency', prompt: 'For large datasets, which lookup method is generally faster?', options: ['VLOOKUP (Exact Match)', 'XLOOKUP', 'INDEX/MATCH', 'VLOOKUP (Approximate Match)'], correctIndex: 1, explanation: 'XLOOKUP is optimized for performance and is more modern than VLOOKUP/INDEX/MATCH.' },
        { id: 'ex-12', type: 'mcq', title: 'Goal Seek', prompt: 'Where is "Goal Seek" located in the Excel ribbon?', options: ['Home Tab', 'Data Tab > What-If Analysis', 'Insert Tab', 'Review Tab'], correctIndex: 1, explanation: 'Goal Seek is part of the What-If Analysis tools in the Data tab.' },
        { id: 'ex-13', type: 'mcq', title: 'Filtering', prompt: 'What is the limit of unique items visible in a standard Excel Filter dropdown?', options: ['1,000', '10,000', '32,767', 'Unlimited'], correctIndex: 1, explanation: 'Excel filter lists only show up to 10,000 unique items.' },
        { id: 'ex-14', type: 'mcq', title: 'Sheet Protection', prompt: 'By default, which cells are locked when a worksheet is protected?', options: ['None', 'All cells', 'Only cells with formulas', 'Only empty cells'], correctIndex: 1, explanation: 'All cells have the "Locked" property enabled by default, but it only takes effect when Protected.' },
        { id: 'ex-15', type: 'mcq', title: 'Absolute Reference', prompt: 'Which key toggles between relative, absolute, and mixed references?', options: ['F2', 'F4', 'F5', 'F9'], correctIndex: 1, explanation: 'F4 adds or removes $ signs to the cell reference.' },
        { id: 'ex-16', type: 'mcq', title: 'Pivot Sorting', prompt: 'How do you prevent a Pivot Table from resizing columns on refresh?', options: ['Options > Layout > AutoFit', 'Options > Data > Refresh', 'Format Cells', 'Column Width Setting'], correctIndex: 0, explanation: 'Unchecking "Autofit column widths on update" in PivotTable Options preserves layout.' },
        { id: 'ex-17', type: 'mcq', title: 'Conditional Formatting', prompt: 'Which of these cannot be used as a basis for Conditional Formatting?', options: ['Formula', 'Cell Value', 'Pivot Table Slicer State', 'Icon Sets'], correctIndex: 2, explanation: 'Slicer states cannot directly trigger conditional formatting without complex DAX/VBA.' },
        { id: 'ex-18', type: 'mcq', title: 'Data Validation', prompt: 'What happens if a user enters invalid data in a cell with "Stop" style validation?', options: ['Warning is shown but data stays', 'Data is rejected', 'Cell turns red', 'Excel crashes'], correctIndex: 1, explanation: '"Stop" prevents invalid entry; "Warning" and "Information" allow it.' },
        { id: 'ex-19', type: 'mcq', title: 'Calculation Options', prompt: 'If your formulas aren\'t updating automatically, what is likely changed?', options: ['Iteration count', 'Calculation Mode to Manual', 'Precision as displayed', 'Workbook sharing'], correctIndex: 1, explanation: 'Manual Calculation mode stops Excel from updating formulas until F9 is pressed.' },
        { id: 'ex-20', type: 'mcq', title: 'VBA/Macros', prompt: 'Which file extension indicates an Excel workbook with macros?', options: ['.xlsx', '.xlsb', '.xlsm', '.xltx'], correctIndex: 2, explanation: '.xlsm is the standard Macro-Enabled Workbook format.' },
    {
          "id": "ex-21",
          "type": "mcq",
          "title": "XLOOKUP",
          "prompt": "What is a major advantage of XLOOKUP over VLOOKUP?",
          "options": [
                "It can return values to the left or right and has built-in not-found handling",
                "It only works with sorted data",
                "It cannot use exact match",
                "It only works in charts"
          ],
          "correctIndex": 0,
          "explanation": "XLOOKUP is more flexible and safer for many lookup tasks."
    },
    {
          "id": "ex-22",
          "type": "mcq",
          "title": "FILTER",
          "prompt": "What does the FILTER function return?",
          "options": [
                "Rows or columns that meet criteria",
                "Only a single number",
                "Only a chart",
                "Only hidden cells"
          ],
          "correctIndex": 0,
          "explanation": "FILTER returns dynamic arrays matching criteria."
    },
    {
          "id": "ex-23",
          "type": "mcq",
          "title": "UNIQUE",
          "prompt": "What is UNIQUE used for?",
          "options": [
                "Returning distinct values from a range",
                "Removing formulas",
                "Counting only blank cells",
                "Changing fonts"
          ],
          "correctIndex": 0,
          "explanation": "UNIQUE helps create distinct lists for analysis."
    },
    {
          "id": "ex-24",
          "type": "mcq",
          "title": "LET",
          "prompt": "Why use the LET function?",
          "options": [
                "To name intermediate calculations and improve readability/performance",
                "To lock a workbook",
                "To merge sheets",
                "To import CSV files only"
          ],
          "correctIndex": 0,
          "explanation": "LET reduces repeated formulas and makes complex logic easier to audit."
    },
    {
          "id": "ex-25",
          "type": "mcq",
          "title": "LAMBDA",
          "prompt": "What does LAMBDA allow in Excel?",
          "options": [
                "Creating reusable custom functions without VBA",
                "Deleting named ranges",
                "Changing workbook language",
                "Replacing Power Query"
          ],
          "correctIndex": 0,
          "explanation": "LAMBDA enables custom formula logic."
    },
    {
          "id": "ex-26",
          "type": "mcq",
          "title": "Power Query Merge",
          "prompt": "What does Merge do in Power Query?",
          "options": [
                "Joins tables based on matching columns",
                "Stacks rows from tables",
                "Creates a chart",
                "Deletes duplicates only"
          ],
          "correctIndex": 0,
          "explanation": "Merge is similar to a database join."
    },
    {
          "id": "ex-27",
          "type": "mcq",
          "title": "Power Query Append",
          "prompt": "What does Append do in Power Query?",
          "options": [
                "Stacks rows from similar tables",
                "Joins columns side by side",
                "Creates a pivot chart",
                "Runs VBA"
          ],
          "correctIndex": 0,
          "explanation": "Append combines rows from multiple tables."
    },
    {
          "id": "ex-28",
          "type": "mcq",
          "title": "Data Model",
          "prompt": "Why use the Excel Data Model?",
          "options": [
                "To relate tables and analyze larger structured datasets",
                "To hide all formulas",
                "To change colors",
                "To remove relationships"
          ],
          "correctIndex": 0,
          "explanation": "The Data Model supports relationships and measures."
    },
    {
          "id": "ex-29",
          "type": "mcq",
          "title": "Power Pivot",
          "prompt": "What is DAX used for?",
          "options": [
                "Creating calculations and measures in the data model",
                "Drawing images",
                "Protecting sheets only",
                "Writing emails"
          ],
          "correctIndex": 0,
          "explanation": "DAX is the expression language for Power Pivot/Power BI style models."
    },
    {
          "id": "ex-30",
          "type": "mcq",
          "title": "Pivot Refresh",
          "prompt": "A pivot table is not showing new rows. What should you check?",
          "options": [
                "Source range/table and refresh status",
                "Only font size",
                "Only page margins",
                "Only sheet tab color"
          ],
          "correctIndex": 0,
          "explanation": "Pivot tables need correct source data and refresh."
    },
    {
          "id": "ex-31",
          "type": "mcq",
          "title": "Structured References",
          "prompt": "Why convert data ranges into Excel Tables?",
          "options": [
                "Dynamic ranges, structured references, filters, and easier formula maintenance",
                "To remove headers",
                "To make files read-only",
                "To delete formulas"
          ],
          "correctIndex": 0,
          "explanation": "Excel Tables improve structure and formula reliability."
    },
    {
          "id": "ex-32",
          "type": "mcq",
          "title": "Formula Auditing",
          "prompt": "Which tools help audit formulas?",
          "options": [
                "Trace precedents, trace dependents, evaluate formula, and error checking",
                "Only spell check",
                "Only page break preview",
                "Only comments"
          ],
          "correctIndex": 0,
          "explanation": "Formula auditing tools help understand dependencies and logic."
    },
    {
          "id": "ex-33",
          "type": "mcq",
          "title": "Absolute Reference",
          "prompt": "What does $A$1 mean?",
          "options": [
                "Both column and row are locked",
                "Only row is locked",
                "Only column is locked",
                "Nothing is locked"
          ],
          "correctIndex": 0,
          "explanation": "Dollar signs lock references when formulas are copied."
    },
    {
          "id": "ex-34",
          "type": "mcq",
          "title": "Mixed Reference",
          "prompt": "What does A$1 mean?",
          "options": [
                "Row 1 is locked, column can change",
                "Column A is locked, row can change",
                "Both are locked",
                "Neither is locked"
          ],
          "correctIndex": 0,
          "explanation": "A$1 locks the row only."
    },
    {
          "id": "ex-35",
          "type": "mcq",
          "title": "COUNTIFS",
          "prompt": "What is COUNTIFS used for?",
          "options": [
                "Counting rows that meet multiple criteria",
                "Summing values",
                "Returning unique values",
                "Creating charts"
          ],
          "correctIndex": 0,
          "explanation": "COUNTIFS counts records based on multiple conditions."
    },
    {
          "id": "ex-36",
          "type": "mcq",
          "title": "SUMPRODUCT",
          "prompt": "Why is SUMPRODUCT useful?",
          "options": [
                "It can perform conditional calculations across arrays",
                "It only counts blanks",
                "It formats cells",
                "It protects sheets"
          ],
          "correctIndex": 0,
          "explanation": "SUMPRODUCT is powerful for weighted and conditional calculations."
    },
    {
          "id": "ex-37",
          "type": "mcq",
          "title": "Dynamic Arrays",
          "prompt": "What happens when a dynamic array formula spills?",
          "options": [
                "It returns multiple results into neighboring cells",
                "It deletes the sheet",
                "It creates a macro",
                "It hides rows"
          ],
          "correctIndex": 0,
          "explanation": "Spill formulas output arrays across cells."
    },
    {
          "id": "ex-38",
          "type": "mcq",
          "title": "Data Validation",
          "prompt": "What is data validation used for?",
          "options": [
                "Restricting or guiding allowed input values",
                "Changing printer settings",
                "Encrypting formulas",
                "Deleting rows"
          ],
          "correctIndex": 0,
          "explanation": "Data validation improves data entry quality."
    },
    {
          "id": "ex-39",
          "type": "mcq",
          "title": "Model Control",
          "prompt": "What is a good practice in business-critical Excel models?",
          "options": [
                "Separate inputs, calculations, outputs, and checks",
                "Mix hardcodes inside every formula",
                "Hide assumptions",
                "Use inconsistent colors"
          ],
          "correctIndex": 0,
          "explanation": "Clear structure improves auditability."
    },
    {
          "id": "ex-40",
          "type": "mcq",
          "title": "Advanced Excel Judgment",
          "prompt": "A workbook is slow and hard to audit. What should be improved?",
          "options": [
                "Reduce volatile formulas, use tables, simplify formulas, separate logic, and document assumptions",
                "Add more merged cells",
                "Use more hidden sheets without labels",
                "Convert all formulas to values without review"
          ],
          "correctIndex": 0,
          "explanation": "Performance and auditability require better structure and formula design."
    }
  ]
};
