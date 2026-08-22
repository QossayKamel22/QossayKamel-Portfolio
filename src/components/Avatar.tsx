import { useState } from "react";
import "./avatar.css";

/**
 * Renders `public/profile.jpg` (served at the site root as `/profile.jpg`).
 * Falls back to a monogram if the file is ever missing, instead of a
 * fabricated or stock photo.
 */
export function Avatar({ size = "lg", initials = "QK" }: { size?: "lg" | "md"; initials?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`avatar avatar--${size}`}>
      {!failed && (
        <img
          src="/profile.jpg"
          alt="Qossay Kamel"
          onError={() => setFailed(true)}
          className="avatar__img"
        />
      )}
      {failed && <span className="avatar__monogram">{initials}</span>}
      <div className="avatar__ring" aria-hidden="true" />
    </div>
  );
}
