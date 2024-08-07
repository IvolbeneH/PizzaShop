import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrderAmount() {
    return (
        <div>
            <Card>
                <CardHeader className="flex-row space-y-0 items-center justify-between">
                    <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="space-y-1">
                    <span className="text-2xl font-bold tracking-tight">13</span>
                    <p className="text-sm text-muted-foreground">
                        <span className="text-emerald-500 dark:text-emerald-400">-6% </span>
                        em relação ao mês passado
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};
