import Heading from "../heading";
import Section from "../section";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import Button from "../button";

export default function Form({ heading, label, formType }) {
  const [state, handleSubmit] = useForm("mrgjqoob");
  if (state.succeeded) {
    return <p className="flex justify-center">Thanks for joining!</p>;
  }
  return (
    <Section>
      <div className="mb-28">{heading && <Heading children={heading} />}</div>
      {formType == "contact" && (
        <div className="max-w-sm md:max-w-2xl container mx-auto">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* --------------------- */}

            {label == "Email Address" ? (
              <div className="flex flex-col">
                <label className="text-left" htmlFor="email">
                  {label}
                </label>
                <input
                  className="border-2 border-black  border-opacity-40"
                  id="email"
                  type="email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            ) : // --------------------

            label == "Name" ? (
              <div className="flex flex-col">
                <label htmlFor="full-name">{label}</label>
                <input
                  className="px-2"
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="Nicolas Cage"
                  required=""
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
            ) : null}

            <div className="mt-10 flex flex-col">
              <label className="text-left" htmlFor="message">
                Message
              </label>
              <textarea
                className="border-2 border-black border-opacity-40 resize-none"
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button children="Submit" disabled={state.submitting} />
            </div>
          </form>
        </div>
      )}
    </Section>
  );
}
