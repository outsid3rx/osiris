import { reatomComponent } from '@reatom/npm-react'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~shared/shadcn/components/ui'
import { AnimatedStepWidgetWrapper, Icon } from '~shared/ui'
import { useGetAuthRedirect } from '~widgets/initial-settings/model'

export const AuthSettings = reatomComponent(() => {
  const createProviderRedirect = useGetAuthRedirect()

  return (
    <AnimatedStepWidgetWrapper>
      <Card className="w-sm">
        <CardHeader>
          <CardTitle>Необходимо авторизоваться</CardTitle>
          <CardDescription>
            Чтобы продолжить работу авторизуйтесь через один из сервисов
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button size="lg" onClick={createProviderRedirect('google')}>
            <Icon name="google-auth" className="size-5" />
            Войти через Google
          </Button>
          <Button onClick={createProviderRedirect('yandex')} size="lg">
            <Icon name="yandex-auth" className="size-5" />
            Войти c Яндекс ID
          </Button>
        </CardContent>
      </Card>
    </AnimatedStepWidgetWrapper>
  )
})
