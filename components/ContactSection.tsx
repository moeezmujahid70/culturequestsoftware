"use client";

import { useEffect, useState } from "react";

type Field = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  multiline?: boolean;
};

type TopicValue =
  | ""
  | "general"
  | "pricing"
  | "inner_circle"
  | "universities"
  | "partners"
  | "speaking"
  | "kickoff"
  | "book_demo"
  | "free_pilot";

const fieldMap: Record<string, Field> = {
  name: {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Gerald Wagner",
    required: true,
  },
  email: {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  organization: {
    id: "organization",
    label: "Organization",
    type: "text",
    placeholder: "Your company or institution",
    required: false,
  },
  position: {
    id: "position",
    label: "Position",
    type: "text",
    placeholder: "Your role or title",
    required: false,
  },
  message: {
    id: "message",
    label: "Message",
    type: "text",
    placeholder: "Tell us what you're working on…",
    required: true,
    multiline: true,
  },
};

const topicConfigs: Record<
  Exclude<TopicValue, ""> | "default",
  {
    title: string;
    intro: string;
    submitLabel: string;
    inquiryLabel: string;
    fields: Field[];
  }
> = {
  default: {
    title: "Send a Message",
    intro:
      "Choose the topic below and share a bit about what you're working on so we can route your inquiry appropriately.",
    submitLabel: "Send Message",
    inquiryLabel: "General Contact",
    fields: [
      fieldMap.name,
      fieldMap.email,
      fieldMap.organization,
      fieldMap.message,
    ],
  },
  general: {
    title: "Send a Message",
    intro:
      "Choose the topic below and share a bit about what you're working on so we can route your inquiry appropriately.",
    submitLabel: "Send Message",
    inquiryLabel: "General Inquiry",
    fields: [
      fieldMap.name,
      fieldMap.email,
      fieldMap.organization,
      fieldMap.message,
    ],
  },
  pricing: {
    title: "Let's Talk",
    intro:
      "Thanks for your interest in Culture Quest. We will be back in touch soon.",
    submitLabel: "Let's Talk",
    inquiryLabel: "Pricing",
    fields: [
      fieldMap.name,
      fieldMap.email,
      { ...fieldMap.organization, required: true },
      fieldMap.position,
      {
        ...fieldMap.message,
        required: false,
        label: "Message",
        placeholder: "Anything else you want us to know?",
      },
    ],
  },
  inner_circle: {
    title: "Inner Circle",
    intro: "Thanks for your interest in the Inner Circle.",
    submitLabel: "Send Inquiry",
    inquiryLabel: "Inner Circle",
    fields: [
      fieldMap.name,
      fieldMap.email,
      { ...fieldMap.organization, required: true },
      fieldMap.position,
      {
        ...fieldMap.message,
        required: false,
        label: "Message",
        placeholder: "Anything else you want us to know?",
      },
    ],
  },
  speaking: {
    title: "Ask About Speaking",
    intro:
      "Thanks for your interest in having a speaker. We will be in touch soon.",
    submitLabel: "Send Inquiry",
    inquiryLabel: "Speaking",
    fields: [
      fieldMap.name,
      fieldMap.email,
      { ...fieldMap.organization, required: true },
      {
        ...fieldMap.message,
        label: "Describe Need",
        placeholder: "Tell us about the event, audience, and what you need.",
      },
    ],
  },
  partners: {
    title: "Get in Touch",
    intro:
      "Thanks for your possible interest in consulting support for Culture Quest. Your inquiry will be totally private. We will be in touch soon.",
    submitLabel: "Send Inquiry",
    inquiryLabel: "Partners",
    fields: [
      fieldMap.name,
      fieldMap.email,
      { ...fieldMap.organization, required: true },
      {
        ...fieldMap.message,
        label: "Describe Possible Interest",
        placeholder:
          "Tell us about your consulting background and possible interest.",
      },
    ],
  },
  universities: {
    title: "Discuss a Partnership",
    intro:
      "Thanks for you interest in the University Support Program. We would love to work with you and will be in touch soon.",
    submitLabel: "Discuss a Partnership",
    inquiryLabel: "University Support Program",
    fields: [
      fieldMap.name,
      fieldMap.email,
      { ...fieldMap.organization, required: true },
      fieldMap.position,
      {
        ...fieldMap.message,
        required: false,
        label: "Message",
        placeholder: "Anything else you want us to know?",
      },
    ],
  },
  kickoff: {
    title: "Design Kickoff",
    intro:
      "Thanks for your interest in a live kickoff session. We will be in touch soon.",
    submitLabel: "Send Inquiry",
    inquiryLabel: "Design Kickoff",
    fields: [
      fieldMap.name,
      fieldMap.email,
      { ...fieldMap.organization, required: true },
      {
        ...fieldMap.message,
        label: "Describe Need",
        placeholder: "Tell us about your team and the kickoff you have in mind.",
      },
    ],
  },
  book_demo: {
    title: "Book a Demo",
    intro:
      "Thanks for your inquiry. We’d love to do a demo with you and will be in touch soon.",
    submitLabel: "Book a Demo",
    inquiryLabel: "Book a Demo",
    fields: [
      fieldMap.name,
      fieldMap.email,
      { ...fieldMap.organization, required: true },
      fieldMap.position,
      {
        ...fieldMap.message,
        required: false,
        label: "Message",
        placeholder: "Anything else you want us to know?",
      },
    ],
  },
  free_pilot: {
    title: "Free Pilot",
    intro:
      "Thanks for you interest in a pilot of Culture Quest. We would love to do that and will be in touch soon.",
    submitLabel: "Start Free Pilot",
    inquiryLabel: "Free Pilot",
    fields: [
      fieldMap.name,
      fieldMap.email,
      { ...fieldMap.organization, required: true },
      fieldMap.position,
      {
        ...fieldMap.message,
        required: false,
        label: "Message",
        placeholder: "Anything else you want us to know?",
      },
    ],
  },
};

const topicOptions: Array<{ value: TopicValue; label: string }> = [
  { value: "general", label: "General Inquiry" },
  { value: "book_demo", label: "Book a Demo" },
  { value: "free_pilot", label: "Free Pilot" },
  { value: "pricing", label: "Pricing" },
  { value: "universities", label: "University Support Program" },
  { value: "inner_circle", label: "Inner Circle" },
  { value: "partners", label: "Partners" },
  { value: "speaking", label: "Speaking" },
  { value: "kickoff", label: "Design Kickoff" },
];

const defaultFormData = {
  topic: "",
  name: "",
  email: "",
  organization: "",
  position: "",
  message: "",
};

type FormData = Record<string, string>;
type Errors = Record<string, string>;

function validate(data: FormData, fields: Field[]): Errors {
  const errors: Errors = {};
  if (!data.topic?.trim()) {
    errors.topic = "Please select a topic.";
  }

  fields.forEach((field) => {
    if (field.required && !data[field.id]?.trim()) {
      errors[field.id] = `Please enter your ${field.label.toLowerCase()}.`;
    }
  });

  if (fields.some((field) => field.id === "email")) {
    if (!data.email?.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Please enter a valid email address.";
    }
  }

  return errors;
}

export default function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState<TopicValue>("");
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const activeConfig =
    selectedTopic === ""
      ? topicConfigs.default
      : topicConfigs[selectedTopic as Exclude<TopicValue, "">];
  const activeFields = activeConfig.fields;

  useEffect(() => {
    function resetForContext(nextTopic: TopicValue) {
      setSelectedTopic(nextTopic);
      setSubmitted(false);
      setErrors({});
      setTouched({});
      setFormData({ ...defaultFormData, topic: nextTopic });
    }

    function handleDocumentClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-inquiry-context]");
      if (trigger) {
        const nextTopic = trigger.dataset.inquiryContext as TopicValue;
        if (nextTopic === "" || nextTopic in topicConfigs) {
          resetForContext(nextTopic);
          return;
        }
      }

      const contactLink = target?.closest<HTMLAnchorElement>('a[href="#contact"]');
      if (contactLink && !contactLink.dataset.inquiryContext) {
        resetForContext("");
      }
    }

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { id, value } = e.target;
    if (id === "topic") {
      const nextTopic = value as TopicValue;
      setSelectedTopic(nextTopic);
      const next = { ...formData, topic: nextTopic };
      setFormData(next);
      setSubmitted(false);
      if (touched[id]) {
        const nextConfig =
          nextTopic === ""
            ? topicConfigs.default
            : topicConfigs[nextTopic as Exclude<TopicValue, "">];
        setErrors(validate(next, nextConfig.fields));
      }
      return;
    }

    const next = { ...formData, [id]: value };
    setFormData(next);
    if (touched[id]) {
      setErrors(validate(next, activeFields));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { id } = e.target;
    setTouched((t) => ({ ...t, [id]: true }));
    setErrors(validate(formData, activeFields));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched: Record<string, boolean> = { topic: true };
    activeFields.forEach((f) => (allTouched[f.id] = true));
    setTouched(allTouched);
    const errs = validate(formData, activeFields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const inquiryLabel = activeConfig.inquiryLabel;
    const renderedFieldIds = new Set(activeFields.map((field) => field.id));
    const subject = encodeURIComponent(
      `${inquiryLabel} Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      [
        `Inquiry Type: ${inquiryLabel}`,
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        renderedFieldIds.has("organization") && formData.organization
          ? `Organization: ${formData.organization}`
          : "",
        renderedFieldIds.has("position") && formData.position
          ? `Position: ${formData.position}`
          : "",
        renderedFieldIds.has("message") && formData.message
          ? `${activeFields.find((field) => field.id === "message")?.label}: ${formData.message}`
          : "",
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:jerry.wagner@culturesinaction.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-3 font-body text-sm text-charcoal placeholder-charcoal/40 outline-none transition-colors duration-200 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/50";
  const inputNormal = "border-mist";
  const inputError =
    "border-red-400 focus-visible:border-red-400 focus-visible:ring-red-200";

  return (
    <section id="contact" className="bg-parchment px-4 py-12 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left, copy */}
          <div className="text-center lg:text-left">
            <p className="font-body text-xs tracking-widest uppercase text-gold">
              Contact
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-tight text-crimson sm:text-3xl lg:text-5xl">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mt-6 font-body text-[15px] leading-relaxed text-charcoal sm:text-base">
              Whether you&apos;re exploring Culture Quest for your team,
              interested in a free pilot, or want to learn more about the
              partnership program, we&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {/* Email */}
              <div className="mx-auto flex w-full max-w-[22rem] items-start justify-start gap-3 text-left lg:mx-0 lg:max-w-none lg:gap-4">
                <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-crimson/10">
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
                <div className="min-w-0 flex-1">
                  <p className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/50">
                    Email
                  </p>
                  <a
                    href="mailto:jerry.wagner@culturesinaction.com"
                    className="cursor-pointer break-words font-body text-[0.98rem] leading-relaxed text-crimson transition-colors duration-200 hover:text-gold sm:text-sm"
                  >
                    jerry.wagner@culturesinaction.com
                  </a>
                </div>
              </div>

              {/* Name / credentials */}
              <div className="mx-auto flex w-full max-w-[22rem] items-start justify-start gap-3 text-left lg:mx-0 lg:max-w-none lg:gap-4">
                <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-crimson/10">
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
                <div className="min-w-0 flex-1">
                  <p className="font-body text-[0.98rem] font-medium leading-snug text-charcoal sm:text-sm">
                    Gerald (Jerry) Wagner, PhD
                  </p>
                  <p className="font-body text-[0.95rem] leading-relaxed text-charcoal/50 sm:text-xs">
                    Gallup Senior Scientist &middot; Employee Wellbeing
                    Institute
                  </p>
                  <p className="font-body text-[0.95rem] leading-relaxed text-charcoal/50 sm:text-xs">
                    Professor &middot; Entrepreneur
                  </p>
                </div>
              </div>
            </div>

            {/* Cultures in Action logo */}
            <div className="mt-12 sm:mt-14">
              <img
                src="/assets/brand/guidelines/co1.png"
                alt="Cultures in Action"
                className="mx-auto w-full max-w-[240px] sm:max-w-[300px] lg:mx-0"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>

          {/* Right, form */}
          <div className="rounded-2xl bg-white p-4 shadow-md shadow-crimson/5 sm:p-8 lg:p-10">
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
                    setFormData({ ...defaultFormData, topic: selectedTopic });
                    setTouched({});
                    setErrors({});
                  }}
                  className="mt-8 cursor-pointer rounded-full border border-crimson px-6 py-2.5 font-body text-sm font-medium text-crimson transition-colors duration-200 hover:bg-crimson hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                <h3 className="font-display text-[1.15rem] font-semibold text-crimson sm:text-xl">
                  {activeConfig.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-charcoal/70">
                  {activeConfig.intro}
                </p>

                <div>
                    <label
                      htmlFor="topic"
                      className="mb-1.5 block font-body text-[0.92rem] font-medium text-charcoal sm:text-sm"
                    >
                    Topic
                    <span className="ml-1 text-gold" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      id="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-describedby={errors.topic ? "topic-error" : undefined}
                      className={`${inputBase} cursor-pointer appearance-none pr-11 ${
                        errors.topic && touched.topic ? inputError : inputNormal
                      }`}
                    >
                      <option value="">Select a topic</option>
                      {topicOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  {errors.topic && touched.topic && (
                    <p
                      id="topic-error"
                      role="alert"
                      className="mt-1.5 font-body text-xs text-red-600"
                    >
                      {errors.topic}
                    </p>
                  )}
                </div>

                {activeFields.map((field, index) => {
                  if (field.id === "position") {
                    const previousField = activeFields[index - 1];
                    if (previousField?.id === "organization") {
                      return null;
                    }
                  }

                  const renderSingleField = (currentField: typeof field) => (
                    <div key={currentField.id} className="min-w-0">
                      <label
                        htmlFor={currentField.id}
                        className="mb-1.5 block font-body text-sm font-medium text-charcoal"
                      >
                        {currentField.label}
                        {currentField.required && (
                          <span className="ml-1 text-gold" aria-hidden="true">
                            *
                          </span>
                        )}
                      </label>

                      {currentField.multiline ? (
                        <textarea
                          id={currentField.id}
                          rows={4}
                          placeholder={currentField.placeholder}
                          value={formData[currentField.id]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required={currentField.required}
                          aria-describedby={
                            errors[currentField.id]
                              ? `${currentField.id}-error`
                              : undefined
                          }
                          className={`${inputBase} resize-none ${
                            errors[currentField.id] && touched[currentField.id]
                              ? inputError
                              : inputNormal
                          }`}
                        />
                      ) : (
                        <input
                          id={currentField.id}
                          type={currentField.type}
                          placeholder={currentField.placeholder}
                          value={formData[currentField.id]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-required={currentField.required}
                          aria-describedby={
                            errors[currentField.id]
                              ? `${currentField.id}-error`
                              : undefined
                          }
                          className={`${inputBase} ${
                            errors[currentField.id] && touched[currentField.id]
                              ? inputError
                              : inputNormal
                          }`}
                        />
                      )}

                      {errors[currentField.id] && touched[currentField.id] && (
                        <p
                          id={`${currentField.id}-error`}
                          role="alert"
                          className="mt-1.5 font-body text-xs text-red-600"
                        >
                          {errors[currentField.id]}
                        </p>
                      )}
                    </div>
                  );

                  if (field.id === "organization") {
                    const nextField = activeFields[index + 1];
                    if (nextField?.id === "position") {
                      return (
                        <div
                          key="organization-position-row"
                          className="grid grid-cols-2 gap-3 sm:gap-5"
                        >
                          {renderSingleField(field)}
                          {renderSingleField(nextField)}
                        </div>
                      );
                    }
                  }

                  return renderSingleField(field);
                })}

                <button
                  type="submit"
                  className="mt-2 w-full cursor-pointer rounded-full bg-crimson px-6 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-crimson/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {activeConfig.submitLabel}
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
