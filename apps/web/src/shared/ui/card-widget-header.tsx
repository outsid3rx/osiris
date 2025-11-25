import {
  CardDescription,
  CardHeader,
  CardTitle,
} from '~shared/shadcn/components/ui'

interface IProps {
  title?: string
  description?: string
}

export const CardWidgetHeader = ({ description, title }: IProps) => (
  <CardHeader>
    {title && <CardTitle>{title}</CardTitle>}
    {description && <CardDescription>{description}</CardDescription>}
  </CardHeader>
)
