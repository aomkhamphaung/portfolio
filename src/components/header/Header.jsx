import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // Change header background
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <svg
            className="logo__svg"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="300px"
            height="180px"
            viewBox="0 0 500.000000 500.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M3184 2962 c-49 -32 -115 -79 -146 -105 -32 -26 -60 -47 -63 -47 -2
0 13 24 35 53 40 52 49 77 29 77 -5 0 -16 -15 -24 -32 -27 -66 -264 -342 -280
-327 -9 9 16 71 48 119 24 36 25 41 7 25 -29 -26 -57 -82 -70 -140 -14 -62
-107 -168 -167 -191 -58 -22 -66 -13 -44 46 11 28 16 50 12 50 -4 0 -33 -22
-66 -50 -33 -27 -63 -50 -67 -50 -11 0 -10 18 2 25 6 3 10 12 10 18 -1 16 -39
-34 -40 -50 0 -24 26 -13 79 32 55 47 71 52 52 17 -20 -37 -14 -62 15 -62 14
0 35 5 47 11 l22 12 -20 -24 c-11 -13 -37 -43 -58 -66 -47 -54 -75 -109 -60
-124 11 -11 85 68 217 229 l68 82 30 -25 c39 -33 66 -39 117 -25 114 30 316
205 398 345 76 130 89 235 29 235 -13 0 -64 -26 -112 -58z m130 -13 c-4 -110
-148 -306 -307 -419 -76 -54 -155 -85 -192 -76 -62 16 -93 88 -51 123 l21 18
-19 -23 c-11 -12 -17 -25 -14 -28 3 -3 36 33 73 80 83 107 206 217 343 307
126 83 148 86 146 18z m-594 -434 c0 -2 -46 -59 -102 -126 -149 -177 -147
-175 -148 -162 0 13 67 97 173 216 66 73 77 83 77 72z"
              />
              <path
                d="M1179 2777 c-123 -106 -234 -196 -244 -200 -25 -9 93 102 210 198
139 114 161 134 145 134 -8 0 -100 -76 -205 -169 -104 -94 -196 -170 -203
-170 -7 0 -11 -4 -8 -9 3 -5 -34 -44 -82 -87 -48 -44 -123 -113 -167 -154 -44
-41 -95 -86 -114 -101 -19 -14 -32 -30 -30 -37 3 -8 15 -3 35 15 16 16 48 41
70 58 21 16 108 88 192 160 85 71 161 135 170 142 16 11 180 38 188 31 1 -2
-32 -44 -74 -94 -138 -162 -172 -206 -172 -218 1 -6 13 5 28 24 15 19 76 91
135 161 115 134 123 139 203 133 24 -2 46 1 49 6 7 11 -1 12 -69 10 -57 -2
-58 -6 35 106 155 186 195 254 151 254 -10 0 -119 -87 -243 -193z m241 165 c0
-12 -27 -49 -129 -176 -53 -65 -103 -127 -111 -137 -11 -13 -37 -23 -82 -30
-126 -20 -125 -15 7 96 66 54 160 134 209 177 83 74 106 89 106 70z m-500
-386 c0 -6 -171 -151 -183 -155 -7 -2 7 13 30 33 24 21 64 57 90 82 43 39 63
52 63 40z"
              />
              <path
                d="M2006 2918 c-21 -23 -118 -142 -217 -263 -122 -150 -192 -227 -219
-243 -32 -19 -38 -27 -30 -37 8 -10 -7 -34 -65 -104 -42 -50 -80 -93 -86 -96
-5 -4 -9 -13 -9 -21 0 -8 48 29 106 82 l107 97 88 -93 c50 -53 86 -85 85 -74
-2 10 -9 19 -16 19 -7 0 -14 8 -16 17 -1 10 -26 43 -56 74 -29 31 -53 61 -53
68 0 12 132 128 230 202 82 62 145 106 145 100 0 -3 -34 -45 -76 -93 -84 -97
-150 -190 -141 -199 12 -12 47 9 107 61 33 30 62 55 64 55 1 0 2 -21 2 -47 -1
-55 14 -64 66 -39 38 20 39 20 32 1 -11 -27 39 -17 100 20 32 19 56 29 53 22
-3 -6 -8 -20 -12 -29 -10 -24 18 -33 60 -20 25 7 35 7 38 -2 3 -6 22 6 44 27
22 21 48 40 58 41 20 3 54 46 37 46 -6 0 -14 -5 -17 -10 -4 -6 -11 -7 -17 -4
-5 3 -26 -10 -46 -29 -39 -38 -78 -57 -118 -57 -31 0 -30 8 6 58 17 23 30 44
30 46 0 2 -17 0 -37 -4 -45 -8 -119 -44 -150 -73 -14 -12 -23 -15 -23 -8 0 9
-6 8 -22 -3 -26 -18 -64 -21 -73 -5 -4 6 -2 31 5 55 7 25 11 47 8 49 -2 3 -28
-18 -58 -46 -65 -61 -110 -94 -110 -80 0 19 72 108 224 275 45 48 83 92 84 97
8 21 -18 5 -93 -57 -124 -102 -394 -274 -384 -246 5 15 182 231 307 374 57 65
102 124 100 129 -2 6 -21 -9 -42 -33z m-246 -432 c0 -2 -34 -31 -76 -65 -47
-39 -81 -60 -91 -57 -27 11 -7 31 78 78 93 51 89 49 89 44z m467 -17 c-9 -6
-14 -16 -11 -22 4 -7 4 -9 0 -6 -4 4 -37 -9 -73 -27 -36 -19 -68 -32 -72 -28
-10 10 50 53 104 74 55 21 80 25 52 9z m-647 -128 c0 -5 -23 -29 -52 -53 l-52
-43 39 53 c36 47 65 67 65 43z"
              />
              <path
                d="M3258 2683 c-120 -126 -268 -316 -255 -329 12 -12 47 9 107 61 33 30
62 55 64 55 1 0 2 -21 2 -47 -1 -55 14 -64 66 -39 38 20 39 20 32 1 -11 -27
39 -17 100 20 35 21 56 29 52 20 -3 -8 -9 -22 -12 -30 -10 -24 25 -30 71 -14
40 15 42 15 37 -3 -4 -16 -1 -17 23 -8 15 6 46 25 69 42 23 18 47 36 55 42 8
6 4 -6 -8 -29 -11 -22 -21 -43 -21 -47 0 -14 54 -8 80 8 17 10 18 13 5 8 -72
-25 -81 -13 -39 49 14 21 24 42 22 47 -2 5 -36 -15 -77 -46 -41 -30 -76 -52
-79 -49 -3 3 14 26 38 50 24 25 40 45 34 45 -6 0 -26 -16 -45 -36 -37 -40 -84
-64 -124 -64 -32 0 -32 8 5 58 17 23 30 44 30 46 0 2 -17 0 -37 -4 -45 -8
-119 -44 -150 -73 -14 -12 -23 -15 -23 -8 0 9 -6 8 -22 -3 -26 -18 -64 -21
-73 -5 -4 6 -2 31 5 55 7 25 11 47 8 49 -2 3 -28 -18 -58 -46 -63 -60 -110
-94 -110 -81 0 17 159 214 220 272 3 3 18 20 34 38 41 45 18 40 -26 -5z m189
-214 c-9 -6 -14 -16 -11 -22 4 -7 4 -9 0 -6 -4 4 -37 -9 -73 -27 -36 -19 -68
-32 -72 -28 -10 10 50 53 104 74 55 21 80 25 52 9z"
              />
              <path d="M823 2553 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
              <path
                d="M1193 2504 c-44 -22 -115 -101 -111 -122 6 -26 55 -18 102 16 54 39
64 57 48 82 -10 17 -10 20 4 20 8 0 12 5 9 10 -8 13 -14 12 -52 -6z m37 -42
c0 -22 -102 -92 -135 -92 -15 0 -1 33 29 64 26 28 41 36 70 36 20 0 36 -4 36
-8z"
              />
              <path
                d="M4103 2476 c-23 -14 -58 -36 -77 -51 -18 -14 -49 -30 -67 -35 -46
-14 -60 1 -52 56 3 24 2 44 -2 44 -4 0 -30 -16 -56 -35 -61 -43 -71 -45 -24
-4 20 18 33 34 30 37 -2 3 -27 -16 -54 -41 -28 -26 -48 -47 -44 -47 3 0 0 -7
-7 -15 -27 -33 13 -14 73 35 l62 50 5 -47 c4 -43 8 -48 32 -51 15 -2 36 2 48
8 13 7 20 7 20 0 0 -27 77 -1 160 54 32 21 41 24 30 10 -56 -73 -89 -106 -129
-133 -53 -35 -105 -81 -145 -130 -15 -19 -35 -36 -44 -38 -133 -23 -355 -36
-952 -58 -474 -17 -742 -29 -1085 -50 -132 -8 -293 -15 -357 -15 -83 0 -118
-3 -118 -12 0 -14 236 -6 685 22 171 11 481 26 690 35 651 26 1046 48 1111 61
30 6 31 5 26 -25 -2 -17 0 -31 5 -31 6 0 49 46 96 103 112 134 144 164 203
187 27 10 41 19 32 20 -9 0 -28 -4 -43 -10 -23 -9 -24 -8 -16 8 5 9 28 35 50
57 23 21 41 46 41 54 0 11 -4 10 -20 -4 -18 -16 -20 -16 -20 -2 0 24 -37 21
-87 -7z m71 3 c-11 -19 -97 -69 -118 -69 -20 0 -20 0 -1 20 37 36 137 77 119
49z m-139 -91 c-19 -11 -30 -5 -21 11 4 6 14 7 22 4 15 -5 14 -7 -1 -15z m-55
-178 c-101 -111 -114 -120 -62 -44 32 49 122 134 140 134 2 0 -33 -41 -78 -90z"
              />
              <path
                d="M1335 2480 c-4 -6 -11 -7 -18 -3 -6 4 -31 -16 -58 -47 -51 -58 -57
-80 -11 -39 15 14 38 33 51 44 l25 20 -22 -36 c-12 -20 -22 -39 -22 -43 0 -17
34 -1 85 40 49 40 56 44 49 23 -21 -64 6 -87 63 -54 15 9 19 13 8 9 -53 -18
-65 -17 -65 5 0 12 7 36 16 52 8 17 13 33 10 36 -3 3 -33 -18 -66 -46 -85 -70
-98 -69 -43 5 13 17 23 34 23 37 0 11 -18 8 -25 -3z"
              />
              <path d="M4228 2383 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
              <path
                d="M3545 2170 l-90 -6 100 -1 c55 -1 111 3 125 7 22 7 21 8 -10 7 -19 0
-75 -4 -125 -7z"
              />
              <path
                d="M2973 2153 c75 -2 199 -2 275 0 75 1 13 3 -138 3 -151 0 -213 -2
-137 -3z"
              />
              <path
                d="M1774 2141 c-5 -5 -121 -14 -259 -20 -316 -15 -385 -21 -385 -34 0
-6 26 -8 73 -4 39 4 122 11 182 17 61 5 211 12 335 16 124 3 423 12 665 19
242 6 384 13 315 13 -69 1 -298 -3 -509 -8 -256 -7 -387 -7 -395 0 -7 5 -17 6
-22 1z"
              />
            </g>
          </svg>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
