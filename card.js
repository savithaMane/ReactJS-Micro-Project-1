import React, { useState } from "react";
import bg1 from "./images/bg1.png";
import "./card.css";
import card2 from "./images/card2.png";

const Card = () => {
    const [name, setName] = useState("");
    const [cardNo, setCardNo] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [submittedCardDetails, setSubmittedCardDetails] = useState(null);
    const [nameError, setNameError] = useState("");
    const [cardNoError, setCardNoError] = useState("");
    const [monthError, setMonthError] = useState("");
    const [yearError, setYearError] = useState("");
    const [cvcError, setCvcError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let formIsValid = true;

        if (!/^[A-Za-z\s]+$/.test(name)) {
            setNameError("Cardholder name required");
            formIsValid = false;
        } else {
            setNameError("");
        }

        if (!/^[0-9\s]+$/.test(cardNo)) {
            setCardNoError("Card number required");
            formIsValid = false;
        } else {
            setCardNoError("");
        }

        if (!/^\d+$/.test(month)) {
            setMonthError("month required");
            formIsValid = false;
        } else {
            setMonthError("");
        }

        if (!/^\d+$/.test(year)) {
            setYearError("year required");
            formIsValid = false;
        } else {
            setYearError("");
        }

        if (!/^\d+$/.test(cvc)) {
            setCvcError("CVC must be numeric");
            formIsValid = false;
        } else {
            setCvcError("");
        }
        if (nameError || cardNoError || cvcError) {
            return;
        }

        if (formIsValid) {
            const newCardDetails = {
                name,
                cardNo,
                month,
                year,
                cvc,
            };
            setSubmittedCardDetails(newCardDetails);
            setTimeout(() => {
                window.alert("succesfully entered card information!");
            }, 500);
            clearForm();
        }
    };
    const clearForm = () => {
        setName("");
        setCardNo("");
        setMonth("");
        setYear("");
        setCvc("");
    };

    return (
        <>
            <section className="container">
                <div className="left-bg">
                    <img src={bg1} alt="" />
                    <div className="card-front">
                        <div className="circle">
                            <div className="big-c"></div>
                            <div className="small-c"></div>
                        </div>
                        <div className="card-no">
                            <p>
                                {submittedCardDetails
                                    ? submittedCardDetails.cardNo
                                    : "0000 0000 0000 0000"}
                            </p>
                        </div>
                        <div className="card-details">
                            <p id="name">
                                {submittedCardDetails
                                    ? submittedCardDetails.name.toUpperCase()
                                    : "JANE APPLESEED"}
                            </p>
                            <p id="date">
                                {submittedCardDetails
                                    ? `${submittedCardDetails.month} / ${submittedCardDetails.year}`
                                    : "00 / 00"}
                            </p>
                        </div>
                    </div>
                    <div className="card-back">
                        <img src={card2} alt="" />
                        <div className="cvv">
                            {submittedCardDetails ? submittedCardDetails.cvc : "000"}
                        </div>
                    </div>
                </div>

                <div className="right-bg">
                    <form onSubmit={handleSubmit}>
                        <div className="card-name">
                            <p>CARDHOLDER NAME</p>
                            <input
                                type="text"
                                maxLength={26}
                                placeholder="e.g. Jane Appleseed"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {nameError && <div className="error">{nameError}</div>}
                        </div>
                        <div className="card-number">
                            <p>CARD NUMBER</p>
                            <input
                                type="text"
                                placeholder="e.g. 1234 5678 9123 0000"
                                value={cardNo
                                    .replace(/\s/g, "")
                                    .replace(/(\d{4})/g, "$1 ")
                                    .trim()}
                                maxLength={19}
                                onChange={(e) => setCardNo(e.target.value)}
                            />
                            {cardNoError && <div className="error">{cardNoError}</div>}
                        </div>

                        <div className="form-date">
                            <div className="exp-date">
                                <p>EXP. DATE (MM/YY)</p>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="MM"
                                        maxLength={2}
                                        value={month}
                                        onChange={(e) => setMonth(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="YY"
                                        value={year}
                                        maxLength={2}
                                        onChange={(e) => setYear(e.target.value)}
                                    />
                                </div>
                                {monthError && <span className="error">{monthError}</span>}
                                {yearError && <span className="error2">{yearError}</span>}
                            </div>
                            <div className="cvc">
                                <p>CVC</p>
                                <input
                                    type="text"
                                    placeholder="e.g. 123"
                                    value={cvc}
                                    maxLength={3}
                                    onChange={(e) => setCvc(e.target.value)}
                                />
                                {cvcError && <div className="error">{cvcError}</div>}
                            </div>
                        </div>

                        <div className="buttons">
                            <button type="submit">Confirm</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Card;
