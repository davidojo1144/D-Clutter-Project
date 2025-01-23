import { createContext } from "react";

export const ClutterContext = createContext()


const ClutterContextProvider = (props)=> {

    const currency = "$"
    const user = "1M+"
    const rating = "9K+"
    const report = "93%"

    const value = {
        currency,
        user,
        rating,
        report
    }


    return(
        <ClutterContext.Provider  value={value} >
            {props.children}
        </ClutterContext.Provider>
    )

}

export default ClutterContextProvider