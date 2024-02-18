"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Redirect = ({params}) => {
    const router = useRouter()
    router.push("/dashboard/0")
  return (
    <div>redirecting...</div>
  )
}

export default  Redirect