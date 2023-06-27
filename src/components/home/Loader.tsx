import { FC, useCallback, useEffect, useState } from 'react'
import anime from 'animejs'
import { Box } from '../shared'
import { LogoApp } from '../ui'

interface Props {
    onFinish: () => void;
}

export const Loader: FC<Props> = ({ onFinish }) => {
    const [isMounted, setIsMounted] = useState(false);

    const animate = useCallback(
      () => {
        const loader = anime.timeline({
            complete: onFinish,
        })

        loader.add({
            targets: '#logo-app',
            delay: 1000,
            duration: 300,
            easing: 'easeInOutSine',
            opacity: 0,
            scale: 0.1,
        });
      },
      [onFinish],
    )
    
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    },[animate])

    return (
        <Box css={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box css={{ opacity: isMounted ? 1 : 0 }}>
                <LogoApp width="150px" height="150px" />
            </Box>
        </Box>
    )
}