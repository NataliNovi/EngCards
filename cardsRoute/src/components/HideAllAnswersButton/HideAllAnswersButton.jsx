import React from 'react'

export default function HideAllAnswersButton(props) {



  return (
         <>
          <button className="hideAllAnswers" onClick={() => props.handleHideAllAnswers()}>Hide all answers</button>
    
        </>
  )
}
