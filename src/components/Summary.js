import { useState } from 'react'

function Summary(props) {
    const { productCount, total, setShippingfee } = props
    const [selectedOption, setSelectedOption] = useState('')

    return (
        <>
            <div className="col-md-4 summary">
                <div>
                    <h5>
                        <b>付款摘要</b>
                    </h5>
                </div>
                <hr />
                <div className="row">
                    <div className="col col-style">共 {productCount} 項目</div>
                </div>

                <div className="selectedOption">
                    <h5>運送</h5>
                    <select
                        value={selectedOption}
                        onChange={(e) => {
                            setSelectedOption(e.target.value)
                            setShippingfee(e.target.value)
                        }}
                    >
                        <option value="">請選擇</option>
                        <option value="200">郵局 +$200</option>
                        <option value="250">快遞 +$250</option>
                    </select>
                </div>

                <div className="row row-style">
                    <div className="col">總價</div>
                    <div className="col text-right">${total}</div>
                </div>
                <button className="btn">前往付款</button>
            </div>
        </>
    )
}

export default Summary