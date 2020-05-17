import React, { useState } from "react";

function Index() {
    const [text, setText] = useState('')


    const onNameChangeHandler = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <div>hello world!!</div>
            <input name={"name-input"} onChange={onNameChangeHandler} type={"text"}
                value={text} />
        </div>
    )
}

export default Index;