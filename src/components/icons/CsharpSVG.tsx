import { useThemeUncontrolled } from '@/hooks'

export const CsharpSVG = () => {

    const [, colorOne] = useThemeUncontrolled().colorsContrast

    return (
        <svg
            width="100%"
            viewBox="0 0 76 76"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            baseProfile="full"
            enableBackground="new 0 0 76.00 76.00"
            xmlSpace="preserve"
            fill={colorOne}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path
                        fill={ colorOne }
                        fillOpacity={1}
                        strokeWidth={0.2}
                        strokeLinejoin="round"
                        d="M 35.9637,46.3383C 35.2899,46.6109 34.4735,46.8293 33.5147,46.9935C 32.5558,47.1577 31.5706,47.242 30.5589,47.2463C 27.6868,47.2162 25.4612,46.3994 23.8821,44.7958C 22.3031,43.1922 21.5026,40.9825 21.4806,38.1666C 21.5404,35.0746 22.4131,32.7666 24.0985,31.2426C 25.784,29.7185 27.9234,28.9582 30.5167,28.9616C 31.6788,28.9711 32.7115,29.0763 33.615,29.277C 34.5184,29.4778 35.2872,29.7171 35.9215,29.9949L 37.2727,24.8317C 36.6903,24.525 35.7966,24.2474 34.5914,23.9991C 33.3862,23.7507 31.9436,23.6192 30.2634,23.6046C 25.8496,23.6336 22.1919,24.9359 19.2904,27.5117C 16.3889,30.0874 14.8847,33.7629 14.7778,38.538C 14.7826,42.5911 16.0298,45.9268 18.5194,48.545C 21.009,51.1632 24.7126,52.5178 29.63,52.6088C 31.3577,52.5921 32.8532,52.4566 34.1164,52.2024C 35.3796,51.9482 36.305,51.6755 36.8927,51.3843L 35.9637,46.3383 Z "
                    />
                    <path
                        fill={ colorOne }
                        fillOpacity={1}
                        strokeWidth={0.2}
                        strokeLinejoin="round"
                        d="M 48.0013,40.8762L 48.6769,35.7567L 52.5194,35.7567L 51.886,40.8762L 48.0013,40.8762 Z M 46.3123,52.2234L 47.3679,44.6234L 51.2104,44.6234L 50.1125,52.2234L 53.9128,52.2234L 54.9684,44.6234L 59.1064,44.6234L 59.1064,40.8762L 55.644,40.8762L 56.2774,35.7567L 60.2887,35.7567L 60.2887,32.0095L 56.9107,32.0095L 57.9664,24.8317L 54.2084,24.8317L 53.1527,32.0095L 49.2681,32.0095L 50.3237,24.8317L 46.6079,24.8317L 45.51,32.0095L 41.372,32.0095L 41.372,35.7567L 44.9189,35.7567L 44.2433,40.8762L 40.1475,40.8762L 40.1475,44.6234L 43.6099,44.6234L 42.5121,52.2234L 46.3123,52.2234 Z "
                    />
                </g>
            </g>
        </svg>
    )
}
