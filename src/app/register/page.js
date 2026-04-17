"use client";

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [formType, setFormType] = useState(false); // false = Signin, true = Register

  const formik = useFormik({
    initialValues: { email: "", password: "" },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("This is not an email")
        .required("The email is required"),
      password: Yup.string().required("The password is required"),
    }),

    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const submitForm = async (values) => {
    if (formType) {
      // 🔥 REGISTER
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.error);
        } else {
          alert("User Registered Successfully");
          console.log(data);
        }
      } catch (err) {
        console.log("Register Error:", err);
      }
    } else {
      // 🔥 SIGN IN (NEXTAUTH)
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        alert("Invalid email or password");
      } else {
        alert("Login Successful");
        window.location.href = "/dashboard";
      }
    }
  };

  return (
    <form className="max-w-sm mx-auto m-5" onSubmit={formik.handleSubmit}>
      <h1 className="text-4xl py-6 text-center">
        {formType ? "Register" : "Sign In"}
      </h1>

      {/* Email */}
      <div className="mb-5 w-full">
        <input
          type="email"
          placeholder="Email"
          className={`w-full px-3 py-2 border rounded ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          }`}
          {...formik.getFieldProps("email")}
        />

        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-5 w-full">
        <input
          type="password"
          placeholder="Password"
          className={`w-full px-3 py-2 border rounded ${
            formik.touched.password && formik.errors.password
              ? "border-red-500"
              : "border-gray-300"
          }`}
          {...formik.getFieldProps("password")}
        />

        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}
      </div>

      {/* Submit */}
      <div className="mb-3">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded"
        >
          {formType ? "Register" : "Sign In"}
        </button>
      </div>

      {/* Toggle */}
      <div className="mb-3">
        <button
          type="button"
          onClick={() => setFormType(!formType)}
          className="w-full bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 border border-blue-500 rounded"
        >
          {formType
            ? "Already Registered? Click here"
            : "Already have an account? Click here"}
        </button>
      </div>
    </form>
  );
}
