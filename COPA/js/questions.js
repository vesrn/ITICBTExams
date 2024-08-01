// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is the sequence, in which computer operates?",
   
    answer: "Input, Process, Output",
    options: [
      "Input, Output, Process",
      "Input, Process, Output",
      "Process, Input, Output",
      "Output, Process, Input"
    ]
  },
    {
    numb: 2,
    question: "How does the parallel port transfer a byte?",
    answer: "8 bits at a time",
    options: [
      "Bit by bit",
      "2 bits at a time",
      "4 bits at a time", 
      "8 bits at a time"
    ]
  },
    {
    numb: 3,
    question: "What is an internal power supply units of CPU?",
    
    answer: "SMPS",
    options: [
      "CVT",
      "UPS",
      "SMPS",
      "Stabilizer"
    ]
  },
    {
    numb: 4,
    question: "What is the purpose of expansion slot in mother  board?",
    answer: "To insert the additional peripherals",
    options: [
      "To Insert the RAM",
      "To insert the mouse",
      "To insert the keyboard ",
      "To insert the additional peripherals"
    ]
  },
    {
    numb: 5,
    question: "Which factor influences the severity of electrical shock?",
    answer: "Duration of current passing",
    options: [
      "Very low DC voltage",
      "Duration of current passing",
      "Level of current in micro ampere",
      "Person receives the shock"
    ]
  },
  {
    numb: 6,
    question: "What is the full form of ABC in first aid?",
    answer: "Airway, Breathing, Circulation",
    options: [
      "Anyway, Breathing, Circulation ",
      "Airway, Breathing, Circulation",
      "Anyway, Blood, Circulation",
      "Airway, Blood, Chest "
    ]
  },
  {
    numb: 7,
    question: "What is the full form of ALU? ",
    answer: "Arithmetic Logic Unit",
    options: [
      "Allowed Logic Unit ",
      "AScii Logic Unit",
      "Arithmetic Logic Unit",
      "Arithmetic Least Unit"
    ]
  },
  {
    numb: 8,
    question: "What is current? ",

    answer: "Flow of Electrons",
    options: [
      "Flow of Neutrons",
      "Flow of Electrons",
      "Flow of Protons",
      "Flow of Resistance"
    ]
  },
  {
    numb: 9,
    question: "Which one is arm lift back pressure method?  ",

    answer: "Nelsons method",
    options: [
      "Mouth to mouth method",
      "Mouth to nose method",
      "Nelsons method",
      "Schafers method"
    ]
  },
 {
    numb: 10,
    question: "Desktop and personal computer is also called as__________ ",

    answer: "Micro Computer",
    options: [
      "Super Computer",
      "Quantum Computer",
      "Mainframe Computer",
      "Micro Computer"
    ]
  },
     {
    numb: 11,
    question: "What is the full form of SSD?",

    answer: "Solid State Drive",
    options: [
      "Signal State Drive",
      "Solid State Drive",
      "Single Signal Drive",
      "Solid Signal Drive"
    ]
  },
     {
    numb: 12,
    question: "Which one is an example for OS?",

    answer: "Windows",
    options: [
      "Antivirus",
      "Windows",
      "MS Office",
      "Macromedia"
    ]
  },
     {
    numb: 13,
    question: "Which control panel applet gives the information of computer?",

    answer: "System and Security",
    options: [
      "System and Security",
      "Hardware and sound",
      "Programs",
      "Appearance and personalization"
    ]
  },
     {
    numb: 14,
    question: "Which shortcut key is used to copy and paste a file folder? ",

    answer: "Ctrl+ C and Ctrl+ V",
    options: [
      "Ctrl+X and Ctrl+ V",
      "Ctrl + A and Ctrl + V",
      "Ctrl + Z and Ctrl + V",
      "Ctrl+ C and Ctrl+ V"
    ]
  },
     {
    numb: 15,
    question: "Which is the order of files and directories in Window Explore? ",

    answer: "Hierarchically",
    options: [
      "Serially",
      "Sequentially",
      "Hierarchically",
      "Alphabetically"
    ]
  },

     {
    numb: 16,
    question: "Where does the pinned applications stayed in Windows OS? ",

    answer: "Taskbar",
    options: [
      "Desktop",
      "Notification Area",
      "Start Button",
      "Taskbar"
    ]
  },
     {
    numb: 17,
    question: "What is the extension of notepad file? ",

    answer: ".txt",
    options: [
      ".fil",
      ".dll",
      ".doc",
      ".txt"
    ]
  },
     {
    numb: 18,
    question: "Name the tool in control panel which is used to adjust your computer setting with voice command? ",

    answer: "Ease of access",
    options: [
      "Ease of access",
      "System and Security",
      "Appearance and personalization",
      "Hardware and sound"
    ]
  },
     {
    numb: 19,
    question: "Name the shortcut key used to open start menu? ",

    answer: "Windows Logo",
    options: [
      "Windows Logo",
      "Ctrl",
      "Shift",
      "Alt"
    ]
  },
     {
    numb: 20,
    question: "Which type of device is a printer? ",

    answer: "Output Device",
    options: [
      "Input device",
      "Output Device",
      "Processing Device",
      "Calcuating Device"
    ]
  },
     {
    numb: 21,
    question: "What is the function of operating system? ",

    answer: "Process and memory management",
    options: [
      "Word processing",
      "Calculation",
      "Process and memory management",
      "Drawing Pictures"
    ]
  },
     {
    numb: 22,
    question: "Name the ICON in which deleted files and folder are found",

    answer: "Recycle Bin",
    options: [
      "My Computer",
      "Recycle Bin",
      "Microsoft Edge",
      "Google Chrome"
    ]
  },
     {
    numb: 23,
    question: "Name the tool in control panel which we can change the system date?",

    answer: "Date and Time",
    options: [
      "User Account",
      "System",
      "Date and Time",
      "Fonts"
    ]

         
  },
     {
    numb: 24,
    question: "Name the shortcut key used for refresh windows desktop ",

    answer: "F5",
    options: [
      "F1",
      "F3",
      "F5",
      "F7"
    ]
  },
     {
    numb: 25,
    question: "Which type of device is a scanner? ",

    answer: "Input device",
    options: [
      "Processing Device",
      "Internal Device",
      "Output Device",
      "Input device"
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
