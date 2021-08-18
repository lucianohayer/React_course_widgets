import React, { useState, useEffect } from "react";
import { TRANSLATE_API_KEY } from "../Properties/translateApiKey";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      try {
        const { data } = await axios.post(
          "https://translation.googleapis.com/language/translate/v2",
          {},
          {
            params: {
              q: debouncedText,
              target: language.value,
              key: TRANSLATE_API_KEY,
            },
          }
        );

        setTranslated(data.data.translations[0].translatedText);
      } catch (err) {
        console.error(err);
        setTranslated("");
      }
    };

    if (debouncedText) {
      doTranslation();
    } else {
      setTranslated("");
    }
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
