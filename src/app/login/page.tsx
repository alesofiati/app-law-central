import { Button } from "@/components/ui/button"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login'
}

export default function Login() {
    return (
        <div>
            <Button>Click me</Button>
        </div>
    )
}
