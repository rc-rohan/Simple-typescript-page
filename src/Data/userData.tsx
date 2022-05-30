export const navigationList = [
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

export const users = [
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

export const radioBtnDescription = {
  low: {
    doctorVisit: "1 visits to ER or doctor",
    prescription: "1 prescription drug",
    ctScan: "0 CT scans or X-rays",
  },
  medium: {
    doctorVisit: "1 visits to ER or doctor",
    prescription: "2-3 prescription drugs",
    ctScan: "1 CT scans or X-rays",
  },
  high: {
    doctorVisit: "1 visits to ER or doctor",
    prescription: "4+ prescription drugs",
    ctScan: "2+ CT scans or X-rays",
  },
};

export const dependentsDescription = {
  header:
    "How would you describe your dependents' (if applicable) and your health insurance usage in last 12 months?",
  text: "Please choose the level closest to you past usage.",
};

export const footer = {
  disclaimerText:
    "Plan Choice estimates the total annual cost, but is not guarantee costs. Your costs may vary depending upon you medical claims in the year ahead.",
  links: [
    { id: 1, url: "#", displayText: "Privacy Policy" },
    { id: 2, url: "#", displayText: "Terms" },
  ],
  copyrightText: `2021 Evive Health, LLC`,
};
