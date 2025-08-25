// Day mapping based on dayjs().format('d') + 1: 1=Sun, 2=Mon, 3=Tue, 4=Wed, 5=Thu, 6=Fri, 7=Sat
export const HOURS = {
  1: { lunch: [], dinner: [] }, // Sunday (Closed)
  2: { lunch: [], dinner: [] }, // Monday (Closed)
  3: { lunch: ["12:15", "15:00"], dinner: [] }, // Tuesday
  4: { lunch: ["12:15", "15:00"], dinner: [] }, // Wednesday
  5: { lunch: ["12:15", "15:00"], dinner: ["19:30", "22:00"] }, // Thursday
  6: { lunch: ["12:15", "15:00"], dinner: ["19:30", "22:00"] }, // Friday
  7: { lunch: ["12:15", "15:00"], dinner: ["19:30", "22:00"] }, // Saturday
};
