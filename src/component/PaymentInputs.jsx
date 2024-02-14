import card from "../images/card.png"
export default function PaymentInputs(props) {
    return (
         <div>
                                <input className="full-width mb-15" placeholder="Card holder"   {...props.register("cardHolder", {
                                    required: true,
                                })}
                                    style={{ border: props.errors.cardHolder && "1px solid red" }}
                                />
                                {props.errors.cardHolder && <span className="error">Required</span>}
                                <div className="flex card-number">
                                    <div className="full-width " >
                                        <div className="flex" style={{ border: props.errors.cardNumber && "1px solid red" }}>
                                            <div className="card-img">
                                                <img alt="card" src={card}  width="20" height="20" loading="lazy"/>
                                            </div>
                                            <input placeholder="Card Number" type="number" className="full-width" {...props.register("cardNumber", {
                                                required: true,
                                            })}
                                            />
                                        </div>
                                        {props.errors.cardNumber && <span className="error">Invalid</span>}
                                    </div>
                                    <div>
                                        <input placeholder="MM/YY" className="full-width"  {...props.register("date", {
                                            required: true,
                                            pattern: /^(\d{1,2})[/](\d{1,2})$/,
                                        })}
                                            style={{ border: props.errors.date && "1px solid red" }}
                                        />
                                        {props.errors.date && <span className="error">Invalid MM/YY</span>}
                                    </div>
                                    <div>
                                        <input placeholder="CVC"  type="number" className="full-width"   {...props.register("cvc", {
                                            required: true,
                                        })}
                                            style={{ border: props.errors.cvc && "1px solid red" }}
                                        />
                                        {props.errors.cvc && <span className="error">Invalid</span>}
                                    </div>
                                </div>
                            </div>
    )
}