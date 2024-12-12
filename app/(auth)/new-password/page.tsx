import React, { Suspense } from 'react'
import { NewPasswordForm } from '@/components/auth/NewPasswordForm'

const page = () => {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <NewPasswordForm />
        </Suspense>
        {/* <NewPasswordForm /> */}
    </div>
  )
}

export default page