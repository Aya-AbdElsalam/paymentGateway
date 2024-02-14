import { useEffect, useState } from "react";
import { monthlySessions } from "../data/data";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import RightSise from "./RightSide";
import LeftSide from "./LeftSide";
export default function Form() {
    const [paymentMethod, setPaymentMethod] = useState("visa")
    const [country, setCountry] = useState([])
    const [month, setMonth] = useState(6)
    const [discount, setDiscount] = useState(4)
    const [monthlySessionSelected, setMonthlySessionSelected] = useState(monthlySessions[0].NoOfMonth)
    const [monthlySessionSelectedPrice, setmonthlySessionSelectedPrice] = useState(monthlySessions[0].price)
    useEffect(() => {
        //fetch all countries
        fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json").then((res) => res.json()).then((data) => {
            setCountry(data)
        })
    }, [])
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className="container form-container flex">
                <form onSubmit={handleSubmit(onSubmit)} className="form full-width flex">
                    <LeftSide errors={errors} monthlySessions={monthlySessions} register={register} control={control} country={country} setmonthlySessionSelectedPrice={setmonthlySessionSelectedPrice} setMonthlySessionSelected={setMonthlySessionSelected} setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod}></LeftSide>
                    <RightSise month={month} setMonth={setMonth} setDiscount={setDiscount} discount={discount} monthlySessionSelected={monthlySessionSelected} monthlySessionSelectedPrice={monthlySessionSelectedPrice} register={register} errors={errors}></RightSise>
                </form>
            </div>
        </>
    );
}
