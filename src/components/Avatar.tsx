import { useState } from "react";
import "./avatar.css";

/**
 * Renders `public/profile.webp` (falling back to `public/profile.jpg`)
 * served at the site root. Falls back to a monogram if both are missing,
 * instead of a fabricated or stock photo.
 */
export function Avatar({
  size = "lg",
  initials = "QK",
}: {
  size?: "lg" | "md" | "portrait";
  initials?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`avatar avatar--${size}`}>
      {!failed && (
        <picture>
          <source srcSet="/profile.webp" type="image/webp" />
          <img
            src="/profile.jpg"
            alt="Qossay Kamel"
            onError={() => setFailed(true)}
            className="avatar__img"
          />
        </picture>
      )}
      {failed && <span className="avatar__monogram">{initials}</span>}
      <div className="avatar__ring" aria-hidden="true" />
    </div>
  );
}
