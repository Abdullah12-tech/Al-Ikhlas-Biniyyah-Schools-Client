export const mockDelay = (time = 700) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const mockLogin = async ({ email, role }) => {
  await mockDelay();
  if (!email) {
    throw new Error("Please enter your email address.");
  }
  return {
    id: "USR-001",
    name: "Aisha Bello",
    email,
    role,
    token: "mock-token-123"
  };
};

export const mockFetch = async (data, delay = 500) => {
  await mockDelay(delay);
  return data;
};
