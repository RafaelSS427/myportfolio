import { useThemeUncontrolled } from '@/hooks'

export const FrontMentorSVG = () => {
    const { selectedColor } = useThemeUncontrolled()

    return (
        <svg width={26} height={23} xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="none">
                <path
                    d="M24.459 12.106a.756.756 0 0 1-.307-.065l-6.438-2.883a.751.751 0 0 1 0-1.37l6.438-2.873a.752.752 0 0 1 .991.379.752.752 0 0 1-.38.991l-4.905 2.189 4.906 2.197a.75.75 0 0 1-.305 1.435z"
                    fill={ selectedColor }
                />
                <path
                    d="M15.686 22.565c-7.078 0-13.266-4.778-15.045-11.62a.749.749 0 1 1 1.451-.378 14.044 14.044 0 0 0 13.594 10.498.75.75 0 0 1 0 1.5z"
                    fill={ selectedColor }
                />
                <path
                    d="M13.102 16.336a.75.75 0 0 1-.75-.75V1.33a.75.75 0 0 1 1.5 0v14.257a.75.75 0 0 1-.75.749z"
                    fill={ selectedColor }
                />
            </g>
        </svg>
    )
}