import React, { useState, useEffect } from "react";
import "./Quotes.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const pakistaniQuotes = [
  "محنت کر، کامیابی تیرے قدم چومے گی۔",
  "ارادے مضبوط ہوں تو منزل خود راستہ دیتی ہے۔",
  "ہمت مرداں، مدد خدا۔",
  "کامیابی کی کنجی صبر اور محنت ہے۔",
  "ناکامی صرف ایک سبق ہے، ہار نہیں۔",
  "جو محنت کرتا ہے وہ کبھی خالی ہاتھ نہیں لوٹتا۔",
  "خواب وہ نہیں جو نیند میں آئیں، خواب وہ ہیں جو نیند اُڑا دیں۔",
  "عزم و حوصلہ انسان کو پہاڑوں سے بھی بلند کر دیتا ہے۔"
];

const Quotes = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pakistaniQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="quotes-section">
      <div className="quotes-box">
        <FaQuoteLeft className="quote-icon left" />
        <span className="quote-text">{pakistaniQuotes[current]}</span>
        <FaQuoteRight className="quote-icon right" />
        <div className="quotes-circles">
          {pakistaniQuotes.map((_, idx) => (
            <span
              key={idx}
              className={`circle${idx === current ? " active" : ""}`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
