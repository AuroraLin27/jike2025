import React, { use } from 'react'
import { request } from '@/utils'
import { useEffect } from 'react'
export default function Layout() {
  useEffect(() => {
    request.get('/user/profile')
  }, [])
  return (
    <div>
      Layout

    </div>
  )
}
