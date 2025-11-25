import { SidebarProvider } from '~shared/shadcn/components/ui'
import { AppSidebar } from '~widgets/app-sidebar'

const DashboardPage = () => (
  <SidebarProvider>
    <AppSidebar />
  </SidebarProvider>
)

export default DashboardPage
