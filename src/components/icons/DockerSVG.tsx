import { useThemeUncontrolled } from '@/hooks'

export const DockerSVG = () => {

    const [, colorOne] = useThemeUncontrolled().colorsContrast
    
    return (
        <svg
            width="100%"
            fill={colorOne}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
                <title>{"docker"}</title>
                <path d="M30.679 13.367c-0.613-0.404-1.366-0.645-2.175-0.645-0.093 0-0.185 0.003-0.276 0.009l0.012-0.001c-0.446 0.001-0.882 0.041-1.306 0.115l0.046-0.007c-0.235-1.357-1.025-2.495-2.122-3.191l-0.019-0.011-0.429-0.248-0.282 0.408c-0.336 0.512-0.599 1.108-0.756 1.745l-0.008 0.039c-0.089 0.324-0.14 0.696-0.14 1.080 0 0.831 0.24 1.605 0.654 2.258l-0.010-0.017c-0.637 0.299-1.381 0.488-2.164 0.524l-0.013 0h-19.729c-0.516 0.001-0.934 0.418-0.936 0.933v0c-0.001 0.056-0.001 0.123-0.001 0.19 0 1.751 0.317 3.428 0.897 4.977l-0.032-0.098c0.558 1.633 1.612 2.975 2.98 3.881l0.028 0.017c1.744 0.903 3.808 1.432 5.995 1.432 0.207 0 0.412-0.005 0.617-0.014l-0.029 0.001c0.018 0 0.039 0 0.060 0 1.272 0 2.515-0.121 3.72-0.352l-0.123 0.020c1.795-0.336 3.395-0.939 4.845-1.773l-0.074 0.039c1.257-0.735 2.331-1.621 3.245-2.652l0.012-0.014c1.325-1.56 2.403-3.381 3.145-5.365l0.041-0.125h0.276c0.055 0.002 0.119 0.004 0.183 0.004 1.226 0 2.34-0.481 3.163-1.265l-0.002 0.002c0.377-0.358 0.676-0.793 0.873-1.281l0.009-0.024 0.122-0.359zM3.79 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 14.849h2.644c0.127 0 0.231-0.103 0.231-0.231 0 0 0 0 0-0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0 0-0 0-0 0-0.128 0-0.232 0.104-0.232 0.232 0 0 0 0 0 0v0 2.355c0.001 0.128 0.104 0.231 0.232 0.231v0zM11.132 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0.127 0.103 0.231 0.231 0.231v0zM14.788 14.849h2.643c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 11.461h2.644c0.128-0.001 0.231-0.104 0.231-0.232 0 0 0 0 0 0v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.644c-0.128 0-0.231 0.103-0.232 0.231v2.355c0.001 0.128 0.104 0.231 0.232 0.232h0zM11.132 11.461h2.646c0.127-0.001 0.23-0.105 0.23-0.232v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0.001 0.128 0.103 0.231 0.231 0.232h0zM14.788 11.461h2.643c0.128-0.001 0.231-0.104 0.232-0.232v-2.355c-0.001-0.128-0.104-0.231-0.232-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0 0.128 0.103 0.231 0.231 0.232h0zM14.788 8.073h2.643c0 0 0 0 0 0 0.128 0 0.232-0.104 0.232-0.232 0-0 0-0 0-0v0-2.356c-0.001-0.128-0.104-0.231-0.232-0.231 0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM18.475 14.849h2.644c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.644c0 0 0 0-0 0-0.128 0-0.231 0.103-0.231 0.231v2.356c0 0.127 0.103 0.231 0.231 0.231v0z" />
            </g>
        </svg>
    )
}
