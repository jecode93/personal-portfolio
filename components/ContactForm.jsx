"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InfoCard from "./InfoCard";
import { infos } from "@/js/data/contact/info";
import { Resend } from "resend";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const resend = new Resend(process.env.API_KEY)
      
      // Email content
      const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_RECIPIENT,
        subject: "New Contact Form Submission | Jean Emmanuel Cadet",
        html: `
        <p>Name: ${data.name}</p>
        <p>Company: ${data.company}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Message: ${data.message}</p>
        <p>Service need: ${data.reason.join(", ")}</p>
        <p>Budget: ${data.budget}</p>
        `,
      };

      // Send email
      await resend.emails.send(mailOptions);

      setSuccessMessage(
        "Thank you for reaching out to me, and I look forward to assisting you!"
      );
      reset();
    } catch (error) {
      console.log(error);
      setSuccessMessage(
        "Error sending email: Try again later!"
      );
    }
  };

  return (
    <section>
      <div className="bg-white p-10 text-blue">
        <div className="mb-10">
          <h2 className="tracking-wide text-justify mb-5">
            <span className="font-bold">
              Email, call, or complete the form{" "}
            </span>
            to learn how I can solve your problem and shape your future.
          </h2>
          <div>
            {infos.map((info) => (
              <InfoCard key={info.id} content={info} />
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-5">
            <p className="border-b mb-2 p-2">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name *"
                className="w-full"
              />
            </p>
            {errors.name && (
              <span className="text-error">This field is required</span>
            )}
          </div>

          {/* Company */}
          <div className="mb-5">
            <p className="border-b w-full p-2 mb-2">
              <input
                type="text"
                {...register("company")}
                placeholder="Company"
                className="w-full"
              />
            </p>
          </div>

          {/* Email */}
          <div className="mb-5">
            <p className="border-b w-full p-2 mb-2">
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email *"
                className="w-full"
              />
            </p>
            {errors.email && (
              <span className="text-error">
                Please enter a valid email address
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="mb-12">
            <p className="border-b w-full p-2 mb-2">
              <input
                type="tel"
                {...register("phone")}
                placeholder="Phone number"
                className="w-full"
              />
            </p>
          </div>

          {/* Message */}
          <div className="mb-12">
            <p className="border border-b w-full p-2 mb-2">
              <textarea
                rows={5}
                {...register("message", { required: true })}
                placeholder="How can I help you propel your business forward? *"
                className="w-full"
              />
            </p>
            {errors.message && (
              <span className="text-error">This field is required</span>
            )}
          </div>

          <div className="mb-12">
            <label>You are looking for:</label>
            <div className="mt-3 grid md:grid-cols-2 gap-5">
              <label className="px-5 py-2 border rounded-full">
                <input
                  type="checkbox"
                  value="Web development"
                  {...register("reason")}
                  className="mr-3"
                />
                Web development
              </label>
              <label className="px-5 py-2 border rounded-full">
                <input
                  type="checkbox"
                  value="API development"
                  {...register("reason")}
                  className="mr-3"
                />
                API development
              </label>
              <label className="px-5 py-2 border rounded-full">
                <input
                  type="checkbox"
                  value="Database design"
                  {...register("reason")}
                  className="mr-3"
                />
                Database design
              </label>
            </div>
          </div>

          <div className="border w-full p-2 mb-5">
            <p>
              <select
                {...register("budget", { required: true })}
                className="w-full"
              >
                <option>Your budget (USD):</option>
                <option value="USD $1,500 - $5,000">USD $1,500 - $5,000</option>
                <option value="USD $5,001 - $10,000">
                  USD $5,001 - $10,000
                </option>
                <option value="USD $10,001 and up">USD $10,001 and up</option>
              </select>
            </p>
          </div>

          <button className="w-fit text-xs md:text-sm mt-5 mb-5 font-medium border border-blue text-blue hover:text-white px-3 py-2 uppercase btn41-44 btn-42">
            Submit
          </button>

          {successMessage && <p className="text-[green]">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
