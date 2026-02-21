import { THEME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer
      className="py-6 text-center text-sm text-white/90 md:py-8"
      style={{ backgroundColor: THEME.pinkDarker }}
    >
      <p className="font-body">
        Copyright © {new Date().getFullYear()} | Made by FluvoSoft
      </p>
    </footer>
  );
}
