"use client";
import { useForm } from "react-hook-form";
import { successMessage, failedMessage } from "@/js/toastNotification";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          successMessage(
            "Thank you for reaching out to me, and I look forward to assisting you!"
          );
        }
      });
      reset(); // Reset the form
    } catch (error) {
      failedMessage("Failed to send email. Please try again later.");
    }
  };

  return (
    <section>
      <div className="text-slate">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {/* Name */}
            <span>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Full Name *"
                className="w-full text-white border border-transparent focus:border-orange-500 p-2 rounded bg-darkblue placeholder-slate placeholder-opacity-60 h-14"
              />
              {errors.name && (
                <span className="text-error">This field is required</span>
              )}
            </span>

            {/* Email */}
            <span>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email *"
                className="w-full text-white border border-transparent focus:border-orange-500 p-2 rounded bg-darkblue placeholder-slate placeholder-opacity-60 h-14"
              />
              {errors.email && (
                <span className="text-error">
                  Please enter a valid email address
                </span>
              )}
            </span>
            {/* Phone */}
            <span>
              <input
                type="tel"
                {...register("phone")}
                placeholder="Phone number"
                className="w-full text-white border border-transparent focus:border-orange-500 p-2 rounded bg-darkblue placeholder-slate placeholder-opacity-60 h-14"
              />
            </span>

            {/* Company */}
            <span>
              <input
                type="text"
                {...register("company")}
                placeholder="Company"
                className="w-full text-white border border-transparent focus:border-orange-500 p-2 rounded bg-darkblue placeholder-slate placeholder-opacity-60 h-14"
              />
            </span>
          </div>
          {/* Message */}
          <div className="mb-5">
            <p>
              <textarea
                rows={5}
                {...register("message", { required: true })}
                placeholder="How can I help you propel your business forward? *"
                className="w-full text-white border border-transparent focus:border-orange-500 p-2 rounded bg-darkblue placeholder-slate placeholder-opacity-60 "
              />
            </p>
            {errors.message && (
              <span className="text-error">This field is required</span>
            )}
          </div>

          <div className="mb-7">
            <p>You are looking for:</p>
            <div className="mt-3 grid lg:grid-cols-2 gap-5">
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

          <div>
            <p>Your budget?</p>
            <div className="mt-3 border w-full mb-2">
              <select
                {...register("budget", { required: true })}
                className="w-full p-2 bg-transparen"
              >
                <option selected disabled>
                  Select your budget (USD)
                </option>
                <option value="USD $1,500 - $5,000">USD $1,000 - $5,000</option>
                <option value="USD $5,001 - $10,000">
                  USD $5,001 - $10,000
                </option>
                <option value="USD $10,001 and up">USD $10,001 and up</option>
              </select>
            </div>
              {errors.budget && (
                <span className="text-error">This field is required</span>
              )}
          </div>

          <button className="w-full bg-orange-500 text-xs md:text-sm lg:text-lg mt-5 text-blue hover:text-white hover:-translate-y-1 transition duration-500 px-3 py-2 uppercase font-semibold">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
