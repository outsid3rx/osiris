import { motion } from 'motion/react'
import { ComponentProps, PropsWithChildren } from 'react'

export const AnimatedStepWidgetWrapper = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof motion.div>>) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.2 }}
    {...props}
  >
    {children}
  </motion.div>
)
