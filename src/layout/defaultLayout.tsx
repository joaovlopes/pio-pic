import { Outlet } from 'react-router-dom'
import { Header } from '@/pages//header/index'

export function Defaultlayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}