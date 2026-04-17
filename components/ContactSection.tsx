"use client";

import { useState, useRef } from "react";

type Field = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  multiline?: boolean;
};

const fields: Field[] = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Gerald Wagner",
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  {
    id: "organization",
    label: "Organization",
    type: "text",
    placeholder: "Your company or institution",
    required: false,
  },
  {
    id: "message",
    label: "Message",
    type: "text",
    placeholder: "Tell us what you're working on…",
    required: true,
    multiline: true,
  },
];

type FormData = Record<string, string>;
type Errors = Record<string, string>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name?.trim()) errors.name = "Please enter your name.";
  if (!data.email?.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message?.trim()) errors.message = "Please enter a message.";
  return errors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target;
    const next = { ...formData, [id]: value };
    setFormData(next);
    if (touched[id]) {
      setErrors(validate(next));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id } = e.target;
    setTouched((t) => ({ ...t, [id]: true }));
    setErrors(validate(formData));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched: Record<string, boolean> = {};
    fields.forEach((f) => (allTouched[f.id] = true));
    setTouched(allTouched);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const subject = encodeURIComponent(
      `Culture Quest Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        formData.organization ? `Organization: ${formData.organization}` : "",
        "",
        formData.message,
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:jerry.wagner@culturesinaction.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-3 font-body text-sm text-charcoal placeholder-charcoal/40 outline-none transition-colors duration-200 focus:ring-2 focus:ring-gold/50";
  const inputNormal = "border-mist focus:border-gold";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-red-200";

  return (
    <section id="contact" className="bg-parchment px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — copy */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gold">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-crimson lg:text-5xl">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-charcoal">
              Whether you&apos;re exploring Culture Quest for your team,
              interested in a free pilot, or want to learn more about the
              partnership program — we&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-crimson/10">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B1414"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/50">
                    Email
                  </p>
                  <a
                    href="mailto:jerry.wagner@culturesinaction.com"
                    className="cursor-pointer font-body text-sm font-medium text-crimson transition-colors duration-200 hover:text-gold"
                  >
                    jerry.wagner@culturesinaction.com
                  </a>
                </div>
              </div>

              {/* Name / credentials */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-crimson/10">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B1414"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-charcoal">
                    Gerald (Jerry) Wagner, PhD
                  </p>
                  <p className="font-body text-xs text-charcoal/50">
                    Gallup Senior Scientist &middot; Employee Wellbeing
                    Institute
                  </p>
                  <p className="font-body text-xs text-charcoal/50">
                    Professor &middot; Entrepreneur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-crimson/5 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C4992A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-crimson">
                  Message Ready
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">
                  Your email client should have opened with your message
                  pre-filled. If it didn&apos;t, email Jerry directly at{" "}
                  <a
                    href="mailto:jerry.wagner@culturesinaction.com"
                    className="cursor-pointer text-crimson underline underline-offset-2 hover:text-gold"
                  >
                    jerry.wagner@culturesinaction.com
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      organization: "",
                      message: "",
                    });
                    setTouched({});
                    setErrors({});
                  }}
                  className="mt-8 cursor-pointer rounded-full border border-crimson px-6 py-2.5 font-body text-sm font-medium text-crimson transition-colors duration-200 hover:bg-crimson hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                <h3 className="font-display text-xl font-semibold text-crimson">
                  Send a Message
                </h3>

                {fields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="mb-1.5 block font-body text-sm font-medium text-charcoal"
                    >
                      {field.label}
                      {field.required && (
                        <span
                          className="ml-1 text-gold"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      )}
                    </label>

                    {field.multiline ? (
                      <textarea
                        id={field.id}
                        rows={4}
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required={field.required}
                        aria-describedby={
                          errors[field.id] ? `${field.id}-error` : undefined
                        }
                        className={`${inputBase} resize-none ${
                          errors[field.id] && touched[field.id]
                            ? inputError
                            : inputNormal
                        }`}
                      />
                    ) : (
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required={field.required}
                        aria-describedby={
                          errors[field.id] ? `${field.id}-error` : undefined
                        }
                        className={`${inputBase} ${
                          errors[field.id] && touched[field.id]
                            ? inputError
                            : inputNormal
                        }`}
                      />
                    )}

                    {errors[field.id] && touched[field.id] && (
                      <p
                        id={`${field.id}-error`}
                        role="alert"
                        className="mt-1.5 font-body text-xs text-red-600"
                      >
                        {errors[field.id]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="mt-2 w-full cursor-pointer rounded-full bg-crimson px-6 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-crimson/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Send Message
                </button>

                <p className="text-center font-body text-xs text-charcoal/40">
                  Your message will open in your default email client.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
