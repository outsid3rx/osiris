import { reatomComponent } from '@reatom/npm-react'
import { AnimatePresence } from 'motion/react'

import { ESettingsPage, settingsPageAtom } from '~pages/settings/model'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~shared/shadcn/components/ui'
import { LocalSettings, PasswordSettings } from '~widgets/initial-settings/ui'

export const SettingsPage = reatomComponent(({ ctx }) => {
  const getPage = () => {
    switch (ctx.spy(settingsPageAtom)) {
      case ESettingsPage.Password:
        return <PasswordSettings />
      default:
      case ESettingsPage.Local:
        return (
          <LocalSettings
            onSubmit={() => settingsPageAtom(ctx, ESettingsPage.Password)}
          />
        )
    }
  }
  return (
    <main className="m-auto">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatePresence>{getPage()}</AnimatePresence>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="settings" className="w-full">
            Продолжить
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
})
