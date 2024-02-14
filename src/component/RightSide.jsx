import "../css/right-side.css"
export default function RightSise(props) {
    return (
        <div className="form-right-side">
            <p className="full-width">ORDER OVERVIEW</p>
            <div className="flex number-month">
                {[6, 9, 12, 18, 24, 36].map((m) => {
                    return (
                        <div key={m} style={{ borderColor: props.month === m && "blue" }} onClick={() => {
                            props.setMonth(m)
                        }}>
                            {m} MONTHS
                        </div>
                    )
                })}
            </div>
            <div className="flex extra-discount full-width">
                <div>
                    <input id="extra-discount" type="checkbox" onChange={(e) => { (e.target.checked) === false ? props.setDiscount(props.discount - 5) : props.setDiscount(props.discount + 5) }} />
                    <label htmlFor="extra-discount"></label>
                </div>
                <p>Pay in advance - EXTRA 5% DISCOUNT</p>
            </div>
            <div className="flex order-overview">
                <p>NUMBER OF SESSIONS P.M.</p>
                <span>{props.monthlySessionSelected}</span>
            </div>
            <div className="flex order-overview regular-price">
                <p>REGULAR PRICE</p>
                <span>{props.monthlySessionSelectedPrice}€</span>
            </div>
            <div className="flex order-overview">
                <p>YOUR PRICE</p>
                <span>{((((props.monthlySessionSelected * props.monthlySessionSelectedPrice) - (props.monthlySessionSelectedPrice * props.monthlySessionSelected * (props.discount / 100)))) / props.monthlySessionSelected).toFixed(3)}€</span>
            </div>
            <div className="flex order-overview discount">
                <p>DISCOUNT {props.discount} %</p>
                <span>- {(props.monthlySessionSelectedPrice * props.monthlySessionSelected * (props.discount / 100)).toFixed(3)}€</span>
            </div>
            <div className="divider">
            </div>
            <div className="flex order-overview price-blue">
                <p>Setup fee</p>
                <span>0.00€</span>
            </div>
            <div className="flex order-overview price-blue">
                <p>TOTAL P.M.</p>
                <span>{((props.monthlySessionSelected * props.monthlySessionSelectedPrice) - (props.monthlySessionSelectedPrice * props.monthlySessionSelected * (props.discount / 100))).toFixed(3)}€</span>
            </div>
            <div className="flex order-overview terms ">
                <input id="terms" type="checkbox"{...props.register("terms", {
                    required: true,
                })}
                />
                <label htmlFor="terms"> I accept the <a href="/">Terms & Conditions</a> and understand my<a href="/"> right of withdrawal</a> as well as the circumstances that lead to a repeal of the same.</label>
            </div>
            {props.errors.terms && <span className="error full-width" >Required</span>}
            <button type="submit">Order Now</button>
            <p>95% SATISFACTION RATE!</p>
        </div>
    )
}