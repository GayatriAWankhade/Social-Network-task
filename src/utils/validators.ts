export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password: string): boolean => {
  // Minimum 6 characters, at least 1 number and 1 letter
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return re.test(password);
};

export const validateUsername = (username: string): boolean => {
  // Alphanumeric and underscores, 3-16 chars
  const re = /^[a-zA-Z0-9_]{3,16}$/;
  return re.test(username);
};
