/**
 * This code was generated by Builder.io.
 */
import React from "react";

export interface IconCardProps {
  icon: string;
  title: string;
  description: string;
  altText: string;
  coloredBackground?: boolean;
  alignment?: "left" | "center" | "right";
}

const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  description,
  altText,
  coloredBackground,
  alignment,
}) => {
  const textAlignment = `text-${alignment}`;
  //kinda hacky, items-left isnt valid but it reverts to left alignment so it... kinda works?
  const iconAlignment =
    alignment === "right" ? "items-end" : `items-${alignment}`;

  return (
    <div
      className={`w-full ${
        coloredBackground ? "bg-indigo-500 text-white" : "text-base"
      } rounded-lg overflow-hidden flex-1`}
    >
      <div className={`flex flex-col ${iconAlignment} ${textAlignment} p-6`}>
        <div className="w-16 h-16 flex items-center justify-center">
          <img src={icon} alt={altText} className="w-full h-full" />
        </div>
        <h3 className="mt-6 text-xl font-medium">{title}</h3>
        <div
          className="mt-4 text-base"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

export default IconCard;
