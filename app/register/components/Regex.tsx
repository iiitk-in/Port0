export function emailRegex(email: string) {
  if (email === "") {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@iiitkottayam.ac.in$/;
  return emailRegex.test(email);
}

export function rollNumberRegex(rollNumber: string) {
  if (rollNumber === "") {
    return false;
  }
  const rollNumberRegex = /^[0-9]{4}[A-Z]{3}[0-9]{4}$/;
  return rollNumberRegex.test(rollNumber);
}

export function phoneRegex(phone: string) {
  if (phone === "") {
    return false;
  }
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

export function lmsPasswordRegex(lmsPassword: string) {
  if (lmsPassword === "") {
    return false;
  }
  const lmsPasswordRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{4}$/;
  return lmsPasswordRegex.test(lmsPassword);
}

export function port0UsernameRegex(port0Username: string) {
  if (port0Username === "") {
    return false;
  }
  const port0UsernameRegex = /^[a-zA-Z0-9._-]+$/;
  return port0UsernameRegex.test(port0Username);
}
