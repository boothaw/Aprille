const Wave = (props) => {
  return (
    <div className="wave-svg" id={(props?.subtitle, props?.subtitle)}>
      {props?.subtitle && <h2>{props?.subtitle}</h2>}
      {props?.title && <h1>{props?.title}</h1>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="Layer_1"
        x="0px"
        y="0px"
        style={{
          enableBackground: 'new 0 0 1280 146',
        }}
        xmlSpace="preserve"
        viewBox="69.42 64 1141.96 34.07"
        preserveAspectRatio="none"
      >
        <style type="text/css">
          {
            '\n\t\n\t\t.st0{clip-path:url(#SVGID_00000139981935449396369020000013939563884353061762_);fill:none;stroke:#94AFC7;stroke-width:5;stroke-miterlimit:10;}\n'
          }
        </style>
        <g>
          <defs>
            <rect
              id="SVGID_1_"
              x={71.92}
              y={64}
              width={1136.89}
              height={34.07}
            />
          </defs>
          <clipPath id="SVGID_00000101086572670356732530000009520966570079552667_">
            <use
              xlinkHref="#SVGID_1_"
              style={{
                overflow: 'visible',
              }}
            />
          </clipPath>
          <path
            style={{
              clipPath:
                'url(#SVGID_00000101086572670356732530000009520966570079552667_)',
              fill: 'none',
              stroke: '#94AFC7',
              strokeWidth: 5,
              strokeMiterlimit: 10,
            }}
            d="   M71.92,81.04c17.76-16.65,53.29-16.65,71.06,0s53.29,16.65,71.06,0c17.77-16.65,53.29-16.65,71.06,0   c17.77,16.65,53.29,16.65,71.06,0c17.76-16.65,53.29-16.65,71.06,0c17.76,16.65,53.29,16.65,71.06,0   c17.76-16.65,53.29-16.65,71.06,0c17.76,16.65,53.29,16.65,71.06,0c17.77-16.65,53.29-16.65,71.06,0   c17.77,16.65,53.29,16.65,71.06,0c17.76-16.65,53.29-16.65,71.06,0c17.76,16.65,53.29,16.65,71.06,0   c17.76-16.65,53.29-16.65,71.06,0s53.29,16.65,71.06,0c17.76-16.65,53.29-16.65,71.06,0c17.77,16.65,53.29,16.65,71.06,0"
          />
        </g>
      </svg>
    </div>
  )
}

export default Wave
