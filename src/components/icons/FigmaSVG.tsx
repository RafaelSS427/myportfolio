import { useThemeUncontrolled } from '@/hooks'

interface Props {
    size?: string;
}

export const FigmaSVG = ({ size = '40px' }: Props) => {
    const [, colorTwo] = useThemeUncontrolled().colorsContrast

    return (
        <svg
            // width={size}
            // height={size}
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
                <g clipPath="url(#a)">
                    <path
                        fill={colorTwo}
                        fillRule="evenodd"
                        d="M54.3 71.036C46.276 65.636 41 56.47 41 46.073c0-15.867 12.288-28.864 27.867-29.993V16H122.2v.023c16.052.63 28.872 13.843 28.872 30.05 0 10.397-5.277 19.562-13.299 24.963 8.022 5.4 13.299 14.566 13.299 24.964 0 16.609-13.464 30.073-30.072 30.073a29.961 29.961 0 0 1-19.888-7.515v8.476c.022.296.033.595.033.897v28.191c0 10.976-8.901 19.878-19.878 19.878H71.073C54.464 176 41 162.536 41 145.927c0-10.397 5.277-19.562 13.3-24.963C46.276 115.563 41 106.398 41 96c0-10.397 5.277-19.563 13.3-24.964Zm-1.224-24.963c0-9.94 8.057-17.997 17.997-17.997H89.07V64.07H71.073c-9.94 0-17.997-8.058-17.997-17.997ZM121 64.07h-17.997V28.076H121c9.939 0 17.997 8.057 17.997 17.997 0 9.939-8.058 17.997-17.997 17.997Zm-49.927 49.927c-9.94 0-17.997-8.058-17.997-17.997s8.057-17.997 17.997-17.997H89.07v35.994H71.073Zm0 49.928c-9.94 0-17.997-8.059-17.997-17.998 0-9.939 8.057-17.996 17.997-17.996H89.07v28.191a7.805 7.805 0 0 1-7.803 7.803H71.073ZM121 113.997c9.939 0 17.997-8.058 17.997-17.997 0-9.94-8.058-17.997-17.997-17.997-9.94 0-17.997 8.058-17.997 17.997s8.057 17.997 17.997 17.997Z"
                        clipRule="evenodd"
                    />
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#ffffff" d="M0 0h192v192H0z" />
                    </clipPath>
                </defs>
            </g>
        </svg>
    )
}
