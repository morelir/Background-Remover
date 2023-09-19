import React, { ReactNode } from "react";
import "./Card.scss";

const Card = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card_middle">{children}</div>
    </div>
  );
};

export default Card;
