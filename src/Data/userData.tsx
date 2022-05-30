const navbar = {
  headerTitle: "Medical Plan",
  logoutText: "Log out",
};

const navigationList = [
  {
    id: "opt1",
    name: "Usage",
  },
  {
    id: "opt2",
    name: "Ongoing Care",
  },
  {
    id: "opt3",
    name: "Expecting Care",
  },
  {
    id: "opt4",
    name: "Providers",
  },
];

const userList = [
  {
    id: 1,
    firstName: "Jeniffer",
    lastName: "Smith",
  },
  {
    id: 2,
    firstName: "Macro",
    lastName: "Smith",
  },
  {
    id: 3,
    firstName: "Maria",
    lastName: "Smith",
  },
]; //add the usernames

const radioBtnDescription = {
  low: {
    id: "low",
    buttonText: "Low",
    doctorVisit: "1 visits to ER or doctor",
    prescription: "1 prescription drug",
    ctScan: "0 CT scans or X-rays",
  },
  medium: {
    id: "medium",
    buttonText: "Medium",
    doctorVisit: "1 visits to ER or doctor",
    prescription: "2-3 prescription drugs",
    ctScan: "1 CT scans or X-rays",
  },
  high: {
    id: "high",
    buttonText: "High",
    doctorVisit: "1 visits to ER or doctor",
    prescription: "4+ prescription drugs",
    ctScan: "2+ CT scans or X-rays",
  },
};

const dependentsDescription = {
  header:
    "How would you describe your dependents' (if applicable) and your health insurance usage in last 12 months?",
  text: "Please choose the level closest to you past usage.",
};

const footer = {
  disclaimerText:
    "Plan Choice estimates the total annual cost, but is not guarantee costs. Your costs may vary depending upon you medical claims in the year ahead.",
  links: [
    { id: 1, url: "#", displayText: "Privacy Policy" },
    { id: 2, url: "#", displayText: "Terms" },
  ],
  copyrightText: `2021 Evive Health, LLC`,
};

// eslint-disable-next-line import/no-anonymous-default-export
const userData =  {
  navbar,
  navigationList,
  userList,
  radioBtnDescription,
  dependentsDescription,
  footer,
} ;

export default userData;
