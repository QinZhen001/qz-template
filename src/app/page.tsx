"use client"

import { Button } from '@/components/ui/button'
import { useToast } from '@/lib/hooks/use-toast'
import LogoutDialog from '@/components/Dialog/LogoutDialog'
import { useState } from 'react'
import {useAppSelector,useAppDispatch} from "@/lib/hooks/use-store"
import { setUserInfo } from "@/store/reducers/global"

export default function HomePage() {
  const { toast } = useToast()
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)
  const userInfo = useAppSelector((state) => state.global.userInfo);
  const dispatch = useAppDispatch();

  const showToast = () => {
    toast({
      title: 'Hello',
      description: 'This is a toast',
    })
  }

  const showDialog = () => {
    setLogoutDialogOpen(!logoutDialogOpen)
  }

  const changeUserInfo = () => {
    dispatch(setUserInfo("newUserInfo"))
  }

  return (
    <div className='p-2'>
      <div className="h-6 leading-6 font-bold text-red-600">HomePage</div>
      <div className="h-6 leading-6 my-2">userInfo: {userInfo}</div>
      <div className="space-x-2 mt-2">
        <Button onClick={showToast}>showToast</Button>
        <Button onClick={showDialog}>showDialog</Button>
        <Button onClick={changeUserInfo}>changeUserInfo</Button>
      </div>
      <LogoutDialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}></LogoutDialog>
    </div>
  )
}
