import React from 'react'

function MyButton(props) {
    console.log(props)
    const { text, value, setTotal, total } = props

    return (
        <>
            <button
                className="btn btn-secondary"
                onClick={() => {
                    const newTotal = total + value < 1 ? 1 : total + value
                    setTotal(newTotal)
                }}
            >
                {text}
            </button>
        </>
    )
}

export default MyButton