import { THEME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer
      className="py-8 text-center text-sm text-white/90 md:py-10"
      style={{ backgroundColor: THEME.pinkDarker }}
    >
      <p className="font-body">
        Copyright © {new Date().getFullYear()} | by FLUVOSOFT
      </p>
    </footer>
  );
}
