import bcrypt from "bcryptjs";

// UI helper (Formik errors)
export const errorHelper = (formik, value) => ({
  isInvalid: formik.errors[value] && formik.touched[value] ? true : false,

  errorMessage:
    formik.errors[value] && formik.touched[value] ? formik.errors[value] : null,
});

// REGISTER: password hash
export const passwordHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// 🔥 SIGNIN: password check (THIS WAS MISSING)
export const passwordCheck = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
