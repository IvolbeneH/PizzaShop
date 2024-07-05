'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { toast } from 'sonner'
import Link from "next/link";
import { Mail } from "lucide-react";

const signInForm = z.object({
    email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SingIn() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

    async function handleSignIn(data: SignInForm) {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 1000))

        toast.success('Enviamos um link de autenticação para seu e-mail.')
    }

    return (
        <div className="p-8">
            <Button variant='link' asChild>
                <Link href='/sign-up' className="absolute top-6 right-5 lg:mt-0 mt-[5rem] mr-2 lg:mr-0">
                    Novo estabelecimento
                </Link>
            </Button>
            <div className="w-[350px] flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Acessar painel</h1>
                    <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
                </div>
                <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                    <div className="space-y-2">
                        <Label className="font-semibold text-zinc-50">Seu e-mail</Label>
                        <div className="flex items-center gap-3 justify-center">
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                className="text-base"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        Acessar painel
                    </Button>
                </form>
            </div>
        </div>
    )
}