import { zodResolver } from '@hookform/resolvers/zod'
import { reatomComponent } from '@reatom/npm-react'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~shared/shadcn/components/ui'
import { AnimatedStepWidgetWrapper } from '~shared/ui'

import {
  localSettingsAtom,
  LocalSettingsSchema,
  LocalSettingsType,
  useLocalSettings,
} from '../model'

interface IProps {
  onSubmit: VoidFunction
}

export const LocalSettings = reatomComponent<IProps>(({ ctx, onSubmit }) => {
  const { handleThemeSwitch, handleLanguageSwitch } = useLocalSettings()
  const form = useForm<LocalSettingsType>({
    resolver: zodResolver(LocalSettingsSchema),
    defaultValues: ctx.get(localSettingsAtom),
  })

  const handleSubmit = (data: LocalSettingsType) => {
    localSettingsAtom(ctx, data)
    handleThemeSwitch(data.theme)
    handleLanguageSwitch(data.lang)
    onSubmit()
  }

  return (
    <AnimatedStepWidgetWrapper>
      <Form {...form}>
        <form
          className="w-full max-w-sm m-auto"
          onSubmit={form.handleSubmit(handleSubmit)}
          id="settings"
        >
          <div className="grid w-full items-center gap-3">
            <FormField
              control={form.control}
              name="lang"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Язык</FormLabel>
                  <FormControl>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите язык интерфейса" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ru">Русский</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Тема</FormLabel>
                  <FormControl>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите тему интерфейса" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">Системная</SelectItem>
                        <SelectItem value="light">Светлая</SelectItem>
                        <SelectItem value="dark">Темная</SelectItem>
                      </SelectContent>
                    </Select>
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
