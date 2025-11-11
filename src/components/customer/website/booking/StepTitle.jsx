import { cn } from '@/lib/utils'
import React from 'react'

const StepTitle = ({ title, className }) => {
    return (
        <p className={cn('font-bold text-2xl xl:text-4xl font-playfair line-clamp-1', className)}>{title || ''}</p>
    )
}

export default StepTitle