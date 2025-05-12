import { AutomationDuoToneWhite, HomeDuoToneWhite, RocketDuoToneWhite, SettingsDuoToneWhite } from '@/icons'
import { v4 as uuid } from 'uuid'


type FieldProps = {
    label: string,
    id: string
}

type SideBarProps = {
    icon: React.ReactNode
} & FieldProps

export const SIDEBAR_MENU: SideBarProps[] = [
    {
        id: uuid(),
        label: 'Home',
        icon: <HomeDuoToneWhite/>
    },{
        id: uuid(),
        label: 'Automations',
        icon: <AutomationDuoToneWhite/>
    },{
        id: uuid(),
        label: 'Integrations',
        icon: <RocketDuoToneWhite/>
    },{
        id: uuid(),
        label: 'Settings',
        icon: <SettingsDuoToneWhite/>
    }
]