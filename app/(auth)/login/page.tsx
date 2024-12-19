import React, { Suspense } from 'react'
import { LoginForm } from '@/components/auth/LogInForm'

const page = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}><LoginForm /></Suspense>
  )
}

export default page