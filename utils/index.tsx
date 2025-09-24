export const addLineBreaks = (text: string): JSX.Element[] => {
  return text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

export const validateInternationalPhoneNumber = (phoneNumber: string) => {
  const regex =
    /^\+?([0-9]{1,3})?[-. ]?(\(?[0-9]{1,4}\)?)?[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,9})$/;
  return regex.test(phoneNumber);
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
