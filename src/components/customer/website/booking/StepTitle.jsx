import { cn } from '@/lib/utils'
import React from 'react'

const StepTitle = ({ title, className }) => {
    return (
        <p className={cn('font-bold text-4xl font-playfair', className)}>{title || ''}</p>
    )
}

export default StepTitle