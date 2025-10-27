import React, { useEffect, useState } from "react";

const GoogleTranslate = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Load Google Translate script
  useEffect(() => {
    const existingScript = document.querySelector("#google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Keep checking until Google's select exists
    const waitForGoogle = setInterval(() => {
      const googleSelect = document.querySelector(".goog-te-combo");
      if (googleSelect) {
        setIsLoaded(true);
        clearInterval(waitForGoogle);
      }
    }, 300);

    return () => clearInterval(waitForGoogle);
  }, []);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "zh-CN", label: "Chinese" },
    { code: "fr", label: "French" },
    { code: "pt", label: "Portuguese" },
    { code: "de", label: "German" },
    { code: "ar", label: "Arabic" },
    { code: "hi", label: "Hindi" },
  ];

  const handleLanguageSelect = (event) => {
    const code = event.target.value;
    const select = document.querySelector(".goog-te-combo");
    if (!select) return;
    select.value = code;
    select.dispatchEvent(new Event("change"));
  };

  return (
    <div className="relative">
      <select
        disabled={!isLoaded}
        onChange={handleLanguageSelect}
        className="bg-white text-black border rounded-md px-2 py-1 shadow-md disabled:opacity-50"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      {/* Hidden google widget */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default GoogleTranslate;
