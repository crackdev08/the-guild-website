import React from 'react';

export const AirFranceLogo: React.FunctionComponent = () => {
  return (
    <svg viewBox="0 0 180 75">
      <defs>
        <path id="a" d="M0 .314h149.83v14.152H0z" />
        <path id="c" d="M.722.373h22.106v14.9H.722z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 30.673)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            fill="#C4D0E4"
            d="M86.614 8.375h4.334L88.694 4.21l-2.08 4.164zm7.638 5.84l-1.701-2.999h-7.428l-1.534 3h-3.701L87.288.58h3.362l8.37 13.635h-4.767zM6.909 8.376h4.443L9.047 4.21l-2.14 4.164zm7.847 5.84l-1.742-2.999H5.389l-1.59 3H0L7.596.58h3.46l8.61 13.635h-4.912zm22.159-7.374c1.574 0 2.335-.801 2.335-1.702 0-.9-.677-1.643-2.335-1.643h-4.236v3.345h4.236zm3.18 2.251l5.499 5.124h-4.248c-.944 0-1.562-.298-2.056-.773l-3.742-3.634c-.068-.07-.18-.111-.322-.111h-2.547v4.518h-3.98V.566h8.623c4.471 0 6.36 2.014 6.36 4.238 0 2.586-2.308 3.825-3.587 4.288zm30.99-2.251c1.575 0 2.332-.801 2.332-1.702 0-.9-.674-1.643-2.332-1.643H66.85v3.345h4.235zm3.177 2.251l5.502 5.124h-4.248c-.944 0-1.565-.298-2.055-.773l-3.742-3.634c-.069-.07-.183-.111-.323-.111h-2.546v4.518h-3.981V.566h8.623c4.472 0 6.356 2.014 6.356 4.238 0 2.586-2.304 3.825-3.586 4.288zm61.757 5.124V.566h13.813v2.93h-9.832v2.357h9.68v2.932h-9.68v2.5h9.791v2.93h-13.772zm-88.891 0V.566h13.306v2.93h-9.325v3.388h9.114V9.81h-9.114v4.407h-3.981zm86.485-9.245c-1.798-.888-3.826-1.602-6.512-1.602-3.208 0-5.599 1.658-5.599 3.966 0 2.363 2.435 4.036 5.571 4.036 2.587 0 4.642-.661 6.667-1.829v3.376c-1.786.888-4.164 1.55-6.838 1.55-5.456 0-9.75-2.79-9.75-7.133 0-4.276 4.378-7.021 9.738-7.021 2.53 0 4.825.48 6.723 1.254v3.403zm-20.806 9.245L103.24 6.11v8.105h-3.36V.566h2.857l9.437 7.98V.566h3.363v13.65h-2.73zm-91.816-.003h3.981V.565H20.99v13.648z"
            mask="url(#b)"
          />
        </g>
        <g transform="translate(155.218 29.614)">
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <path
            fill="#C4D0E4"
            d="M13.4.37L5.494 11.813c-1.043 1.503-2.732 2.953-4.772 3.109v.35h8.797c2.335 0 4.037-1.518 5.189-3.192L22.828.37H13.4z"
            mask="url(#d)"
          />
        </g>
      </g>
    </svg>
  );
};
