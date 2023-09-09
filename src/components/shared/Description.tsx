import { FC } from 'react'
import { cn } from '@nextui-org/react'

interface Props {
    text: string;
    textAlign?: "text-start" | "text-end" | "text-left" | "text-right" | "text-center";
    size?: number;
}

export const Description: FC<Props> = ({ text, textAlign = "text-start", size }) => (
    <p
        className={cn(['text-base', 'tracking-tight', textAlign])}
        style={{ marginBottom: size !== 20 ? 0 : 30 }}
    >
        {text}
    </p>
)