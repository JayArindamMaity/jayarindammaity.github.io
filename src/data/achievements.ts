const featured_cert = [
  {
    name: "",
    issuedate: "",
  },
];

// ------------------ this is the data for all of the certificates that I have
// {
//     name : "",
//     organisation: "",
//     issuedate : "",
//     certlink: "",
// },

const all_certificates = [
  {
    name: "Inspiring and Motivating Individuals",
    organisation: "University of Michigan",
    issuedate: "November 2023",
    certlink: "https://coursera.org/share/24ad3aac1d06975eb6ce32f29c59d240",
  },
  {
    name: "Leading Teams",
    organisation: "University of Michigan",
    issuedate: "November 2023",
    certlink: "https://coursera.org/share/5fda755c0763d6c002145e7dd755f4f7",
  },
  {
    name: "Influencing People",
    organisation: "University of Michigan",
    issuedate: "November 2023",
    certlink: "https://coursera.org/share/ed452eebb3de2257be55ea0f91e9636f",
  },
  {
    name: "Managing Talent",
    organisation: "University of Michigan",
    issuedate: "November 2023",
    certlink: "https://coursera.org/share/bdba16a772ec89ea3e91a1d7fb139b12",
  },
  {
    name: "Leading People and Teams Capstone",
    organisation: "University of Michigan",
    issuedate: "November 2023",
    certlink: "https://coursera.org/share/78c6782feea10cdbe97a4b25249a1a83",
  },
  {
    name: "Cloud Computing Foundations",
    organisation: "IBM",
    issuedate: "Feb 2024",
    certlink: "https://coursera.org/share/0591eb483aa3dcaec61790e443a68c7b",
  },
  {
    name: "Machine Learning Capstone",
    organisation: "IBM",
    issuedate: "March 2024",
    certlink: "https://coursera.org/share/f6812b3069a0cde0a2478d476b9fe7d4",
  },
  {
    name: "Introduction to DevOps",
    organisation: "IBM",
    issuedate: "April 2024",
    certlink: "https://coursera.org/share/700b7e3baf05f90dd31c579058bc7c31",
  },
  {
    name: "Introduction to Cloud Computing",
    organisation: "IBM",
    issuedate: "April 2024",
    certlink: "https://coursera.org/share/1ad2a449d5769e77201a4cd265388aae",
  },
  {
    name: "Cloud Data Engineering",
    organisation: "Duke University",
    issuedate: "May 2024",
    certlink: "https://coursera.org/share/c651d860c84f2f61d1987e805bfaeb90",
  },
  {
    name: "Cloud Virtualization, Containers and APIs",
    organisation: "Duke University",
    issuedate: "May 2024",
    certlink: "https://coursera.org/share/f0ba0e12718a099937376144506bb8b3",
  },
  {
    name: "Introduction to Social Media Marketing",
    organisation: "Meta",
    issuedate: "May 2024",
    certlink: "https://coursera.org/share/17988b5e1ac7d766639015676b2775da",
  },
  {
    name: "Advertising with Meta",
    organisation: "Meta",
    issuedate: "May 2024",
    certlink: "https://coursera.org/share/c21278a5358b4845b248b8d2342ccc0c",
  },
  {
    name: "Social Media Management",
    organisation: "Meta",
    issuedate: "May 2024",
    certlink: "https://coursera.org/share/ae8ec69f4637b1bb5e9f3ee43ad1b322",
  },
  {
    name: "Measure and Optimize Social Media Marketing Campaigns",
    organisation: "Meta",
    issuedate: "May 2024",
    certlink: "https://coursera.org/share/9276e7dd4d2b679da98f2d0a5aabe9b9",
  },
  {
    name: "Fundamentals of Social Media Advertising",
    organisation: "Meta",
    issuedate: "May 2024",
    certlink: "https://coursera.org/share/6ad02003fdc001c484c2bbdb4179c377",
  },
  {
    name: "Introduction to Artificial Intelligence (AI)",
    organisation: "IBM",
    issuedate: "October 2024",
    certlink: "https://coursera.org/share/cc15504f6edd10808906caed16b3db94",
  },
  {
    name: "Generative AI: Introduction and Applications",
    organisation: "IBM",
    issuedate: "October 2024",
    certlink: "https://coursera.org/share/8fe0a1ccd829e933c3371d6206a8d960",
  },
  {
    name: "Building AI Powered Chatbots Without Programming",
    organisation: "IBM",
    issuedate: "October 2024",
    certlink: "https://coursera.org/share/abb1ff9b3960763cba11551ee2a86163",
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    organisation: "IBM",
    issuedate: "October 2024",
    certlink: "https://coursera.org/share/2620e6d9bc6bcc27fa0c8a76d844a5be",
  },
  {
    name: "Supervised Machine Learning: Regression",
    organisation: "IBM",
    issuedate: "March 2025",
    certlink: "https://coursera.org/share/4c0b1660405a30a7a5a13d0681370d18",
  },
  {
    name: "Exploratory Data Analysis for Machine Learning",
    organisation: "IBM",
    issuedate: "March 2025",
    certlink: "https://coursera.org/share/815a90773b5c23a1173cdc7a75a5ddd3",
  },
  {
    name: "Supervised Machine Learning: Classification",
    organisation: "IBM",
    issuedate: "March 2025",
    certlink: "https://coursera.org/share/ae279b1807091808775a55138a297bd3",
  },
  {
    name: "Deep Learning and Reinforcement Learning",
    organisation: "IBM",
    issuedate: "March 2025",
    certlink: "https://coursera.org/share/12510298d790b622f2d2be6231810697",
  },
  {
    name: " Unsupervised Machine Learning",
    organisation: "IBM",
    issuedate: "March 2025",
    certlink: "https://coursera.org/share/425d6521d7d49871dbef88c59d268fd1",
  },
  {
    name: "The Art of the Job Interview",
    organisation: "Big Interview",
    issuedate: "March 2025",
    certlink: "https://coursera.org/share/df04ad686419ac0cf6fd5b4d65827017",
  },
  {
    name: "Coding Interview Preparation",
    organisation: "Meta",
    issuedate: "May 2025",
    certlink: "https://coursera.org/share/8bcdb84ef919eddab942b2034fdc0a42",
  },
  {
    name: "Python (Basic) Certificate",
    organisation: "Hackerrank",
    issuedate: "September 2023",
    certlink: "https://www.hackerrank.com/certificates/iframe/64016d32f6e2",
  },
  {
    name: "Problem Solving (Basic) Certificate",
    organisation: "Hackerrank",
    issuedate: "September 2023",
    certlink: "https://www.hackerrank.com/certificates/iframe/b4f4509852f3",
  },
  // {
  //     name : "",
  //     organisation: "",
  //     issuedate : "",
  //     certlink: "",
  // }
];

export { all_certificates, featured_cert };
