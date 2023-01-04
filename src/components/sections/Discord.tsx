import { useState } from "react";
export const Discord = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="discord">
        {
          !isActive ? <img src="/discord.svg" className="svgicon" onClick={toggle} /> : <>
            <img src="/x.svg" className="svgicon" onClick={toggle} />
            <iframe src="https://discord.com/widget?id=801057122115911710&channel_id=839817705199632404&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </>
        }
      </div>
    </>
  );
};

export default Discord;
