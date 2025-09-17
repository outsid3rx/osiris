import {
  Button,
  Center,
  Flex,
  Paper,
  PasswordInput,
  Title,
} from '@mantine/core'
import { reatomComponent } from '@reatom/npm-react'

import { initSettings } from '~features/init-settings/model'

export const SettingsPage = reatomComponent(({ ctx }) => (
  <Center>
    <Paper shadow="xs" radius="md" p="lg">
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-end"
        direction="column"
        wrap="wrap"
      >
        <Title order={2}>Первая настройка</Title>
        <PasswordInput
          label="Пароль для входа"
          withAsterisk
          placeholder="Пароль для входа"
          radius="md"
          w="100%"
        />
        <Button
          variant="filled"
          disabled={ctx.spy(initSettings.statusesAtom).isPending}
          onClick={() => initSettings(ctx, { password: 'admin' })}
        >
          Далее
        </Button>
      </Flex>
    </Paper>
  </Center>
))
