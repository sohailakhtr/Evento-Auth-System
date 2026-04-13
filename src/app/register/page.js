"use client";
import { Input, Button } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export default function () {
  const [formType, setFormType] = useState(false);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("This is not an email")
        .required("The email is required"),
      password: Yup.string().required("The password is required"),
    }),
    onSubmit: async (values) => {
      //submit to next auth
      console.log(values);
    },
  });

  return (
    <form className="max-w-sm max-auto " onSubmit={formik.handleSubmit}>
      <h1 className="text-5xl py-10">{formType ? "Register" : "Sign In"}</h1>

      {/* input  */}
      <div className="mb-3">
        <Button color="secondary" type="submit">
          {formType ? "Register " : "Sign In"}
        </Button>
      </div>
      <div className="mb-3">
        <Button
          color="primary"
          variant="light"
          type="submit"
          onClick={() => setFormType(!formType)}
        >
          {formType
            ? "Already Register ? Click here "
            : "Already Sign In ?  Click here"}
        </Button>
      </div>
    </form>
  );
}
