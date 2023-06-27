import { FC, PropsWithChildren, useRef } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Box } from './Box'

interface Props extends PropsWithChildren {
    isMounted: boolean;
    classNames: string;
    timeout: number;
}

export const TransitionElement:FC<Props> = ({ isMounted, classNames, timeout, children }) => {
    
  const nodeElement = useRef<any>()
  
    return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition classNames={ classNames } timeout={ timeout } nodeRef={nodeElement}>
                    <Box ref={nodeElement}>
                        { children }
                    </Box>
                </CSSTransition>
            )}
        </TransitionGroup>
    )
}
