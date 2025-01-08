"use client";

import { useTranslations } from "next-intl";

export default function NewsLetter() {
  const t = useTranslations("Newsletter");

  const submit = (event: SubmitEvent) => {
    event.preventDefault();

    const form = document.querySelector(".newsletter") as HTMLFormElement;

    // const data = new URLSearchParams(new FormData(form));

    // fetch(form.action, {
    //   method: form.method,
    //   type: "application/json",
    //   accept: "application/json",
    //   authorization: "",
    //   body: data,
    // });
  };

  return (
    <>
      <form method="POST" className="newsletter flex flex-col gap-5 w-full">
        <fieldset>
          <label className="flex flex-col">
            {t("label:email")}
            <input
              id="email"
              name="email"
              type="email"
              className="border border-white bg-transparent rounded-lg p-2 placeholder:text-gray-300"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder={t("placeholder:email")}
            />
          </label>
        </fieldset>
        <button
          type="submit"
          className="border border-white bg-red-500 hover:bg-red-400
                    hover:shadow-neon transition-shadow duration-300 rounded-lg p-2"
        >
          {t("button:subscribe")}
        </button>
      </form>
    </>
  );
}
