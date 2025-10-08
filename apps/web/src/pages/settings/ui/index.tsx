import { reatomComponent } from '@reatom/npm-react'
import { useTranslation } from 'react-i18next'

import { initSettings } from '~features/init-settings'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '~shared/shadcn/components/ui/'

export const SettingsPage = reatomComponent(({ ctx }) => {
  const { t } = useTranslation('initial-setup')

  return (
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle>{t('modal.title')}</CardTitle>
        <CardDescription>
          Сейчас нужно установить пароль, который будет использоваться для входа
          в приложение
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="password">Пароль для входа</Label>
          <Input id="password" type="password" placeholder="Пароль для входа" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          disabled={ctx.spy(initSettings.statusesAtom).isPending}
          onClick={() => initSettings(ctx, { password: 'admin' })}
          variant="default"
          className="w-full"
        >
          Далее
        </Button>
      </CardFooter>
    </Card>
  )
})
