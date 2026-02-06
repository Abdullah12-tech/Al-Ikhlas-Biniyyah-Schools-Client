export const mockSchoolData = {
  school: {
    name: "Al-Ikhlas Biniyyah Schools",
    address: "24 Unity Crescent, Abuja",
    phone: "+234 812 000 1122",
    email: "info@alikhlas.edu.ng",
    session: "2024/2025",
    term: "First Term"
  },
  students: [
    {
      id: "STU-1001",
      name: "Amina Yusuf",
      class: "JSS 2",
      arm: "Blue",
      status: "Active",
      guardian: "Hassan Yusuf",
      attendance: 95,
      feesPaid: 180000,
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "STU-1002",
      name: "Samuel Okafor",
      class: "SSS 1",
      arm: "Gold",
      status: "Active",
      guardian: "Patricia Okafor",
      attendance: 90,
      feesPaid: 150000,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "STU-1003",
      name: "Zainab Musa",
      class: "Primary 5",
      arm: "Green",
      status: "On hold",
      guardian: "Musa Bello",
      attendance: 88,
      feesPaid: 120000,
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
    }
  ],
  staff: [
    {
      id: "STF-001",
      name: "Mr. Chinedu Arinze",
      role: "Math Teacher",
      subjects: ["Mathematics", "Further Math"],
      classes: ["SSS 1", "SSS 2"],
      salary: 320000
    },
    {
      id: "STF-002",
      name: "Mrs. Fatima Sule",
      role: "Head Teacher",
      subjects: ["English"],
      classes: ["JSS 3"],
      salary: 400000
    }
  ],
  classes: [
    { id: "CLS-01", name: "JSS 2", arm: "Blue", capacity: 35, enrolled: 30 },
    { id: "CLS-02", name: "SSS 1", arm: "Gold", capacity: 40, enrolled: 38 }
  ],
  subjects: [
    { id: "SUB-01", name: "Mathematics", teachers: ["Mr. Chinedu Arinze"] },
    { id: "SUB-02", name: "English", teachers: ["Mrs. Fatima Sule"] }
  ],
  announcements: [
    {
      id: "ANN-01",
      title: "Mid-term break starts Friday",
      audience: "All Parents",
      date: "2024-10-12",
      message: "Please ensure students return on Monday."
    },
    {
      id: "ANN-02",
      title: "Staff development day",
      audience: "Teachers",
      date: "2024-10-08",
      message: "Workshops begin by 9am in the library."
    }
  ]
};

export const chartData = {
  attendanceTrend: [90, 92, 88, 94, 96, 93, 95],
  paymentTrend: [120, 140, 160, 155, 170, 180, 190],
  performanceTrend: [70, 72, 74, 76, 78, 81, 83]
};
