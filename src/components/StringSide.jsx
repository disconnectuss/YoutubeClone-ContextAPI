import React, { useState } from "react";


const StringSide = ({text, max}) => {
    const [showFull, setShowFull] = useState(false);
    let shortText = text;
    

    if (text.length > max && !showFull) {
        shortText = text.substring(0, max) + '...more'}
  return (
    <>
    {/* splitted all lines and turned string into array */}
    <p className="text-sm"
    onClick={() => setShowFull(!showFull)}>
      {shortText.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </p>

    </>
  );
}

export default StringSide
