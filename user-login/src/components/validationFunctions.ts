export const validateName = (value: string) => (!value) && "Name is required";

export const validateEmail = (value: string) => {
  const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!value) return "Email is required to log in or reset password"
  else if(!validEmail.test(value)) return "Please enter a valid email address"
}

export const validatePassword = (value: string) => {
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
  if (!value || !validPassword.test(value)) return "Password must be a combination of eight letters, numbers, special characters (!, @, $)."
}

export const validatePasswordConfirmation = (value: string, password: string) => (value !== password) && "Passwords do not match."