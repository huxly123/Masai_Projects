import React from 'react'

export function Calender({ date,memo }) {
    
    console.log(memo?"memorender":"rendering");
    return (
        <div>
            Date is:{date}
        </div>
    )
}

export const MemoisedCalender=React.memo(Calender)
