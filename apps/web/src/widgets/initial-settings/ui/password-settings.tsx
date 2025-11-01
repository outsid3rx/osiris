import { zodResolver } from '@hookform/resolvers/zod'
import { reatomComponent } from '@reatom/npm-react'
import { useForm } from 'react-hook-form'

import { initSettings } from '~features/init-settings'
import {
  SettingsCreatePayload,
  SettingsCreateSchema,
} from '~server/settings/settings.types'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '~shared/shadcn/components/ui'
import { AnimatedStepWidgetWrapper } from '~shared/ui'

export const PasswordSettings = reatomComponent(({ ctx }) => {
  const form = useForm<SettingsCreatePayload>({
    resolver: zodResolver(SettingsCreateSchema),
    defaultValues: {
      password: '',
    },
  })
  const onSubmit = (data: SettingsCreatePayload) => initSettings(ctx, data)

  return (
    <AnimatedStepWidgetWrapper>
      <Form {...form}>
        <form
          id="settings"
          className="w-full max-w-sm m-auto"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid w-full max-w-sm items-center gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль для входа</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Пароль для входа"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </AnimatedStepWidgetWrapper>
  )
})
