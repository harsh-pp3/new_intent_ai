import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .min(2, "Invalid name")
    .matches(/^[A-Za-z\s]+$/, "Invalid name"),
  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9_.]{3,}@[A-za-z0-9-]{3,}[.]{1}[A-Za-z.]{2,6}$/,
      "Invalid email address"
    ),
  company: Yup.string().trim().required("Company name is required"),
  comments: Yup.string().trim().required("Comments are required"),
});

const ContactForm = () => {
  const handleSubmit = async (data, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const html = `  <div>
    <p>
      <b>Name: </b> ${data.name.trim()}
    </p>
    <p>
      <b>Email: </b> ${data.email.trim()}
    </p>
    <p>
      <b>Company: </b> ${data.company.trim()}
    </p>
    <p>
      <b>Comments: </b> ${data.comments.trim()}
    </p>
  </div>`;

    const newFormData = new FormData();
    newFormData.append("mailTo", "metr@metapercept.com");
    newFormData.append("subject", "New contact details from intent-content.ai");
    newFormData.append("mailBody", html);

    try {
      const response = await fetch(`https://webapi.met-r.io/api/email-server`, {
        method: "POST",
        body: newFormData,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Email sent Successfully.");
        console.log({ status: "success", message: result.message });
        resetForm();
      } else {
        toast.error("Something went wrong.");
        console.log({ status: "error", message: result.message });
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log({ status: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-one__form-box mb-4">
      <Formik
        initialValues={{
          name: "",
          email: "",
          company: "",
          comments: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form id="contact-form2">
            <div className="form-group">
              <Field
                type="text"
                name="name"
                placeholder="Full Name"
                className={`form-control ${
                  touched.name && errors.name ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <Field
                type="email"
                name="email"
                placeholder="Email Address"
                className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <Field
                type="text"
                name="company"
                placeholder="Company Name"
                className={`form-control ${
                  touched.company && errors.company ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="company"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <Field
                type="text"
                name="comments"
                placeholder="Comments"
                className={`form-control ${
                  touched.comments && errors.comments ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="comments"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <div className="button-box pt-0">
                {isSubmitting ? (
                  <button type="button" className="thm-btn contact-one__btn">
                    <div className="spinner-border text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                ) : (
                  <button type="submit" className="thm-btn contact-one__btn">
                    Submit Request
                  </button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
