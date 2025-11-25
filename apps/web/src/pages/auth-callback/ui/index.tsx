import { reatomComponent } from '@reatom/npm-react'
import { AnimatePresence } from 'motion/react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Spinner,
} from '~shared/shadcn/components/ui'
import { AnimatedStepWidgetWrapper } from '~shared/ui'

import { callbackAction } from '../model'

const AuthCallbackPage = reatomComponent(({ ctx }) => {
  callbackAction(ctx)

  return (
    <AnimatePresence>
      <AnimatedStepWidgetWrapper>
        <Card className="w-sm">
          <CardHeader>
            <CardTitle>Завершаем авторизацию</CardTitle>
            <CardDescription>
              Еще немного и мы переведем вас в приложение
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-2">
            <Spinner className="size-8" />
            <p className="leading-7 text-gray-500">
              Это может занять несколько секунд
            </p>
          </CardContent>
        </Card>
      </AnimatedStepWidgetWrapper>
    </AnimatePresence>
  )
})

export default AuthCallbackPage
