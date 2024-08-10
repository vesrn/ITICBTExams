// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is not open source software?",
   
    answer: "Windows 10",
    options: [
      "Open Office",
      "Windows 10",
      "Linux",
      "Ubuntu"
    ]
  },
    {
    numb: 2,
    question: "Identify the command which is used to remove files",
    answer: "rm",
    options: [
      "delete",
      "rm",
      "dm", 
      "erase"
    ]
  },
    {
    numb: 3,
    question: "The first option of KDE desktop is in Linux___",
    
    answer: "applications",
    options: [
      "preference",
      "applications",
      "system",
      "system setting"
    ]
  },
    {
    numb: 4,
    question: "OSS stands for",
    answer: "Open Source Software",
    options: [
      "Open System Service",
      "Open Source Software",
      "Open System Software",
      "Open Synchronzed Software"
    ]
  },
    {
    numb: 5,
    question: "A software, coding of which is available freely on internet and is open for user for further use is called_____",
    answer: "Open Source Software",
    options: [
      "unlicensed software",
      "Open Source Software",
      "Free Software",
      "Community Software"
    ]
  },
  {
    numb: 6,
    question: "FSF stands for?",
    answer: "Free Software Foundation",
    options: [
      "File Server First",
      "Free Software File",
      "Free Software Foundation",
      "Free Software First"
    ]
  },
  {
    numb: 7,
    question: "Which command is used to store the active document permanently?",
    answer: "Save",
    options: [
      "Save",
      "Send",
      "Prepare",
      "Save as"
    ]
  },
  {
    numb: 8,
    question: "Which bat contains the current position of the cursor in MS Word ",

    answer: "Status bar",
    options: [
      "Layout",
      "Title bar",
      "Status bar",
      "Horizontal ruler"
    ]
  },
  {
    numb: 9,
    question: "Which one of the following is text styling feature of MS Word?",

    answer: "Word Art",
    options: [
      "Word fill",
      "Word Colour",
      "Word Art",
      "Word font"
    ]
  },
 {
    numb: 10,
    question: "Which document view given an appearnce as in web browser?",

    answer: "Web layout view",
    options: [
      "Draft view",
      "Outline view",
      "Web layout view",
      "Full screen reading"
    ]
  },
     {
    numb: 11,
    question: "What is the purpose of quick access toolbar?",

    answer: "To hold familiar and repeated function",
    options: [
      "To hold advance function",
      "To hold special function",
      "To hold basic function",
      "To hold familiar and repeated function"
    ]
  },
     {
    numb: 12,
    question: "What is the purpose of gutter margin?",

    answer: "Margin that is added to binding side of page when printing",
    options: [
      "Margin that is added to the left margin when printing",
      "Margin that is added to the right margin when printing ",
      "Margin that is added to binding side of page when printing",
      "Margin that is added to the outside of the page when printing"
    ]
  },
     {
    numb: 13,
    question: "Which option is used for tab setting?",

    answer: "Horizontal ruler",
    options: [
      "Horizontal ruler",
      "Status bar",
      "Vertical ruler",
      "Vertical scrollbar"
    ]
  },
     {
    numb: 14,
    question: "What is the purpose of cover page?",

    answer: "Allows to fill title, author, date and other information",
    options: [
      "Fills the list of people intent to mail",
      "Allows to fill title, author, date and other information",
      "To view the mailed list",
      "Contains details of the documents"
    ]
  },
     {
    numb: 15,
    question: "Combining two or more cells to make one is called__",

    answer: "merging",
    options: [
      "combining",
      "joining",
      "merging",
      "creating"
    ]
  },

     {
    numb: 16,
    question: "The ability to combine name and addresses with a standard document is called_____? ",

    answer: "mail merge",
    options: [
      "document formatting",
      "mail merge",
      "database management",
      "form letters"
    ]
  },
     {
    numb: 17,
    question: "Which shortcut key is use to center the selected text in MS Word?",

    answer: "Ctrl + E",
    options: [
      "Ctrl + C",
      "Ctrl + D",
      "Ctrl + E",
      "Ctrl + F"
    ]
  },
     {
    numb: 18,
    question: "In Openoffice, Shift+Ctrl+N is use for_____. ",

    answer: "opens templates and documents dialog",
    options: [
      "creates a new document",
      "Opens a document",
      "opens templates and documents dialog",
      "exits application"
    ]
  },
     {
    numb: 19,
    question: "How can you insert a sound file in your word document? ",

    answer: "From insert > object menu option",
    options: [
      "From insert > sound menu option",
      "From insert > file menu option",
      "From insert > blank menu",
      "From insert > object menu option"
    ]
  },
     {
    numb: 20,
    question: "Individual in a table are referred to as... ",

    answer: "cells",
    options: [
      "boxes",
      "cells",
      "rows",
      "columns"
    ]
  },
     {
    numb: 21,
    question: "How will you insert chart in MS Word?",

    answer: "Insert —> Chart",
    options: [
      "Insert —> Picture",
      "Insert —» Clip Art",
      "Insert —► Shapes",
      "Insert —> Chart"
    ]
  },
     {
    numb: 22,
    question: "How many ways to create a table in MSWor?",

    answer: "3Ways",
    options: [
      "1Ways",
      "3Ways",
      "2Ways",
      "4Ways"
    ]
  },
     {
    numb: 23,
    question: "What tab in MS Word you will use to access mail merge options?",

    answer: "Mailing Tab",
    options: [
      "Insert Tab",
      "Reference tab",
      "Home tab",
      "Mailing tab"
    ]

         
  },
     {
    numb: 24,
    question: "Which of the following is not a default document type for a mail merge?",

    answer: "Envelopes",
    options: [
      "Memos",
      "Directory",
      "Letters",
      "Envelopes"
    ]
  },
     {
    numb: 25,
    question: "Which shortcut key is use to print document? ",

    answer: "Ctrl+P",
    options: [
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+A",
      "Ctrl+P"
    ]
  },
    
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
