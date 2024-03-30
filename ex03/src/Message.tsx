import React from 'react'

// Message 함수형 컴포넌트의 props 파라미터 객체의 타입 선언이다.
export type MessageProps = {
    value: string,
    color?: string,
    size?: number
}

// 파라미터로 전달된 props 값이 위 타입 선언과 일치해야 한다.
function Message({value, size, color} : MessageProps) {
  const msgStyle = {color: color || "black", fontSize: size || 20};
  return (
    <div style={msgStyle}>
      {value}
    </div>
  )
}

export default Message;

