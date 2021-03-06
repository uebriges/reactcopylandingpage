/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import './App.css';
import appIcon from './images/app-icon.png';
import siteLogo from './images/sitelog.png';

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 67px;
  background-color: #f0efea;
  color: #464a3c;
`;

const headerContentLeft = css`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  margin: 10px 15px 15px 15px;
`;

const headerContentRight = css`
  display: flex;
  justify-content: flex-end;
  line-height: 2.6rem;
  align-items: center;

  a {
    margin: 0px 17px;
    height: 40px;
    text-decoration: none;
    font-size: 16px;
  }
`;

const headerContent = css`
  justify-content: space-between;
  display: flex;
  width: 50%;
`;

const siteLogoStyle = css`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const headerLogoRight = css`
  width: 126px;
`;

const h2 = css`
  font-size: 20px;
`;

const sectionOneRoot = css`
  background-color: #f0efea;
  width: 100vw;
`;

const sectionOne = css`
  background-color: #f0efea;
  padding-top: 19px;
  color: #464a3c;
  width: 48%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  img {
    height: 187px;
    margin-bottom: 20px;
    margin-right: 12px;
  }

  h1 {
    font-weight: 100;
    letter-spacing: 3px;
    font-size: 55px;
    margin-top: 0px;
    margin-bottom: 35px;
  }

  h2 {
    font-weight: 200;
    font-size: 29px;
    margin-bottom: 0px;
  }

  p {
    letter-spacing: 2px;
    font: 1.5rem 'Open Sans', 'Lucida Grande', 'Lucida Sans Unicode', Helvetica,
      Arial, Verdana, sans-serif;
    font-size: 16px;
    margin-top: 0px;
    line-height: 2;
    margin-bottom: 33px;
  }

  a:nth-of-type(1) {
    margin-right: 0 45px;
  }
  a:nth-of-type(2) {
    margin-left: 0 45px;
  }

  a {
    margin-right: 45px;
    padding: 3px 30px;
    border: 1px solid;
    font-weight: 700;
    border-radius: 5px;
    color: #fff;
    background-color: #677777;
    text-decoration: none;
    font-size: 17px;
  }
`;

function App() {
  return (
    <div className="App">
      <header css={header}>
        <div css={headerContent}>
          <div css={headerContentLeft}>
            <img src={siteLogo} alt="bug" css={siteLogoStyle} />
            <h2 css={h2}>Swift Publisher</h2>
          </div>
          <div css={headerContentRight}>
            <a href="#1">Support</a>
            <a href="#1">Store</a>
            <a href="#1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 121.719 28.906"
                className="belight-logo-svg"
                css={headerLogoRight}
              >
                <path
                  className="belight-logo-path"
                  d="M119.347,12.367 C119.231,12.400 119.130,12.488 119.282,12.638 C121.012,14.369 122.060,16.520 121.390,18.210 C120.324,20.898 115.327,21.387 111.856,19.931 C110.862,19.513 110.103,18.978 109.549,18.367 C109.395,18.197 109.284,18.189 109.063,18.354 C106.717,20.129 104.314,20.812 103.702,19.878 C103.088,18.945 104.496,16.748 106.843,14.975 C106.936,14.905 107.029,14.839 107.121,14.776 C107.294,14.658 107.439,14.659 107.676,14.773 C108.081,14.969 108.545,15.078 109.049,15.078 C110.872,15.078 112.568,13.661 113.035,11.839 C113.076,11.681 113.216,11.637 113.435,11.637 C114.378,11.637 115.273,11.050 115.748,10.212 C115.828,10.071 115.895,9.924 115.950,9.771 C115.951,9.766 115.954,9.763 115.955,9.760 C116.009,9.603 116.051,9.441 116.075,9.274 C116.265,7.971 115.390,6.913 114.123,6.913 C114.044,6.913 113.967,6.919 113.890,6.929 C113.595,6.968 113.448,6.823 113.386,6.553 C113.061,5.153 111.772,4.153 110.067,4.153 C109.147,4.153 108.254,4.444 107.503,4.932 C107.235,5.106 106.980,5.150 106.771,4.904 C105.949,3.931 104.718,3.331 103.262,3.331 C101.166,3.331 99.174,4.574 98.034,6.381 C97.851,6.672 97.590,6.685 97.322,6.578 C96.837,6.386 96.300,6.278 95.721,6.278 C92.993,6.278 90.447,8.554 90.038,11.361 C89.831,12.784 90.262,14.150 90.878,14.999 C91.095,15.299 90.992,15.471 90.793,15.656 C89.901,16.485 89.198,17.611 89.006,18.924 C88.678,21.174 90.185,22.994 92.368,22.994 C92.765,22.994 93.154,22.930 93.530,22.816 C93.844,22.722 94.003,22.816 94.101,22.988 C94.607,23.871 95.378,24.559 96.335,24.957 C96.388,24.980 96.444,25.001 96.498,25.023 C96.600,25.060 96.702,25.094 96.807,25.125 C96.876,25.145 96.944,25.166 97.014,25.182 C97.413,25.282 97.832,25.339 98.274,25.339 C99.846,25.339 101.357,24.667 102.531,23.595 C102.675,23.463 102.848,23.408 103.080,23.520 C103.530,23.734 104.044,23.853 104.602,23.853 C106.488,23.853 108.259,22.495 108.920,20.678 C109.005,20.445 109.199,20.342 109.415,20.421 C109.729,20.536 110.141,20.976 110.310,21.641 C110.508,22.419 110.445,23.127 110.232,23.848 C110.054,24.456 109.575,25.249 108.640,25.968 C107.453,26.880 105.963,27.285 104.505,27.285 C104.074,27.285 103.654,27.243 103.249,27.160 C103.003,27.111 102.923,27.113 102.692,27.270 C101.115,28.332 99.329,28.905 97.536,28.905 C95.313,28.905 93.319,27.983 91.989,26.390 C91.860,26.233 91.752,26.179 91.549,26.194 C87.577,26.486 84.182,23.485 84.900,19.278 C85.118,18.007 85.964,16.585 87.005,15.540 C87.124,15.421 87.151,15.203 87.032,15.008 C86.341,13.874 85.996,12.713 86.089,11.370 C86.456,6.107 91.302,2.905 95.978,3.093 C96.216,3.102 96.452,3.111 96.686,3.129 C97.082,3.160 97.120,3.102 97.389,2.833 C99.094,1.131 101.032,-0.044 103.694,0.011 C105.103,0.040 106.428,0.401 107.534,1.113 C107.897,1.346 107.935,1.334 108.333,1.259 C108.823,1.168 109.312,1.123 109.797,1.123 C112.195,1.123 114.249,2.195 115.491,4.044 C115.687,4.334 115.796,4.423 115.993,4.492 C117.972,5.189 119.138,7.181 118.795,9.533 C118.769,9.710 118.882,9.806 119.018,9.786 C120.517,9.577 121.698,9.896 121.730,10.572 C121.764,11.214 120.739,11.957 119.347,12.367 ZM114.397,14.120 C113.777,14.120 113.199,14.636 113.106,15.273 C113.013,15.912 113.440,16.428 114.062,16.428 C114.682,16.428 115.259,15.912 115.352,15.273 C115.444,14.636 115.018,14.120 114.397,14.120 ZM77.670,10.417 C78.065,10.415 78.394,10.411 78.583,10.403 C79.492,10.368 79.063,11.314 78.472,12.099 C77.878,12.884 77.527,13.115 76.867,13.152 C76.726,13.159 76.464,13.163 76.136,13.165 C75.497,14.326 74.938,15.361 74.668,15.900 C73.957,17.312 73.258,18.708 75.726,17.517 C76.010,17.379 76.388,17.156 76.666,16.995 C77.294,16.631 77.756,16.344 77.821,16.959 C77.932,18.010 76.952,19.704 76.171,20.213 C75.875,20.405 75.580,20.582 75.168,20.755 C74.242,21.147 73.526,21.364 72.681,21.503 C70.632,21.838 69.517,21.227 69.324,20.081 C68.944,20.284 68.534,20.475 68.096,20.632 C66.089,21.354 65.000,21.640 63.840,21.301 C62.971,21.048 62.316,19.924 63.571,17.883 C64.824,15.841 65.618,15.159 64.974,14.694 C64.331,14.228 63.240,14.861 62.732,15.469 C62.225,16.077 61.573,16.921 61.090,17.789 C60.521,18.812 60.059,19.775 59.766,20.385 C59.473,20.996 59.197,21.358 58.180,21.449 C57.163,21.539 56.331,21.528 55.796,21.466 C55.259,21.405 55.294,20.942 55.828,20.146 C56.362,19.352 57.259,17.490 58.006,16.217 C58.752,14.945 63.679,6.156 63.679,6.156 C64.024,5.467 64.426,5.151 65.175,5.083 C65.925,5.015 66.560,5.049 66.855,5.081 C67.149,5.112 68.042,5.278 67.721,5.754 C67.401,6.231 64.468,11.447 64.307,11.738 C64.148,12.031 63.872,12.400 64.488,12.010 C65.101,11.617 67.456,10.835 68.768,11.310 C70.082,11.787 70.048,13.097 69.541,13.893 C69.034,14.686 68.431,15.694 68.030,16.331 C67.629,16.966 67.105,18.287 68.737,17.644 C69.319,17.414 69.861,17.136 70.322,16.873 C70.851,15.881 71.590,14.537 72.362,13.152 C72.262,13.152 72.171,13.152 72.102,13.152 C71.245,13.152 71.501,12.491 72.158,11.349 C72.817,10.208 74.121,10.403 73.623,10.403 C73.623,10.403 73.728,10.403 73.894,10.406 C74.558,9.218 75.134,8.192 75.455,7.606 C75.999,6.616 77.753,6.669 77.753,6.669 C78.797,6.669 79.946,6.588 79.192,7.794 C78.915,8.236 78.333,9.246 77.670,10.417 ZM51.513,24.852 C49.998,26.830 48.070,27.784 45.449,27.945 C43.842,28.044 41.470,27.231 40.825,25.357 C40.706,25.013 40.709,24.903 40.774,24.465 C40.826,24.106 41.179,22.948 42.336,22.038 C43.030,21.492 43.690,21.541 43.682,21.976 C43.655,23.511 44.404,24.893 46.614,24.251 C48.029,23.839 48.927,22.478 49.717,21.047 C50.614,19.424 51.406,17.553 52.320,15.775 C52.831,14.724 53.352,13.659 53.396,13.572 C53.481,13.412 53.756,13.015 53.610,12.928 C53.465,12.841 52.443,12.702 51.231,13.236 C50.174,13.703 48.919,14.734 48.473,15.971 C47.790,17.863 49.129,17.810 49.508,17.707 C50.093,17.546 50.448,17.556 50.177,18.469 C49.876,19.484 48.158,22.270 45.480,21.098 C44.782,20.793 44.378,20.161 44.229,19.349 C43.718,19.747 43.186,20.107 42.716,20.334 C41.258,21.036 38.072,22.083 36.834,20.726 C36.522,20.384 36.406,19.934 36.424,19.425 C35.291,20.277 33.826,21.057 31.660,21.316 C28.063,21.744 27.803,19.174 28.941,16.961 C30.079,14.748 35.127,5.827 35.967,4.405 C36.586,3.356 37.548,3.263 38.444,3.263 C39.341,3.263 40.593,3.351 40.584,3.905 C40.577,4.293 39.354,6.226 38.558,7.582 C37.762,8.938 34.083,15.105 33.293,16.890 C32.505,18.674 34.979,17.318 36.671,16.176 C37.232,15.797 37.756,15.422 38.213,15.085 C38.327,14.899 38.439,14.718 38.543,14.552 C39.635,12.803 40.194,11.883 40.643,11.287 C41.354,10.345 42.503,10.389 43.157,10.385 C44.588,10.376 44.951,10.680 44.238,11.733 C43.390,12.984 41.817,15.379 41.462,16.159 C40.999,17.175 40.523,18.460 42.696,17.229 C43.461,16.795 44.193,16.258 44.808,15.781 C45.278,14.690 45.989,13.599 46.914,12.676 C50.315,9.283 54.574,9.702 55.185,9.837 C55.796,9.975 56.686,10.251 56.449,10.681 C56.224,11.090 56.001,11.331 55.978,11.355 C56.484,11.369 57.204,11.406 57.778,11.509 C57.975,11.545 59.067,11.661 58.491,12.437 C55.686,16.221 54.487,20.972 51.513,24.852 ZM45.981,8.704 C45.607,9.197 45.172,9.307 44.823,9.234 C44.475,9.160 43.745,9.031 42.888,9.179 C41.980,9.336 42.044,8.887 42.150,8.632 C42.254,8.376 42.628,7.754 43.056,7.170 C43.056,7.170 43.480,6.588 43.971,6.461 C44.461,6.333 45.244,6.260 46.450,6.387 C47.028,6.449 47.111,6.815 46.835,7.348 C46.576,7.844 46.176,8.449 45.981,8.704 ZM21.365,17.657 C21.365,17.657 21.660,19.451 25.280,18.309 C25.750,18.160 26.188,17.923 26.704,17.732 C27.120,17.578 27.389,17.815 27.303,18.269 C27.178,18.922 26.600,19.921 25.747,20.468 C25.068,20.905 24.640,21.011 23.887,21.200 C23.176,21.378 21.858,21.432 21.051,21.306 C17.079,20.690 16.762,16.212 18.980,13.053 C20.525,10.854 23.010,9.946 24.648,9.707 C26.116,9.493 28.957,9.724 29.293,11.929 C29.611,14.026 27.951,15.471 25.787,16.479 C23.783,17.414 21.365,17.657 21.365,17.657 ZM23.887,12.538 C21.826,13.565 21.494,15.080 21.494,15.080 C21.494,15.080 23.565,15.081 24.994,14.155 C26.542,13.155 25.947,11.512 23.887,12.538 ZM15.052,11.704 C15.428,11.861 15.786,12.042 16.113,12.254 C18.281,13.788 17.314,17.375 15.338,19.297 C13.310,21.269 10.952,22.131 8.404,21.222 C7.655,20.953 7.161,20.169 7.066,19.668 C6.852,18.544 7.239,17.889 7.642,17.356 C8.017,16.861 8.932,15.970 9.200,16.879 C9.510,17.931 10.506,18.281 11.394,17.896 C12.590,17.379 13.746,15.866 13.276,14.341 C12.722,12.542 9.978,12.548 8.794,13.260 C7.464,15.940 6.178,18.380 4.542,20.911 C3.923,21.744 -0.626,21.448 0.099,20.252 C2.214,17.200 4.300,14.033 5.514,11.828 C6.870,9.369 7.359,8.281 7.673,7.602 C5.378,9.098 4.260,10.394 3.417,11.184 C3.079,11.500 2.789,11.518 2.605,11.184 C2.364,10.746 2.293,10.023 2.471,9.167 C2.782,7.674 3.276,7.256 3.622,6.927 C5.479,5.154 8.269,3.918 11.697,3.341 C15.087,2.769 17.455,3.558 18.441,5.496 C19.441,7.459 18.717,9.317 17.075,10.550 C16.436,11.029 15.755,11.403 15.052,11.704 ZM14.668,6.713 C14.500,5.929 13.658,5.613 12.476,5.716 C12.465,5.755 12.461,5.789 12.447,5.833 C12.120,6.865 11.109,8.509 10.326,10.134 C10.216,10.360 10.111,10.575 10.003,10.796 C12.632,10.437 15.011,8.309 14.668,6.713 Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <body>
        <section css={sectionOneRoot}>
          <section css={sectionOne}>
            <img src={appIcon} alt="Swift Publisher page with ladybug" />
            <h1>Swift Publisher</h1>
            <h2>Desktop Publishing Software for Mac</h2>
            <p>
              Swift Publisher is a super-intuitive, all-purpose page layout and
              desktop publishing app for Mac. It doesn’t matter what kind of
              document you need to layout and print — from brochures and
              calendars to CD labels and eye-catching, professional business
              cards — Swift Publisher covers it all.
            </p>
            <section>
              <a href="#1">Get Free Trial</a>
              <a href="#1">Buy Now $ 19.99</a>
            </section>
          </section>
        </section>
        <section>{/* Embed video */}</section>
        <section>
          <h2>What Can I Design with Swift Publisher 5?</h2>
          <div>
            <div>
              <img src="" alt="Brochures and Flyers" />
              <br />
              <p>Brochures and Flyers</p>
            </div>
          </div>
          <div>
            <img src="" alt="Business Cards" />
            <br />
            <p>Business Cards</p>
          </div>
          <div>
            <img src="" alt="Discs and Covers" />
            <br />
            <p>Discs and Covers</p>
          </div>
          <div>
            <img src="" alt="Labels and Envelopes" />
            <br />
            <p>Labels and Envelopes</p>
          </div>
        </section>
        <section>
          <div>
            <h2>500+ Professional Templates</h2>
            <p>
              Swift Publisher contains over 500 templates of diverse print
              projects, including bi-fold and tri-fold brochures, catalogs,
              business cards, social media, disc labels and covers, address
              labels and much more. Additional free templates are also
              available.
            </p>
            <img src="" alt="Macbook front" />
          </div>
          <div>
            <div>
              <img src="" alt="Several images in grid" />
              <h2>Rich Clipart Collections</h2>
              <p>
                Swift Publisher comes with 2,000 free clipart images and 100
                image masks. You can extend that with 40,000 images and 100
                additional fonts with <a href="#1">Extras Pack</a> for just
                $9.99.
              </p>
            </div>
            <div>
              <img src="" alt="ArtText" />
              <h2>Headings to Stand Out</h2>
              <p>
                A collection of 2D and 3D state of the art heading presets adds
                to the professional look of your page layout documents. Want to
                create your own text styles?{' '}
                <a href="#1">Art Text 4 integration</a> will assist you with
                that (Art Text 4 purchase required).
              </p>
            </div>
          </div>
          <div>
            <div>
              <h2>Two-Page Spreads</h2>
              <p>
                With Swift Publisher for Mac you can view and edit two pages
                side-by-side. Specific to professional desktop publishing
                software, this functionality is very convenient for working with
                magazines, newspapers and other double-page layouts.
              </p>
            </div>
            <div>
              <img src="" alt="Single Webpage with artickel and color picker" />
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="Multilayer page" />
            </div>
            <div>
              <h2>Master Pages</h2>
              <p>
                Found only in the best DTP apps, Master pages are a powerful
                tool for creating repeating content: headers, footers, page
                numbers and common background for your documents.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h2>Import from Media Libraries</h2>
              <p>
                Easily access your albums, collections and favorites from Apple
                Photos (iPhoto, Aperture), iTunes library or from any folder in
                the Finder.
              </p>
            </div>
            <div>
              <img src="" alt="Gallery and context menu" />
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="Text direction adjustment context menu" />
              <h2>Text Tools</h2>
              <p>
                Regular text is added with an adjustable Text Box tool. In
                addition, Swift Publisher has Circular Text and Vertical Text
                tools that are useful when designing discs and jewel case
                inserts.
              </p>
            </div>
            <div>
              <img src="" alt="Text style adjustment context menu" />
              <h2>Customizable Text Styles</h2>
              <p>
                Set up and save your own text styles for any document just once
                and apply them with one click of the mouse.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>Extensive Design Tools</h2>
            <p>
              Using drawing tools, gradient fills, shadows, image tiling, over
              100 image masks, a built-in image editor and other tools, you'll
              find that the design solutions are endless.
            </p>
            <img src="" alt="Design tool screenshot" />
          </div>
          <div>
            <div>
              <img src="" alt="Text marking tool" />
            </div>
            <div>
              <h2>Flowing Text Boxes</h2>
              <p>
                Text boxes can be linked to make your text flow from one text
                box into another, even when text boxes are on different pages.
                That is great for complex, multi-column layouts such as
                self-publishing magazines and books.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h2>Dynamic Data Fields and Merge Printing</h2>
              <p>
                The program supports dynamic fields which pull data from Apple
                Contacts or a text file. You can use these to batch-print
                mailing and barcode labels, business cards or name badges.
              </p>
              <img src="" alt="Text marking tool" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <img src="" alt="Retro" />
            </div>
            <div>
              <h2>Unlimited Layers</h2>
              <p>
                Swift Publisher supports a layer-based workflow for creating
                complex designs with no mess. Layers have a dedicated tab in the
                Inspector, where you can also reorder them or make them
                invisible and non-printable.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h2>Print at Home</h2>
              <p>
                Swift Publisher supports hundreds of paper layouts for business
                cards, disc and shipping labels (from Avery, Memorex, Neato and
                others) and also facilitates the creation of custom layouts.
                Supported printers include HP, Epson, Canon and other printers
                with a disc tray for direct-to-disc printing, as well as DYMO,
                Zebra, Brother, Seiko and Primera printers to print on label
                rolls.
              </p>
              <img src="" alt="Text marking tool" />
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="Articles layered" />
            </div>
            <div>
              <h2>Print at a Print Shop</h2>
              <p>
                When exporting your work to graphic file formats (PNG, PDF,
                TIFF, JPEG and EPS), easily comply with the print shop
                specifications by selecting either RGB or CMYK color model and
                setting up the required bleed size. Opt for converting text to
                curves to avoid issues with fonts, when submitting a document to
                a print shop.
              </p>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
