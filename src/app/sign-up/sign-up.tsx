"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { toast } from 'sonner'
import Link from "next/link";

const singUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
})

type SingUpForm = z.infer<typeof singUpForm>

export function SingUp() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SingUpForm>()

    async function handleSingUp(data: SingUpForm) {

        try {
            console.log(data)
            await new Promise((resolve) => setTimeout(resolve, 1000))

            toast.success('Você foi cadastrado com sucesso!')
        }
        catch {
            toast.error('Erro ao se cadastrar.')
        }
    }

    return (
        <div className="p-8">
            <Button variant='link' asChild>
                <Link href='/sign-in' className="absolute top-6 right-5 ">
                    Fazer login
                </Link>
            </Button>
            <div className="w-[350px] flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Criar conta grátis.</h1>
                    <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas!</p>
                </div>
                <form onSubmit={handleSubmit(handleSingUp)} className="space-y-4">
                    <div className="space-y-2">
                        <Label className="font-semibold text-zinc-50">Nome do estabelecimento</Label>
                        <Input
                            id="restaurantName"
                            type="text"
                            {...register('restaurantName')}
                            className="text-base"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="font-semibold text-zinc-50">Seu nome</Label>
                        <Input
                            id="managerName"
                            type="text"
                            {...register('managerName')}
                            className="text-base"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="font-semibold text-zinc-50">Seu e-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            className="text-base"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="font-semibold text-zinc-50">Seu celular</Label>
                        <Input
                            id="phone"
                            type="tel"
                            {...register('phone')}
                            className="text-base"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}

                    >
                        Finalizar cadastro
                    </Button>
                    <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground w-[360px]">
                        Ao continuar, você concorda com os nossos <a className="underline underline-offset-4" href=""> Termos de serviços</a> e <a className="underline underline-offset-4" href=""> políticas de privacidade.</a>
                    </p>
                </form>
            </div>
        </div>
    )
}