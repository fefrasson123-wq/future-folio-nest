import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures hash anchors (e.g. /#solution) scroll correctly in an SPA after route render.
 */
export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (!id) return;

    // Wait a tick for the target section to mount.
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return null;
}
