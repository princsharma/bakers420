"use client";

import { useEffect } from "react";

export default function HashScrollFix() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "" && anchor.target !== "_self") {
        return;
      }
      if (anchor.hasAttribute("download")) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;
      if (!url.hash || url.hash === "#") return;

      const hash = url.hash;

      if (hash === "#top") {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
        return;
      }

      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      e.stopPropagation();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search + hash,
      );
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
