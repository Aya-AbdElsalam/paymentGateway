import "../css/left-side.css"
import { Controller } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import sepaLogo from "../images/sepa.webp"
import visaLogo from "../images/visa.webp"
import PaymentInputs from "./PaymentInputs"
export default function LeftSide(props) {
    return (
        <div className="form-left-side">
            <h3>Registration & Booking at GoStudent</h3>
            <p>This leading platform for online tutoring</p>
            <div className="full-width flex form-left-inputs">
                <div>
                    <label htmlFor="login-phone">
                        LOGIN PHONE NUMBER
                        <span>
                            (preferably <span>the student's</span>)
                        </span>
                    </label>
                    <Controller
                        rules={{ required: true, minLength: 11 }}
                        name="phoneNumber"
                        control={props.control}
                        render={({ field }) => (
                            <PhoneInput
                                inputStyle={{
                                    border: 0,
                                    width: "100%",
                                }}
                               
                                value={field.phoneNumber}
                                onChange={field.handleChange}
                                country={"in"}
                                buttonStyle={{ border: 0, marginRight: "30px" }}
                                inputProps={{
                                    id: "login-phone",
                                    require: "true",
                                }}
                                {...field}
                                style={{ border: props.errors.phoneNumber && "1px solid red" }}
                            />
                        )}
                    />
                    {props.errors.phoneNumber && <span className="error">Invalid Phone Number</span>}
                </div>
                <div>
                    <label htmlFor="contact-phone">
                        CONTACT PHONE NUMBER
                        <span>
                            (preferably <span>the parent's</span>)
                        </span>
                    </label>
                    <Controller
                        rules={{ required: true, minLength: 11 }}
                        name="contactPhone"
                        control={props.control}
                        render={({ field }) => (
                            <PhoneInput
                                inputStyle={{
                                    border: 0,
                                    width: "100%",
                                }}
                                value={field.contactPhone}
                                onChange={field.handleChangeContactPhone}
                                country={"in"}
                                buttonStyle={{ border: 0, marginRight: "30px" }}
                                inputProps={{
                                    required: true,
                                    id: "contact-phone",
                                }}
                                {...field}
                                style={{ border: props.errors.contactPhone && "1px solid red" }}
                            />
                        )}
                    />
                    {props.errors.contactPhone && <span className="error">Invalid Phone Number</span>}
                </div>
                <div>
                    <label htmlFor="contact-email">
                        CONTACT EMAIL ADDRESS
                        <span>
                            (preferably <span>the parent's</span>)
                        </span>
                    </label>
                    <input
                        className="full-width"
                        id="contact-email"
                        type="text"
                        {...props.register("email", {
                            required: true,
                            pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                        })}
                        style={{ border: props.errors.email && "1px solid red" }}
                    />
                    {props.errors.email && <span className="error">Invalid Email</span>}
                </div>
                <div>
                    <label htmlFor="contact-name">CONTACT NAME</label>
                    <input
                        className="full-width"
                        id="contact-name"
                        type="text"
                        {...props.register("name", {
                            required: true,
                            minLength: 3,
                        })}
                        style={{ border: props.errors.name && "1px solid red" }}
                    />
                    {props.errors.name && <span className="error">Invalid name</span>}
                </div>
                <div>
                    <label htmlFor="address">BILLING ADDRESS</label>
                    <div className="login-phone flex">
                        <div>
                            <input id="address" type="text" placeholder="Adresse"
                                className="full-width"
                                {...props.register("address", {
                                    required: true,
                                    minLength: 3,
                                })}
                                style={{ border: props.errors.address && "1px solid red" }}
                            />
                            {props.errors.address && <span className="error">Invalid Address</span>}
                        </div>
                        <div>
                            <input type="text" placeholder="Nr"
                                className="full-width"
                                {...props.register("nr", {
                                    required: true,
                                })}
                                style={{ border: props.errors.nr && "1px solid red" }}
                            />
                            {props.errors.nr && <span className="error">Required</span>}
                        </div>
                    </div>
                    <div className="login-phone flex">
                        <div>
                            <input type="text" placeholder="Postal code" className="full-width"
                                {...props.register("code", {
                                    required: true,
                                })}
                                style={{ border: props.errors.code && "1px solid red" }}
                            />
                            {props.errors.code && <span className="error">Required</span>}
                        </div>
                        <div>
                            <input type="text" placeholder="City" className="full-width"
                                {...props.register("city", {
                                    required: true,
                                })}
                                style={{ border: props.errors.city && "1px solid red" }}
                            />
                            {props.errors.city && <span className="error">Required</span>}
                        </div>
                        <div>
                            <select aria-label="country" className="full-width" style={{ border: props.errors.country && "1px solid red" }}
                                defaultValue={""}
                                {...props.register("country", { required: true })}
                            >
                                <option value="" disabled hidden>Country</option>
                                {props.country.map((country, index) => {
                                    return (
                                        <option key={index} value={country.name}>
                                            {country.name}
                                        </option>
                                    )
                                })}
                            </select>
                            {props.errors.country && <span className="error">Required</span>}
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="monthly-sessions">MONTHLY SESSIONS</label>
                    <select aria-label="monthlySessions" className="full-width" onChange={(e) => {
                        props.setMonthlySessionSelected(parseInt(e.target.value))
                        const price = props.monthlySessions.find((session) => {
                            return session.NoOfMonth === parseInt(e.target.value)
                        })
                        props.setmonthlySessionSelectedPrice(price.price)
                    }}>
                        {props.monthlySessions.map(monthlySession => {
                            return (
                                <option key={monthlySession.id}>
                                    {monthlySession.NoOfMonth} Sessions
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label >SELECT PAYMENT METHOD</label>
                    <div className="payment-method">
                        <div>
                            <div className="method flex">
                                <input type="radio" name="payment-method" id="sepa" onChange={(e) => {
                                    e.target.checked === true && props.setPaymentMethod("sepa")
                                }} />
                                <label htmlFor="sepa">
                                    <img loading="lazy" src={sepaLogo} alt="sepaLogo" width="80" height="15"/>
                                </label>
                            </div>
                            {props.paymentMethod === "sepa" && <PaymentInputs errors={props.errors} register={props.register} />}
                        </div>
                        <div>
                            <div className="method flex">
                                <input id="visa" type="radio" name="payment-method" defaultChecked onChange={(e) => {
                                    e.target.checked === true && props.setPaymentMethod("visa")
                                }} />
                                <label htmlFor="visa">
                                    <img loading="lazy" src={visaLogo} alt="visaLogo" width={100} height="15"/>
                                </label>  
                            </div>
                            {props.paymentMethod === "visa" && <PaymentInputs errors={props.errors} register={props.register} />}
                        </div>

                    </div>
                </div>
                <p className="secure-payment">100% secure payment. All data is encrypted.</p>
            </div>
        </div>
    )
}