import React from 'react'
import Child from './Child'

//單向資料流 父母傳遞資料給子女
function Parent() {
    return (
        <>
            {/* 在父母元件的render(return)中使用子女元件 */}
            <Child text="Hello" name="Eddy" />
            <Child text="{2}" name="{1}" />
            <Child />
        </>
    )
}

export default Parent