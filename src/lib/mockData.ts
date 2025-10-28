export const mockUser = {
  name: "Parth Pingle",
  email: "demo@ecotrack.com",
  password: "12345"
};

export const mockActivities = [
  {
    id: 1,
    type: "Car Travel",
    icon: "🚗",
    distance: 20,
    mileage: 15,
    fuel: "Petrol",
    emission: 3.08,
    date: "2025-01-15"
  },
  {
    id: 2,
    type: "Electricity Usage",
    icon: "⚡",
    units: 50,
    emission: 25,
    date: "2025-01-14"
  }
];

export const activityTypes = [
  { value: "car", label: "🚗 Car Travel", icon: "🚗" },
  { value: "bike", label: "🚲 Bike Ride", icon: "🚲" },
  { value: "electricity", label: "⚡ Electricity Usage", icon: "⚡" },
  { value: "food", label: "🍔 Food Consumption", icon: "🍔" },
  { value: "flight", label: "✈️ Flight Travel", icon: "✈️" }
];

export const emissionFactors = {
  petrol: 2.31,
  diesel: 2.68,
  electricity: 0.5,
  flight: 0.255
};

export const mockGoals = [
  {
    id: 1,
    target: "Reduce 10 kg CO₂ this month",
    targetValue: 10,
    progress: 6.5,
    status: "Active"
  },
  {
    id: 2,
    target: "Use car less than 50 km this week",
    targetValue: 50,
    progress: 23,
    status: "Active"
  }
];

export const mockRecommendations = [
  {
    id: 1,
    text: "🚶 Try walking for short distances — save 2.1 kg CO₂/week",
    icon: "🚶",
    impact: "2.1 kg/week"
  },
  {
    id: 2,
    text: "🌞 Shift to solar charging — reduce 4 kg CO₂/month",
    icon: "🌞",
    impact: "4 kg/month"
  },
  {
    id: 3,
    text: "🚌 Use public transport twice a week — save 3.5 kg CO₂",
    icon: "🚌",
    impact: "3.5 kg/week"
  },
  {
    id: 4,
    text: "🥗 Try plant-based meals 3x/week — reduce 2 kg CO₂",
    icon: "🥗",
    impact: "2 kg/week"
  }
];

export const mockRewards = [
  {
    id: 1,
    name: "🌟 Eco Beginner",
    description: "Logged your first 5 green activities!",
    unlocked: true
  },
  {
    id: 2,
    name: "🥇 Green Champion",
    description: "Reduced 50 kg CO₂ in total",
    unlocked: false
  },
  {
    id: 3,
    name: "🌱 Week Warrior",
    description: "Met your weekly goal 4 times",
    unlocked: true
  },
  {
    id: 4,
    name: "🚴 Eco Commuter",
    description: "Used bike/walking for 20+ trips",
    unlocked: false
  }
];

export const chatHistory = [
  {
    sender: "bot" as const,
    message: "Hi! I'm EcoBot 🌿. How can I help you reduce your carbon footprint today?",
    timestamp: new Date().toISOString()
  }
];
